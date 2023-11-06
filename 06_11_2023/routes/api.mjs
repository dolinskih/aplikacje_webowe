import express from 'express'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

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

router.get('/students', async (req, res)=>{
    const students = await prisma.students.findMany()

    if(students && students != "")
    {
        res.json(students)
    }
    else{
        res.json(notFoundError)
    }
})

router.get('/students/:id', async(req, res)=>{
    const chosenStudentId = Number(req.params.id)
    const chosenStudent = await prisma.students.findMany({
        where: {
            id: chosenStudentId
        }
    })

    if(chosenStudent && chosenStudent != "")
    {
        res.json(chosenStudent)
    }
    else{
        res.json(notFoundError)
    }
})

router.get('/subjects', async(req, res)=>{
    const subjects = await prisma.subjects.findMany()
    if(subjects && subjects != "")
    {
        res.json(subjects)
    }
    else{
        res.json(notFoundError)
    }
})

router.get('/subjects/:id', async(req, res)=>{
    const chosenSubjectId = Number(req.params.id)
    const chosenSubject = await prisma.subjects.findMany({
        where:{
            id: chosenSubjectId
        }
    })

    if(chosenSubject && chosenSubject != "")
    {
        res.json(chosenSubject)
    }
    else{
        res.json(notFoundError)
    }
})


export { router as apiRouter}