import http from 'http'
import {readFile} from 'fs'
const host = '127.0.0.1'
const port = 3000

const server = http.createServer(async (req, res)=>{
    await readFile('./index.html', function(err, data){
        res.statusCode = 200
        res.setHeader('content-type', 'text/html')
        res.write(data)
        res.end()
    })
})

server.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}`)
})