const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 4000;

//Criando novo arquivo
/*fs.writeFile('Danki.txt', 'teste danki code', (err) => {
    if(err) throw err;
    console.log('o arquivo foi criado com sucesso')
})*/

//Criando ou inserindo conteúdo depois do que já existe.

fs.appendFile("Danki.txt", "\nOutro conteúdo"  , (err)=>{
    if(err) throw err;
    console.log('Conteudo adicionado!')
});


const server = http.createServer( (req, res) => {

    if (req.url == '/danki' ){
    fs.readFile('index.html', (err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })

    } else {
        return res.end();
    }

    

})

server.listen(port,hostname, () => {
    console.log("Servidor está rodando!")

})