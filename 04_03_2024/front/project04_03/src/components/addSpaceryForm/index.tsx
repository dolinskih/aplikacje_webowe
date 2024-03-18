import { ChangeEvent, FormEvent, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Spacery } from "../../types/spacery"

function AddSpaceryForm(){
    const mutation = useMutation<Spacery, unknown>({mutationKey: ['spacery'], mutationFn: ()=>{
        return axios.post('http://localhost:3000/api/spacery', spacer)
    }})
    const [spacer, setSpacer] = useState({
        dogId: 0,
        keeperId: 0,
        time: ''
    })
    const handleSubmit = async(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        await mutation.mutate()
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setSpacer((prevSpacer) => ({...prevSpacer, [name]: value}))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="dogId">ID psa:</label>
            <input type="number" name="dogId" value={spacer.dogId} onChange={handleChange}/>
            <label htmlFor="keeperId">ID opiekuna:</label>
            <input type="number" name="keeperId" value={spacer.keeperId} onChange={handleChange}/>
            <label htmlFor="time">Czas:</label>
            <input type="datetime-local" name="time" value={spacer.time} onChange={handleChange}/>
            <input type="submit" value="Dodaj"/>
        </form>
    )
}

export default AddSpaceryForm