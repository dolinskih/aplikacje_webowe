import { ChangeEvent, useEffect, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import styled from "styled-components"
import { Spacery } from "../../types/spacery"

interface EditSpaceryModalProps {
    initSpacer: Spacery,
    initSetSpacer: (newSpacer: Spacery) => void
}

const Form = styled.form`
    display:flex;
    flex-direction:column;
`
function formatDateForInput(date: Date) {
    const adjustedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

    const year = adjustedDate.getFullYear();
    const month = (adjustedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = adjustedDate.getDate().toString().padStart(2, '0');
    const hours = adjustedDate.getHours().toString().padStart(2, '0');
    const minutes = adjustedDate.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
}


function EditSpaceryModal({ initSpacer }: EditSpaceryModalProps) {
    const mutation = useMutation<Spacery, unknown>({
        mutationKey: ['spacery'], mutationFn: () => {
            spacer.dogId = Number(spacer.dogId)
            spacer.keeperId = Number(spacer.keeperId)
            spacer.time = new Date(spacerTime)
            return axios.put(`http://localhost:3000/api/spacery`, spacer)
        }
    })

    const [spacer, setSpacer] = useState<Spacery>(initSpacer)
    const [spacerTime, setSpacerTime] = useState<string>(formatDateForInput(new Date(initSpacer.time)))

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setSpacer((prevSpacer) => ({ ...prevSpacer, [name]: value }))
    }

    const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setSpacerTime(value)
    }

    useEffect(() => {
        setSpacer(initSpacer)
        setSpacerTime(formatDateForInput(new Date(initSpacer.time)))
    }, [initSpacer])

    const handleSubmit = async () => {
        await mutation.mutate()
    }

    return (
        <div>
            <div className="modal fade" id="editSpaceryModal" tabIndex={-1} aria-labelledby="editSpaceryModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Edytuj spacer</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form>
                                <label htmlFor="dogId">ID psa:</label>
                                <input type="number" name="dogId" value={spacer.dogId} onChange={handleChange} />
                                <label htmlFor="keeperId">ID opiekuna:</label>
                                <input type="number" name="keeperId" value={spacer.keeperId} onChange={handleChange} />
                                <label htmlFor="keeperId">Czas:</label>
                                <input type="datetime-local" name="keeperId" value={spacerTime} onChange={handleTimeChange} />
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

export default EditSpaceryModal