import {config} from 'dotenv'
config()

import * as express from 'express'
import {Router} from 'express'
import { PrismaClient } from '@prisma/client'
import {Request, Response} from 'express'
import * as bodyParser from 'body-parser'
import {MongoClient} from 'mongodb'

const router: Router = express.Router()
const prisma: PrismaClient = new PrismaClient()
const urlencodedParser = bodyParser.urlencoded({ extended: false })  
const uri = `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASS}@cluster0.dzcwp18.mongodb.net/?retryWrites=true&w=majority`

const notFoundError = {
    error: "404",
    message: "Not Found."  
}

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 

//GET dla wszystkich obiektów:

router.get('/psy', async(req: Request, res: Response)=>{
    const dogs = await prisma.psy.findMany()
    if(dogs)
    {
        res.json(dogs)
    }
    else{
        res.json(notFoundError)
    }
})

router.get('/karmienie', async(req: Request, res: Response)=>{
    const feeding = await prisma.karmienie.findMany()
    if(feeding)
    {
        res.json(feeding)
    }
    else{
        res.json(notFoundError)
    }
})

router.get('/opiekunowie', async(req: Request, res: Response)=>{
    const keepers = await prisma.opiekunowie.findMany()
    if(keepers)
    {
        res.json(keepers)
    }
    else{
        res.json(notFoundError)
    }
})

router.get('/psy_dane', async(req: Request, res: Response)=>{
    const dogsData = await prisma.psy_dane.findMany()
    if(dogsData)
    {
        res.json(dogsData)
    }
    else{
        res.json(notFoundError)
    }
})

router.get('/spacery', async(req: Request, res: Response)=>{
    const walks = await prisma.spacery.findMany()
    if(walks)
    {
        res.json(walks)
    }
    else{
        res.json(notFoundError)
    }
})

//POST, PUT, PATCH, DELETE dla modelu psy

router.post('/psy', async (req: Request, res: Response)=>{

    if(req.body.name)
    {
        await prisma.psy.create({
            data: {
                name: req.body.name.toString()
            }
        }).then(()=>{
            res.json({message : "Dog added."})
        }).catch((err)=>{
            throw err
        })
    }
})

router.put('/psy/:id/:name', urlencodedParser, async (req: Request, res: Response)=>{

    if(req.params.name)
    {
        await prisma.psy.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name: req.params.name
            }
        }).then(()=>{
            res.json({message : "Dog updated."})
        }).catch((err)=>{
            res.json({error: 404, message: "Dog not found."})
        })
    }
})

router.patch('/psy/:id/:name', urlencodedParser, async (req: Request, res: Response)=>{

    if(req.params.name)
    {
        await prisma.psy.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name: req.params.name
            }
        }).then(()=>{
            res.json({message : "Dog updated."})
        }).catch((err)=>{
            res.json({error: 404, message: "Dog not found."})
        })
    }
})

router.delete('/psy/:id', async(req: Request, res: Response)=>{
    if(req.params.id)
    {
        await prisma.psy.delete({
            where: {
                id: Number(req.params.id)
            }
        }).then(()=>{
            res.json({message: "Dog deleted."})
        }).catch((err)=>{
            res.json({error: 404, message: "Dog not found."})
        })
    }
})

//POST, PUT, PATCH, DELETE dla modelu karmienie

