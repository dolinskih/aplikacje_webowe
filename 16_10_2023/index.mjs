import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/kontakt', (req, res)=>{
    res.sendFile(path.join(__dirname, '/kontakt.html'))
})

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`)
})