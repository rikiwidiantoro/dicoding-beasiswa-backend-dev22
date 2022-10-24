const fs = require('fs');
// const path = require('path');

// asynchronous (default)
const fileReadCallback = (error, data) => {
  if(error) {
    console.log('Gagal membaca berkas!');
    return;
  }
  console.log(data);
}

// fs.readFile(path.resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);
fs.readFile('./filesystem/notes.txt', 'UTF-8', fileReadCallback);


// synchronous
// const data = fs.readFileSync(path.resolve(__dirname, 'notes.txt'), 'UTF-8');
// const data = fs.readFileSync('./filesystem/notes.txt', 'UTF-8');
// console.log(data);