router.post('/karmienie', async(req: Request, res: Response)=>{
    const {dogId, keeperId, time} = req.body
    if(!dogId || !keeperId || !time)
    {
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }

    try{
        await prisma.karmienie.create({
            data: {
                dogId,
                keeperId,
                time
            }
        }).then(()=>{
            res.status(201).json({message: "New feeding added."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

router.put('/karmienie', async(req: Request, res: Response)=>{
    const {id, dogId, keeperId, time} = req.body
    if(!id)
    {
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.karmienie.update({
            where: {
                id
            },
            data: {
                dogId,
                keeperId,
                time
            }
        }).then(()=>{
            res.json({message : "Feeding updated."})
        }).catch((err)=>{
            res.json({error: 404, message: "Feeding not found."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

router.patch('/karmienie', async(req: Request, res: Response)=>{
    const {id, dogId, keeperId, time} = req.body
    if(!id)
    {
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.karmienie.update({
            where: {
                id
            },
            data: {
                dogId,
                keeperId,
                time
            }
        }).then(()=>{
            res.json({message : "Feeding updated."})
        }).catch((err)=>{
            res.json({error: 404, message: "Feeding not found."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

router.delete('/karmienie', async(req: Request, res: Response)=>{
    const {id} = req.body
    if(!id){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.karmienie.delete({
            where: {
                id
            }
        }).then(()=>{
            res.json({message: "Feeding deleted."})
        }).catch((err)=>{
            res.json({error: 404, message: "Feeding not found."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

//POST, PUT, PATCH, DELETE dla modelu opiekunowie

router.post('/opiekunowie', async(req: Request, res: Response)=>{
    const {firstName, lastName, dogId} = req.body
    if(!firstName || !lastName || !dogId){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.opiekunowie.create({
            data: {
                firstName,
                lastName,
                dogId
            }
        }).then(()=>{
            res.status(201).json({message: "New keeper added."})
        }).catch((err)=>{
            throw err
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

router.put('/opiekunowie', async(req: Request, res: Response)=>{
    const {id, firstName, lastName, dogId} = req.body
    if(!id){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.opiekunowie.update({
            where: {
                id
            },
            data: {
                firstName,
                lastName,
                dogId
            }
        }).then(()=>{
            res.json({message : "Keeper updated."})
        }).catch((err)=>{
            res.json({error: 404, message: "Keeper not found."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

router.patch('/opiekunowie', async(req: Request, res: Response)=>{
    const {id, firstName, lastName, dogId} = req.body
    if(!id){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.opiekunowie.update({
            where: {
                id
            },
            data: {
                firstName,
                lastName,
                dogId
            }
        }).then(()=>{
            res.json({message : "Keeper updated."})
        }).catch((err)=>{
            res.json({error: 404, message: "Keeper not found."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

router.delete('/karmienie', async(req: Request, res: Response)=>{
    const {id} = req.body
    if(!id){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.opiekunowie.delete({
            where: {
                id
            }
        }).then(()=>{
            res.json({message: "Keeper deleted."})
        }).catch((err)=>{
            res.json({error: 404, message: "Keeper not found."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

//POST, PUT, PATCH, DELETE dla modelu psy_dane

router.post('/psy_dane', async(req: Request, res: Response)=>{
    const {id, weight, breed} = req.body
    if(!id || !weight || !breed){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.psy_dane.create({
            data: {
                id,
                weight, 
                breed
            }
        }).then(()=>{
            res.status(201).json({message: "New dog data added."})
        }).catch((err)=>{
            throw err
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

router.put('/psy_dane', async(req: Request, res: Response)=>{
    const {id, weight, breed} = req.body
    if(!id){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.psy_dane.update({
            where: {
                id
            },
            data: {
                weight,
                breed
            }
        }).then(()=>{
            res.json({message : "Dog data updated."})
        }).catch((err)=>{
            res.json({error: 404, message: "Dog data not found."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

router.patch('/psy_dane', async(req: Request, res: Response)=>{
    const {id, weight, breed} = req.body
    if(!id){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.psy_dane.update({
            where: {
                id
            },
            data: {
                weight,
                breed
            }
        }).then(()=>{
            res.json({message : "Dog data updated."})
        }).catch((err)=>{
            res.json({error: 404, message: "Dog data not found."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

router.delete('/psy_dane', async(req: Request, res: Response)=>{
    const {id} = req.body
    if(!id){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.psy_dane.delete({
            where: {
                id
            }
        }).then(()=>{
            res.json({message: "Dog data deleted."})
        }).catch((err)=>{
            res.json({error: 404, message: "Dog data not found."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

//POST, PUT, PATCH, DELETE dla modelu spacery

router.post('/spacery', async(req: Request, res: Response)=>{
    const {dogId, keeperId, time} = req.body
    if(!dogId || !keeperId || !time){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.spacery.create({
            data: {
                dogId,
                keeperId,
                time
            }
        }).then(()=>{
            res.status(201).json({message: "New walk added."})
        }).catch((err)=>{
            throw err
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

router.put('/spacery', async(req: Request, res: Response)=>{
    const {id, dogId, keeperId, time} = req.body
    if(!id){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.spacery.update({
            where: {
                id
            },
            data: {
                dogId,
                keeperId,
                time
            }
        }).then(()=>{
            res.json({message : "Walk updated."})
        }).catch((err)=>{
            res.json({error: 404, message: "Walk not found."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

router.patch('/spacery', async(req: Request, res: Response)=>{
    const {id, dogId, keeperId, time} = req.body
    if(!id){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.spacery.update({
            where: {
                id
            },
            data: {
                dogId,
                keeperId,
                time
            }
        }).then(()=>{
            res.json({message : "Walk updated."})
        }).catch((err)=>{
            res.json({error: 404, message: "Walk not found."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

router.delete('/spacery', async(req: Request, res: Response)=>{
    const {id} = req.body
    if(!id){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        await prisma.spacery.delete({
            where: {
                id
            }
        }).then(()=>{
            res.json({message: "Walk deleted."})
        }).catch((err)=>{
            res.json({error: 404, message: "Walk not found."})
        })
    }
    catch(err){
        res.status(500).json({error: 500, message: "Server problem."})
    }
})

//Wysyłanie danych do nierelacyjnej bazy danych MongoDB

router.post('/mongo/:collection', async(req: Request, res: Response)=>{
    const collection = req.params.collection
    if(!collection){
        res.status(400).json({error: 400, message: "Incorrect input data."})
    }
    try{
        const db = await MongoClient.connect(uri)
        const dbo = await db.db("20_11")
        const obj = req.body
        try{
            await dbo.collection(collection).insertOne(obj)
            console.log(`New data added to ${collection} collection.`)
            res.json({message: `New data added to ${collection} collection.`})
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

export {router as apiRouter}