const http = require('http')
const port = 3000

const server = http.createServer((req, res)=>{
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<meta charset="UTF-8">')
        res.write('<h1>Bem-vindo à diferentes hotas.😁</h1>')
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<meta charset="UTF-8">')
        res.write('<h1>Sobre nós: somos uma empresa dedicada a...👩‍💻🧑‍💻</h1>')
    } else {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<meta charset="UTF-8">')
        res.write('<h1>Página não Encontrada😵‍💫😵‍💫😵‍💫</h1>')
    }
})
server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})