import { ChangeEvent, FormEvent, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Psy_dane } from "../../types/psy_dane"
import styled from "styled-components"

const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`

function AddPsy_daneForm(){
    const mutation = useMutation<Psy_dane, unknown>({mutationKey: ['psy_dane'], mutationFn: ()=>{
        return axios.post('http://localhost:3000/api/psy_dane', pies_dane)
    }})
    const [pies_dane, setPies_dane] = useState({
        id: 0,
        weight: 0,
        breed: ''
    })
    const handleSubmit = async(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        await mutation.mutate()
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setPies_dane((prevPies_dane) => ({...prevPies_dane, [name]: value}))
    }

    return(
        <Form onSubmit={handleSubmit}>
            <label htmlFor="id">ID:</label>
            <input type="number" name="id" value={pies_dane.id} onChange={handleChange}/>
            <label htmlFor="weight">Waga:</label>
            <input type="number" name="weight" value={pies_dane.weight} onChange={handleChange}/>
            <label htmlFor="breed">Rasa:</label>
            <input type="text" name="breed" value={pies_dane.breed} onChange={handleChange}/>
            <input type="submit" className="btn btn-primary m-1" value="Dodaj"/>
        </Form>
    )
}

export default AddPsy_daneForm