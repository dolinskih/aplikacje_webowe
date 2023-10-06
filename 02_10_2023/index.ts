import * as http from 'http'
import {readFile, writeFile} from 'fs/promises'

const hostname: string = '127.0.0.1'
const port: number = 3000

const server: http.Server <typeof http.IncomingMessage, typeof http.ServerResponse> = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse)=>{
    const url: string | undefined = req.url
    const method: string | undefined = req.method
    
    if(url === '/'){
        const html = await readFile('./index.html')
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write(html)
        res.end()
    }
    else if(url === '/dziekujemy'){
        const html = await readFile('./thankyou.html')
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write(html)
        res.end()
    }
    else if(url === '/api')
    {
        const json = {
            Dogs : [
                { Name: "Arnold", Age: 10},
                { Name: "Harold", Age: 3},
                { Name: "Barnaba", Age: 8}
            ]
        }
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(json))
        res.end()
    }
    else if(url === '/kontakt' && method === 'POST'){
        const body: Uint8Array[] | undefined = []
        req.on('data', (chunk)=>{
            body.push(chunk)
        })
        req.on('end', async ()=>{
            const parsedBody: string | undefined = Buffer.concat(body).toString()
            const message: string | undefined = parsedBody.split('=')[1]
            await writeFile(`contact/message-${Date.now().toString()}.txt`, message)
            res.statusCode = 302
            res.setHeader('Location', '/dziekujemy')
            return res.end()
        })
    }
    else{
        res.statusCode = 404
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify({"error": 404, "description": "Nic nie ma pod tym adresem."}))
        res.end()
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at https://${hostname}:${port}.`)
})