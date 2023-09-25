import http from 'http'
import {readFile} from 'fs/promises'
const host = '127.0.0.1'
const port = 3000

const server = http.createServer(async (req, res)=>{
    const html = await readFile('./index.html')
    res.statusCode = 200
    res.setHeader('content-type', 'text/html')
    res.write(html)
    res.end()
})

server.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}`)
})