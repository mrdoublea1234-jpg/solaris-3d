import fs from 'fs';
import path from 'path';

interface DevStore {
  likes: Record<string, string[]>;
  unlikes: Record<string, string[]>;
  saves: Record<string, string[]>;
  unsaves: Record<string, string[]>;
}

const DEV_FILE = path.join(process.cwd(), '.dev-interactions.json');

export function readDevStore(): DevStore {
  try {
    if (fs.existsSync(DEV_FILE)) {
      const data = fs.readFileSync(DEV_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch {
    // ignore
  }
  return { likes: {}, unlikes: {}, saves: {}, unsaves: {} };
}

export function writeDevStore(store: DevStore) {
  try {
    fs.writeFileSync(DEV_FILE, JSON.stringify(store, null, 2), 'utf-8');
  } catch {
    // ignore
  }
}

export function toggleDevLike(userIds: string[], reelId: string, isLike: boolean) {
  const store = readDevStore();
  const primaryId = userIds[0] || 'default';

  if (!store.likes[primaryId]) store.likes[primaryId] = [];
  if (!store.unlikes[primaryId]) store.unlikes[primaryId] = [];

  if (isLike) {
    if (!store.likes[primaryId].includes(reelId)) {
      store.likes[primaryId].push(reelId);
    }
    store.unlikes[primaryId] = store.unlikes[primaryId].filter(id => id !== reelId);
  } else {
    store.likes[primaryId] = store.likes[primaryId].filter(id => id !== reelId);
    if (!store.unlikes[primaryId].includes(reelId)) {
      store.unlikes[primaryId].push(reelId);
    }
  }

  writeDevStore(store);
}

export function toggleDevSave(userIds: string[], reelId: string, isSave: boolean) {
  const store = readDevStore();
  const primaryId = userIds[0] || 'default';

  if (!store.saves[primaryId]) store.saves[primaryId] = [];
  if (!store.unsaves[primaryId]) store.unsaves[primaryId] = [];

  if (isSave) {
    if (!store.saves[primaryId].includes(reelId)) {
      store.saves[primaryId].push(reelId);
    }
    store.unsaves[primaryId] = store.unsaves[primaryId].filter(id => id !== reelId);
  } else {
    store.saves[primaryId] = store.saves[primaryId].filter(id => id !== reelId);
    if (!store.unsaves[primaryId].includes(reelId)) {
      store.unsaves[primaryId].push(reelId);
    }
  }

  writeDevStore(store);
}

export function getDevInteractions(userIds: string[]): {
  likes: string[];
  unlikes: string[];
  saves: string[];
  unsaves: string[];
} {
  const store = readDevStore();
  const likes = new Set<string>();
  const unlikes = new Set<string>();
  const saves = new Set<string>();
  const unsaves = new Set<string>();

  for (const id of userIds) {
    (store.likes[id] || []).forEach(r => likes.add(r));
    (store.unlikes[id] || []).forEach(r => unlikes.add(r));
    (store.saves[id] || []).forEach(r => saves.add(r));
    (store.unsaves[id] || []).forEach(r => unsaves.add(r));
  }

  return {
    likes: Array.from(likes),
    unlikes: Array.from(unlikes),
    saves: Array.from(saves),
    unsaves: Array.from(unsaves)
  };
}
