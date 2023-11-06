import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import bodyParser from 'body-parser'
import { apiRouter } from './routes/api.mjs'
import {createConnection} from 'mysql'
import {PrismaClient} from '@prisma/client'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000
const prisma = new PrismaClient()

const connection = createConnection({
    host: "172.24.32.1",
    user: "root",
    password: "",
    database: "szkola"
})

connection.connect((err)=>{
    if(err)
    {
        throw err
    }
    else
    {
        console.log('Connected to SQL server in index')
    }
})

app.use('/api',apiRouter)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.route('/kontakt')
.get((req, res)=>{
    res.sendFile(path.join(__dirname, '/kontakt.html'))
})
.post(async (req, res)=>{
    const formData = req.body
    await prisma.form_submissions.create({
        data: {
            firstName: formData.firstName,
            email: formData.email,
            topic: formData.topic,
            message: formData.message
        }
    }).then(()=>{
        res.redirect('/')
    }).catch((err)=>{
        throw err
    })
})

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`)
})