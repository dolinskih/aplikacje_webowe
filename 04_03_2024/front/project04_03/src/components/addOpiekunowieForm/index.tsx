import { ChangeEvent, FormEvent, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Opiekunowie } from "../../types/opiekunowie"

function AddOpiekunowieForm(){
    const mutation = useMutation<Opiekunowie, unknown>({mutationKey: ['opiekunowie'], mutationFn: ()=>{
        return axios.post('http://localhost:3000/api/opiekunowie', opiekun)
    }})
    const [opiekun, setOpiekun] = useState({
        firstName: '',
        lastName: '',
        dogId: 0
    })
    const handleSubmit = async(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        await mutation.mutate()
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setOpiekun((prevOpiekun) => ({...prevOpiekun, [name]: value}))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">Imię:</label>
            <input type="text" name="firstName" value={opiekun.firstName} onChange={handleChange}/>
            <label htmlFor="lastName">Nazwisko:</label>
            <input type="text" name="lastName" value={opiekun.lastName} onChange={handleChange}/>
            <label htmlFor="dogId">ID psa:</label>
            <input type="number" name="dogId" value={opiekun.dogId} onChange={handleChange}/>
            <input type="submit" value="Dodaj"/>
        </form>
    )
}

export default AddOpiekunowieForm