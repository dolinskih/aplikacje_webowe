import fs from 'fs'
import stream from 'stream'

function * randomNumbers(){
    for(let i=0; i<20; i++){
        yield Math.floor(Math.random() * 2137) - 420
    }
}

const filename = `generatedNumbers/random-${Date.now().toString()}.txt`
const fileStream = fs.createWriteStream(filename)
const readable = stream.Readable.from(randomNumbers())

readable.on('data', (chunk)=>{
    fileStream.write(`${chunk}\n`)
})

readable.on('end', ()=>{
    fileStream.end()
})

console.log(`Wylosowane liczby zostaly zapisane w: ${filename}`)