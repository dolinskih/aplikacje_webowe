import express from 'express'

const router = express.Router()

const students = [
    {
        id: 1,
        name: "Jan",
        surname: "Kowalski",
        email: "jan.kowalski@email.pl"
    },
    {
        id: 2,
        name: "Piotr",
        surname: "Nowak",
        email: "piotr.nowak@email.pl"
    },
    {
        id: 3,
        name: "Ryszard",
        surname: "Styrta",
        email: "ryszard.styrta@email.pl"
    },
    {
        id: 4,
        name: "Tomasz",
        surname: "Bączek",
        email: "tomasz.baczek@email.pl"
    },
    {
        id: 5,
        name: "Dżesika",
        surname: "Tramp",
        email: "dzesika.tramp@email.com"
    },
    {
        id: 6,
        name: "Jan",
        surname: "Paweł",
        email: "jan.pawel@email.pl"
    },
    {
        id: 7,
        name: "Krzysztof",
        surname: "Kochański",
        email: "krzysztof.kochanski@email.pl"
    },
    {
        id: 8, 
        name: "Bronisław",
        surname: "Stary",
        email: "bronislaw.stary@email.pl"
    },
    {
        id: 9,
        name: "Karol",
        surname: "Lidlowy",
        email: "karol.lidlowy@email.pl"
    },
    {
        id: 10,
        name: "Nataniel",
        surname: "Aureliusz",
        email: "nataniel.aureliusz@email.pl"
    }
]

const subjects = [
    {
        id: 1,
        subject: "Język polski",
        hoursAWeek: 5
    },
    {
        id: 2,
        subject: "Matematyka",
        hoursAWeek: 3
    },
    {
        id: 3,
        subject: "Język angielski",
        hoursAWeek: 8
    },
    {
        id: 4,
        subject: "Aplikacje mobilne",
        hoursAWeek: 2
    },
    {
        id: 5,
        subject: "Geografia",
        hoursAWeek: 25
    },
    {
        id: 6,
        subject: "Biologia",
        hoursAWeek: -3
    },
    {
        id: 7,
        subject: "Systemy komputrowe JS",
        hoursAWeek: 12
    },
    {
        id: 8,
        subject: "Historia",
        hoursAWeek: 10
    },
    {
        id: 9,
        subject: "Wiedza o społeczeństwie",
        hoursAWeek: 1
    },
    {
        id: 10,
        subject: "Chemia",
        hoursAWeek: 13
    }
]

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
    res.json(students)
})

router.get('/students/:id', (req, res)=>{
    const chosenStudentId = req.params.id
    const chosenStudent = students.find(student => student.id == chosenStudentId)
    if(chosenStudent){
        res.json(chosenStudent)
    }
    else{
        res.status(404).send(notFoundError)
    }
})

router.get('/subjects', (req, res)=>{
    res.json(subjects)
})

router.get('/subjects/:id', (req, res)=>{
    const chosenSubjectId = req.params.id
    const chosenSubject = subjects.find(subject => subject.id == chosenSubjectId)
    if(chosenSubject){
        res.json(chosenSubject)
    }
    else{
        res.status(404).send(notFoundError)
    }
})


export { router as apiRouter}