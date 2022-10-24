const fs = require('fs');

// membaca
const readableStream = fs.createReadStream('./stream/input.txt', {highWaterMark: 15});
// menulis
const writableStream = fs.createWriteStream('./stream/output.txt');

readableStream.on('readable', () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch(error) {

  }
});

// readableStream.on('end', () => {
//   console.log('Done');
// });
