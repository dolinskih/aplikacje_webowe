import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import bodyParser from 'body-parser'
import { apiRouter } from './routes/api.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000

app.use('/api',apiRouter)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/kontakt', (req, res)=>{
    res.sendFile(path.join(__dirname, '/kontakt.html'))
})

app.post('/kontakt', (req, res)=>{
    console.log(req.body)
    res.redirect('/')
})

// app.get('/api', (req, res)=>{
//     const apiInfo = {
//         "/api" : "Informacje o adresach url API.",
//         "/api/students": "Lista studentów z ich informacjami.",
//         "/api/students/:id": "Informacje o wybranym studencie wg id.",
//         "/api/subjects": "Lista przedmiotów szkolnych.",
//         "/api/subjects/:id": "Informacje o wybranym przedmiocie wg id."
//     }
//     res.json(apiInfo)
// })

// app.get('/api/students', (req, res)=>{
//     res.json(students)
// })

// app.get('/api/students/:id', (req, res)=>{
//     const chosenStudentId = req.params.id
//     const chosenStudent = students.find(student => student.id == chosenStudentId)
//     if(chosenStudent){
//         res.json(chosenStudent)
//     }
//     else{
//         res.status(404).send(notFoundError)
//     }
// })

// app.get('/api/subjects', (req, res)=>{
//     res.json(subjects)
// })

// app.get('/api/subjects/:id', (req, res)=>{
//     const chosenSubjectId = req.params.id
//     const chosenSubject = subjects.find(subject => subject.id == chosenSubjectId)
//     if(chosenSubject){
//         res.json(chosenSubject)
//     }
//     else{
//         res.status(404).send(notFoundError)
//     }
// })

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`)
})