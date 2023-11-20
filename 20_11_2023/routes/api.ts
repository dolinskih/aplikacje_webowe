import * as express from 'express'
import {Router} from 'express'
import { PrismaClient } from '@prisma/client'
import {Request, Response} from 'express'
import * as bodyParser from 'body-parser'

const router: Router = express.Router()
const prisma: PrismaClient = new PrismaClient()
const urlencodedParser = bodyParser.urlencoded({ extended: false })  

const notFoundError = {
    error: "404",
    message: "Not Found."  
}

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

router.post('/psy/:name', urlencodedParser, async (req: Request, res: Response)=>{

    if(req.params.name)
    {
        await prisma.psy.create({
            data: {
                name: req.params.name.toString()
            }
        }).then(()=>{
            res.json({message : "Dog added."})
        }).catch((err)=>{
            throw err
        })
    }
})

export {router as apiRouter}