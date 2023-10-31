import express from 'express'
import {createConnection} from 'mysql'
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
        console.log('Connected to SQL server in api')
    }
})

const router = express.Router()

const notFoundError = {
    "Error": 404,
    "Message": "Brak danych pod tym adresem."
}

router.get('/', (req, res)=>{
    const apiInfo = {
        "/api" : "Informacje o adresach url API.",
        "/api/students": "Lista studentów z ich informacjami.",
        "/api/students/:id": "Informacje o wybranym studencie wg id.",
        "/api/subjects": "Lista przedmiotów szkolnych.",
        "/api/subjects/:id": "Informacje o wybranym przedmiocie wg id."
    }
    res.json(apiInfo)
})

router.get('/students', (req, res)=>{
    const students = []
    connection.query("SELECT * FROM students", (err, result)=>{
        if(err)
        {
            res.json(notFoundError)
        }
        else
        {
            result.forEach((res)=>{
                const resJSON = JSON.stringify(res)
                const finalResult = JSON.parse(resJSON)
                students.push(finalResult)
            })
            res.json(students)
        }   
    })
})

router.get('/students/:id', (req, res)=>{
    const chosenStudentId = req.params.id
    const chosenStudent = []
    connection.query(`SELECT * FROM students WHERE id = ${chosenStudentId}`, (err, result)=>{
        if(err)
        {
            res.json(notFoundError)
        }
        else
        {
            if(result.length)
            {
                result.forEach((res)=>{
                    const resJSON = JSON.stringify(res)
                    const finalResult = JSON.parse(resJSON)
                    chosenStudent.push(finalResult)
                })
                res.json(chosenStudent[0])
            }
            else{
                res.json(notFoundError)
            }
        }
    })
})

router.get('/subjects', (req, res)=>{
    const subjects = []
    connection.query("SELECT * FROM subjects", (err, result)=>{
        if(err)
        {
            res.json(notFoundError)
        }
        else
        {
            result.forEach((res)=>{
                const resJSON = JSON.stringify(res)
                const finalResult = JSON.parse(resJSON)
                subjects.push(finalResult)
            })
            res.json(subjects)
        }  
    })
})

router.get('/subjects/:id', (req, res)=>{
    const chosenSubjectId = req.params.id
    const chosenSubject = []
    connection.query(`SELECT * FROM subjects WHERE id = ${chosenSubjectId}`, (err, result)=>{
        if(err)
        {
            res.json(notFoundError)
        }
        else
        {
            if(result.length)
            {
                result.forEach((res)=>{
                    const resJSON = JSON.stringify(res)
                    const finalResult = JSON.parse(resJSON)
                    chosenSubject.push(finalResult)
                })
                res.json(chosenSubject[0])
            }
            else{
                res.json(notFoundError)
            }
        }
    })
})


export { router as apiRouter}