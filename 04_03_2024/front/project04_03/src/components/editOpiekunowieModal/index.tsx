import { ChangeEvent, useEffect, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Opiekunowie } from "../../types/opiekunowie"
import styled from "styled-components"

interface EditOpiekunowieModalProps{
    initOpiekun: Opiekunowie,
    initSetOpiekun: (newOpiekun: Opiekunowie) => void
}

const Form = styled.form`
    display:flex;
    flex-direction:column;
`

function EditOpiekunowieModal({initOpiekun}:EditOpiekunowieModalProps) {
    const mutation = useMutation<Opiekunowie, unknown>({mutationKey: ['opiekunowie'], mutationFn: ()=>{
        opiekun.dogId = Number(opiekun.dogId)
        return axios.put(`http://localhost:3000/api/opiekunowie`, opiekun)
    }})

    const [opiekun, setOpiekun] = useState<Opiekunowie>(initOpiekun)

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setOpiekun((prevOpiekun) => ({...prevOpiekun, [name]: value}))
    }

    useEffect(()=>{
        setOpiekun(initOpiekun)
    }, [initOpiekun])

    const handleSubmit = async ()=>{
        await mutation.mutate()
    }

    return (
        <div>
            <div className="modal fade" id="editOpiekunowieModal" tabIndex={-1} aria-labelledby="editOpiekunowieModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Edytuj opiekuna</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form>
                                <label htmlFor="firstName">Imię:</label>
                                <input type="text" name="firstName" value={opiekun.firstName} onChange={handleChange}/>
                                <label htmlFor="lastName">Nazwisko:</label>
                                <input type="text" name="lastName" value={opiekun.lastName} onChange={handleChange}/>
                                <label htmlFor="dogId">ID psa:</label>
                                <input type="number" name="dogId" value={opiekun.dogId} onChange={handleChange}/>
                            </Form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Anuluj</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Zatwierdź zmiany</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EditOpiekunowieModal