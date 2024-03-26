const fs = require('fs');
const read = require ('readline');


fs.unlink('Danki.txt', (err)=>{
    console.log("File deleted");
})