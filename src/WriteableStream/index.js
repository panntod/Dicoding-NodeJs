const fs = require("fs");
const path = require("path");
const { Readable, Writable } = require("stream");

// Tentukan nilai highWaterMark untuk Readable stream
const highWaterMarkValue = 15;

// Readable Stream
const readableStream = new Readable({
  highWaterMark: highWaterMarkValue,
  read() {},
});

// Membaca teks dari input.txt dan membaginya dalam potongan berukuran 15 karakter
const inputFilePath = path.resolve(__dirname, "lorem.txt");
const text = fs.readFileSync(inputFilePath, "utf8");
let offset = 0;

readableStream._read = function () {
  const chunk = text.slice(offset, offset + highWaterMarkValue);
  this.push(chunk ? chunk : null);
  offset += highWaterMarkValue;
};

// Writable Stream
const writableStream = fs.createWriteStream("src/WriteableStream/output.txt", {
  flags: "a",
}); // 'a' untuk menambahkan data ke file

// Menuliskan ulang teks pada output.txt dengan pemisah baris baru
const separator = "\n";
const transformStream = new Writable({
  write(chunk, encoding, callback) {
    const data = chunk.toString();
    writableStream.write(data + separator, "utf8");
    callback();
  },
});

readableStream.pipe(transformStream);

// Event saat selesai menulis
transformStream.on("finish", () => {
  console.log("Teks berhasil ditulis ulang ke output.txt");
});

// Event penanganan error pada transformStream
transformStream.on("error", (err) => {
  console.error("Terjadi kesalahan:", err);
});

/*
  Patikan Anda Sudah Menjalankan Perintah ini Sebelumnya
  npm i path fs

  Jalankan Code ini dengan 
  node .\src\WriteableStream\index.js
*/
