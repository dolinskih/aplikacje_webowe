import { ChangeEvent, FormEvent, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Psy } from "../../types/psy"
import styled from "styled-components"

const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`

function AddPsyForm(){
    const mutation = useMutation<Psy, unknown>({mutationKey: ['psy'], mutationFn: ()=>{
        return axios.post('http://localhost:3000/api/psy', pies)
    }})
    const [pies, setPies] = useState({
        id: '',
        name: ''
    })
    const handleSubmit = async(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        await mutation.mutate()
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setPies((prevPies) => ({...prevPies, [name]: value}))
    }

    return(
        <Form onSubmit={handleSubmit}>
            <label htmlFor="name">Imię:</label>
            <input type="text" name="name" value={pies.name} onChange={handleChange}/>
            <input type="submit" className="btn btn-primary m-1" value="Dodaj"/>
        </Form>
    )
}

export default AddPsyForm