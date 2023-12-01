const fs = require("fs");
const path = require("path");


const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile(path.resolve(__dirname, 'todo.txt'), "UTF-8", fileReadCallback);

/*  
    Patikan Anda Sudah Menjalankan Perintah ini Sebelumnya
    npm i path fs

    Jalankan Code ini dengan 
    node .\src\FileSystem\index.js
*/ 