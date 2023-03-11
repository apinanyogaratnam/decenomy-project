import FileDownloader from './file_downloader.js';
import fs from 'fs';
import path from 'path';

const urls = {
  'dummy.pdf': 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  'video.mp4': 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
  'file_downloader.js': 'https://raw.githubusercontent.com/apinanyogaratnam/decenomy-project/main/file_downloader.js',
  'batch.js': 'https://raw.githubusercontent.com/apinanyogaratnam/decenomy-project/main/batch.js',
};



const downloadsDir = './downloads';

// Create downloads directory if it doesn't exist
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir);
}

// Create an array of promises that download each URL
// const downloadPromises = urls.map(url => {
//   const filename = path.join(downloadsDir, path.basename(url));
//   const downloader = new FileDownloader(url, filename);
//   return downloader.download();
// });

const downloadPromises = Object.keys(urls).map(filename => {
    const url = urls[filename];
    const downloader = new FileDownloader(url, filename);
    return downloader.download();
});

// Wait for all promises to resolve and log completion message
Promise.all(downloadPromises).then(() => {
  console.log(`All files downloaded successfully to "${downloadsDir}" directory.`);
}).catch(error => {
  console.error('Error downloading files:', error);
});
