import {config} from 'dotenv'
config()

import express from 'express'
import {PrismaClient} from '@prisma/client'
import {MongoClient} from 'mongodb'

const prisma = new PrismaClient()
const uri = `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASS}@cluster0.dzcwp18.mongodb.net/?retryWrites=true&w=majority`

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
        "/api/subjects/:id": "Informacje o wybranym przedmiocie wg id.",
        "/api/messages": "Dane z formularzy."
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

router.get('/messages', async(req, res)=>{
    try{
        const db = await MongoClient.connect(uri)
        const dbo = await db.db("13_11")
        try{
            const result = await dbo.collection("contact").find().toArray()
            res.json(result)
        } catch (e) {
            throw e
        }
        await db.close()
    }
    catch(e)
    {
        throw e
    }
})


export { router as apiRouter}