const fs = require('fs');
const read = require ('readline');


fs.rename('Dankicode.txt', 'Binho.txt', (err)=>{
    console.log("Renomeado");
})