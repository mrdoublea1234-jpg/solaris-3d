// Selective Cache Service Worker for Solaris 3D
// Only caches app icons and manifest to ensure instant splash screen loading (0ms)
// All other web pages, API routes, and 3D textures always pass-through directly to network for real-time updates.

const CACHE_NAME = 'solaris-icons-v1';
const ICON_ASSETS = [
  '/logo-192.png',
  '/logo-512.png',
  '/manifest.json'
];

// Pre-cache icons on installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ICON_ASSETS);
    })
  );
  self.skipWaiting();
});

// Clean up old caches on activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => clients.claim())
  );
});

// Selective Stale-While-Revalidate caching for icons only
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only selectively intercept same-origin icons and manifest
  const isIconAsset = url.origin === self.location.origin && 
    (ICON_ASSETS.includes(url.pathname) || url.pathname.startsWith('/logo-'));

  if (!isIconAsset) {
    // Pass-through directly to network for all other requests (pages, 3D scenes, API, updates)
    return;
  }

  // Stale-While-Revalidate: serve cached version instantly (0ms), update cache in background
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      });
    })
  );
});
