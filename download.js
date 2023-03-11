import path from 'path';
import fs from 'fs';
import FileDownloader from './file_downloader.js';

const downloadsDir = path.join(process.cwd(), 'downloads');

if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir);
}

const url = 'https://filesamples.com/samples/document/txt/sample3.txt';
const filename = 'downloads/file.txt';

const downloader = new FileDownloader('https://filesamples.com/samples/document/txt/sample3.txt', filename);

downloader.download().then(() => {
  console.log(`File "${filename}" downloaded successfully.`);
}).catch(error => {
  console.error(`Error downloading file "${filename}":`, error);
});
