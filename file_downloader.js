import axios from 'axios';
import fs from 'fs';
import path from 'path';

class FileDownloader {
  constructor(url, filename) {
    this.url = url;
    this.filename = filename;
  }

  async download() {
    const localFilePath = path.join(process.cwd(), this.filename);
    const remoteFileSize = (await axios.get(this.url)).headers['content-length'];
    console.log('remoteFileSize', remoteFileSize);

    if (fs.existsSync(localFilePath)) {
      const localFileSize = fs.statSync(localFilePath).size;
        console.log('localFileSize', localFileSize);
      if (remoteFileSize === localFileSize) {
        console.log(`File "${this.filename}" already exists and has the same size.`);
        return;
      }
    }

    const response = await axios.get(this.url, { responseType: 'stream' });
    const writer = fs.createWriteStream(localFilePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  }
}

export default FileDownloader;
