const http = require('http')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const host = '127.0.0.1'
const port = 3000

var currentTicketNumber = 0
var currentNormalTicketNumber = 0
var currentReducedTicketNumber = 0
var currentNormalTicketPrice = 0
var currentReducedTicketPrice = 0
var currentTicketPrice = 0
var normalTicketPrice = 35
var reducedTicketPrice = 20
var response = ''

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(response)
})

function input(prompt)
{
    return new Promise((callbackFn, errorFn) => {
        readline.question(prompt, (uinput)=> {
            callbackFn(uinput);
        }, ()=> {
            errorFn();
        });
    });
}

const main = async()=>
{
    console.log("Witamy w systemie zamówień biletowych.")
    pCurrentNormalTicketNumber = await input(`Podaj liczbę biletów normalnych (aktualna cena - ${normalTicketPrice}PLN): `)
    currentNormalTicketNumber = pCurrentNormalTicketNumber
    pCurrentReducedTicketNumber = await input(`Podaj liczbę biletów ulgowych (aktualna cena - ${reducedTicketPrice}PLN): `)
    currentReducedTicketNumber = pCurrentReducedTicketNumber
    currentTicketNumber = Number(currentReducedTicketNumber) + Number(currentNormalTicketNumber)
    currentNormalTicketPrice = currentNormalTicketNumber * normalTicketPrice
    currentReducedTicketPrice = currentReducedTicketNumber * reducedTicketPrice
    currentTicketPrice = currentNormalTicketPrice + currentReducedTicketPrice

    response = `Dane o zamowieniu: \n Liczba zakupionych biletow: ${currentTicketNumber} \n Liczba zakupionych biletow normalnych: ${currentNormalTicketNumber} \n Liczba zakupionych biletow ulgowych: ${currentReducedTicketNumber} \n -------------- \n Koszt biletow normalnych: ${currentNormalTicketNumber}*${normalTicketPrice}PLN = ${currentNormalTicketPrice}PLN \n Koszt biletow ulgowych: ${currentReducedTicketNumber}*${reducedTicketPrice}PLN = ${currentReducedTicketPrice}PLN \n -------------- \n RAZEM: ${currentTicketPrice}PLN`
    server.listen(port, host, ()=>{
        console.log(`Sprawdź dane o zamówieniu na stronie: http://${host}:${port}`)
    })
}

main()