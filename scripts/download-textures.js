const fs = require('fs');
const path = require('path');
const https = require('https');

const texturesDir = path.join(__dirname, '..', 'public', 'textures');

if (!fs.existsSync(texturesDir)) {
  fs.mkdirSync(texturesDir, { recursive: true });
}

const baseUrl = 'https://raw.githubusercontent.com/shivam-070208/Solarsystem/main/textures/';
const files = [
  'sun.jpg',
  'mercury.jpg',
  'venus.jpg',
  'earth.jpg',
  'mars.jpg',
  'jupiter.jpg',
  'saturn.jpg',
  'saturn_ring.png',
  'uranus.jpg',
  'neptune.jpg'
];

async function downloadFile(filename) {
  const url = `${baseUrl}${filename}`;
  const dest = path.join(texturesDir, filename);

  return new Promise((resolve, reject) => {
    console.log(`Downloading ${filename}...`);
    const file = fs.createWriteStream(dest);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete the file async.
      reject(err);
    });
  });
}

async function main() {
  console.log('Starting texture downloads...');
  const promises = files.map(file => downloadFile(file).catch(err => console.error(`Error downloading ${file}:`, err.message)));
  
  await Promise.all(promises);
  console.log('All downloads completed!');
}

main();
