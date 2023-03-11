import path from 'path';
import fs from 'fs';
import FileDownloader from './file_downloader.js';

const downloadsDir = path.join(process.cwd(), 'downloads');

if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir);
}

const url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
const filename = 'file.pdf';

const downloader = new FileDownloader(url, filename);

downloader.download().then(() => {
  console.log(`File "${filename}" downloaded successfully.`);
}).catch(error => {
  console.error(`Error downloading file "${filename}":`, error);
});
