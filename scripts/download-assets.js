const fs = require('fs');
const path = require('path');
const https = require('https');

const textures = [
  { name: 'sun.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_sun.jpg' },
  { name: 'mercury.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_mercury.jpg' },
  { name: 'venus.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg' },
  { name: 'earth.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg' },
  { name: 'mars.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_mars.jpg' },
  { name: 'jupiter.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg' },
  { name: 'saturn.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_saturn.jpg' },
  { name: 'uranus.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_uranus.jpg' },
  { name: 'neptune.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_neptune.jpg' }
];

const targetDir = path.join(__dirname, '../public/textures/high-res');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading ${path.basename(dest)}...`);
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (const tex of textures) {
    const dest = path.join(targetDir, tex.name);
    if (!fs.existsSync(dest)) {
      try {
        await download(tex.url, dest);
        console.log(`Successfully downloaded ${tex.name}`);
      } catch (e) {
        console.error(`Failed to download ${tex.name}:`, e);
      }
    } else {
      console.log(`${tex.name} already exists. Skipping.`);
    }
  }
  console.log('All downloads complete!');
}

run();
