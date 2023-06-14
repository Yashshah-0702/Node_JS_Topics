const http = require('http')
const routing = require('./routing')

const server = http.createServer(routing.txt)
console.log(routing.text)

server.listen(7300);