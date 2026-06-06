//SERVIDOR//
// const http = require("http");
// const server = http.createServer((req, res) => {

//     res.statusCode = 404;
//     res.setHeader("Content-Type", "application/json; charset=utf-8") 
    
//      if (req.url === '/'&& req.method === 'GET'){
//         res.statusCode = 200;
//         res.end(JSON.stringify({mensagem: "Bem-vindo à API!"}))
//     }

// })

//   const PORT = 3000;

//     server.listen(PORT, () => {
//         console.log('Servidor executando na http://localhost:$(PORT)')
//     });

const app = require("./src/app");

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});