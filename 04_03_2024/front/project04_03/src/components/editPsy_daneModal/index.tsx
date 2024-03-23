import { ChangeEvent, useEffect, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Psy_dane } from "../../types/psy_dane"
import styled from "styled-components"

interface EditPsy_daneModalProps{
    initPies_dane: Psy_dane,
    initSetPies_dane: (newPies: Psy_dane) => void
}

const Form = styled.form`
    display:flex;
    flex-direction:column;
`

function EditPsy_daneModal({initPies_dane}:EditPsy_daneModalProps) {
    const mutation = useMutation<Psy_dane, unknown>({mutationKey: ['psy_dane'], mutationFn: ()=>{
        pies_dane.weight = Number(pies_dane.weight)
        return axios.put(`http://localhost:3000/api/psy_dane`, pies_dane)
    }})

    const [pies_dane, setPies_dane] = useState<Psy_dane>(initPies_dane)

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setPies_dane((prevPies_dane) => ({...prevPies_dane, [name]: value}))
    }

    useEffect(()=>{
        setPies_dane(initPies_dane)
    }, [initPies_dane])

    const handleSubmit = async ()=>{
        await mutation.mutate()
    }

    return (
        <div>
            <div className="modal fade" id="editPsy_daneModal" tabIndex={-1} aria-labelledby="editPsy_daneModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Edytuj dane psa</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form>
                                <label htmlFor="weight">Waga:</label>
                                <input type="number" name="weight" value={pies_dane.weight} onChange={handleChange} min={0} max={100} />
                                <label htmlFor="name">Rasa:</label>
                                <input type="text" name="breed" value={pies_dane.breed} onChange={handleChange}/>
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

export default EditPsy_daneModal