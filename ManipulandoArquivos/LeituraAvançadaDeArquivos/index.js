const fs = require('fs');


fs.readFile('Danki.txt', (err, data)=>{

    let str = data.toString();

    let newStr = str.substring(0,15);

    console.log(newStr)
    

})