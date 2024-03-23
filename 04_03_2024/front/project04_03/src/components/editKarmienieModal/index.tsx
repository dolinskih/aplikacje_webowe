import { ChangeEvent, useEffect, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import styled from "styled-components"
import { Karmienie } from "../../types/karmienie"

interface EditKarmienieModalProps {
    initKarmienie: Karmienie,
    initSetKarmienie: (newKarmienie: Karmienie) => void
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


function EditKarmienieModal({ initKarmienie }: EditKarmienieModalProps) {
    const mutation = useMutation<Karmienie, unknown>({
        mutationKey: ['karmienie'], mutationFn: () => {
            karmienie.dogId = Number(karmienie.dogId)
            karmienie.keeperId = Number(karmienie.keeperId)
            karmienie.time = new Date(karmienieTime)
            return axios.put(`http://localhost:3000/api/karmienie`, karmienie)
        }
    })

    const [karmienie, setKarmienie] = useState<Karmienie>(initKarmienie)
    const [karmienieTime, setKarmienieTime] = useState<string>(formatDateForInput(new Date(initKarmienie.time)))

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setKarmienie((prevKarmienie) => ({ ...prevKarmienie, [name]: value }))
    }

    const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setKarmienieTime(value)
    }

    useEffect(() => {
        setKarmienie(initKarmienie)
        setKarmienieTime(formatDateForInput(new Date(initKarmienie.time)))
    }, [initKarmienie])

    const handleSubmit = async () => {
        await mutation.mutate()
    }

    return (
        <div>
            <div className="modal fade" id="editKarmienieModal" tabIndex={-1} aria-labelledby="editKarmienieModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Edytuj karmienie</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form>
                                <label htmlFor="dogId">ID psa:</label>
                                <input type="number" name="dogId" value={karmienie.dogId} onChange={handleChange} />
                                <label htmlFor="keeperId">ID opiekuna:</label>
                                <input type="number" name="keeperId" value={karmienie.keeperId} onChange={handleChange} />
                                <label htmlFor="keeperId">Czas:</label>
                                <input type="datetime-local" name="keeperId" value={karmienieTime} onChange={handleTimeChange} />
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

export default EditKarmienieModal