const http = require('http');
const porta = 3000
const url = require('url')

const servidor = http.createServer((requisicao, resposta)=>{
    resposta.writeHead(200, {'Content-Type':'text/plain'})
    var dadosUrl = url.parse(requisicao.url, true).query;
    var texto = dadosUrl.ano + " " +dadosUrl.mes;
    resposta.end(texto);
})

servidor.listen(porta,()=>{
    console.log(`Servidor esta rodando na porta ${porta}`);
})
