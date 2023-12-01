const lodash = require('lodash')
 
const myOddEvenArray = lodash.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
 
console.log(myOddEvenArray);

/*  
    Jalankan code ini dengan perintah
    node .\src\lodash-odd.js
*/