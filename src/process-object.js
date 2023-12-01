const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];

for (let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log('Mode Envirotmen:', process.env.NODE_ENV);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

/*  
  Jalankan code ini dengan perintah
  $env:NODE_ENV="development"; node .\src\process-object.js <Nama Anda>
*/