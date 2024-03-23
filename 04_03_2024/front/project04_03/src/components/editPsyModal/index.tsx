import React, { ChangeEvent, useEffect, useState } from "react"
import { Psy } from "../../types/psy"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import styled from "styled-components"

interface EditPsyModalProps{
    initPies: Psy,
    initSetPies: (newPies: Psy) => void
}

const Form = styled.form`
    display:flex;
    flex-direction:column;
`

function EditPsyModal({initPies}:EditPsyModalProps) {
    const mutation = useMutation<Psy, unknown>({mutationKey: ['psy'], mutationFn: ()=>{
        return axios.put(`http://localhost:3000/api/psy/${pies.id}/${pies.name}`)
    }})

    const [pies, setPies] = useState<Psy>(initPies)

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setPies((prevPies) => ({...prevPies, [name]: value}))
    }

    useEffect(()=>{
        setPies(initPies)
    }, [initPies])

    const handleSubmit = async ()=>{
        await mutation.mutate()
    }

    return (
        <div>
            <div className="modal fade" id="editPsyModal" tabIndex={-1} aria-labelledby="editPsyModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Edytuj psa</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form>
                                <label htmlFor="name">Imię:</label>
                                <input type="text" name="name" value={pies.name} onChange={handleChange}/>
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

export default EditPsyModal