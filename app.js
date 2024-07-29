const http = require('http');
const porta = 3000

const servidor = http.createServer((requisicao, resposta)=>{
    resposta.writeHead(200, {'Content-Type':'text/plain'});
    resposta.end('Ola, sou servidor');
})

servidor.listen(porta,()=>{
    console.log(`Servidor esta rodando na porta ${porta}`);
})
