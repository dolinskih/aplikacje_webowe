import * as express from 'express'
import {Express, Request, Response} from 'express'
import { apiRouter } from './routes/api'

const app:Express = express()
const port = 3000

app.use('/api',apiRouter)

app.get('/', (req: Request, res: Response)=>{
    res.json({message: "No data here."})
})

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`)
})