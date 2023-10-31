import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import bodyParser from 'body-parser'
import { apiRouter } from './routes/api.mjs'
import {createConnection} from 'mysql'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000

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
.post((req, res)=>{
    const formData = req.body
    const values = Object.values(formData)

    connection.query(`INSERT INTO form_submissions (firstName, email, topic, message) VALUES (?)`, [values], (err)=>{
        if(err)
        {
            throw err
        }
        res.redirect('/')
    })
})

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`)
})