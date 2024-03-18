import { ChangeEvent, FormEvent, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Karmienie } from "../../types/karmienie"

function AddKarmienieForm(){
    const mutation = useMutation<Karmienie, unknown>({mutationKey: ['karmienie'], mutationFn: ()=>{
        return axios.post('http://localhost:3000/api/karmienie', karmienie)
    }})
    const [karmienie, setKarmienie] = useState({
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
        setKarmienie((prevKarmienie) => ({...prevKarmienie, [name]: value}))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="dogId">ID psa:</label>
            <input type="number" name="dogId" value={karmienie.dogId} onChange={handleChange}/>
            <label htmlFor="keeperId">ID opiekuna:</label>
            <input type="number" name="keeperId" value={karmienie.keeperId} onChange={handleChange}/>
            <label htmlFor="time">Czas:</label>
            <input type="datetime-local" name="time" value={karmienie.time} onChange={handleChange}/>
            <input type="submit" value="Dodaj"/>
        </form>
    )
}

export default AddKarmienieForm