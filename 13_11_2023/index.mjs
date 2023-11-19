import {config} from 'dotenv'
config()

import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import bodyParser from 'body-parser'
import { apiRouter } from './routes/api.mjs'
import {MongoClient} from 'mongodb'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000

const uri = `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASS}@cluster0.dzcwp18.mongodb.net/?retryWrites=true&w=majority`

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
    try{
        const db = await MongoClient.connect(uri)
        const dbo = await db.db("13_11")
        const formSubmitData = { firstName : formData.firstName, email: formData.email, topic: formData.topic, message: formData.message}
        try{
            await dbo.collection("contact").insertOne(formSubmitData)
            console.log("Form submission success")
        } catch (e) {
            throw e
        }
        await db.close()
        await res.redirect('/')
    }
    catch(e)
    {
        throw e
    }
})

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`)
})