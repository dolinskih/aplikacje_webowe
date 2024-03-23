import styled from "styled-components"
import Heading from "../../components/heading"
import { useOpiekunowie } from "../../services/useOpiekunowie"
import AddOpiekunowieForm from "../../components/addOpiekunowieForm"
import { useState } from "react"
import EditOpiekunowieModal from "../../components/editOpiekunowieModal"

const Table = styled.table`
    border-collapse: collapse;
    width:90%;
    margin: 1%;
    border:1px solid black;
    td, th{
        border: 1px solid black;
    }
`

function Opiekunowie(){
    const {data: opiekunowie, isLoading: loading, error: error} = useOpiekunowie()

    const [opiekun, setOpiekun] = useState({
        id: 0,
        firstName: "", 
        lastName: "",
        dogId: 0
    })

    const handleEdit = async (pId: number, pFirstName: string, pLastName: string, pDogId: number)=>{
        setOpiekun(currentOpiekun => ({
            ...currentOpiekun,
            id: pId,
            firstName: pFirstName,
            lastName: pLastName,
            dogId: pDogId
        }))
    }
    return (
        <div>
            <EditOpiekunowieModal initOpiekun={opiekun} initSetOpiekun={setOpiekun}/>
            <Heading title={'Opiekunowie'} />
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>ID psa</th>
                        <th>Opcje</th>
                    </tr>
                </thead>
                <tbody>
                    {loading
                        ? <tr><td>Loading...</td></tr>
                        : (error
                            ? <tr><td>Błąd</td></tr>
                            : opiekunowie?.map(mappedOpiekun => (
                                <tr key={mappedOpiekun.id}>
                                    <td>
                                        <p>{mappedOpiekun.id}</p>
                                    </td>
                                    <td>
                                        <p>{mappedOpiekun.firstName}</p>
                                    </td>
                                    <td>
                                        <p>{mappedOpiekun.lastName}</p>
                                    </td>
                                    <td>
                                        <p>{mappedOpiekun.dogId}</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary m-1" key={mappedOpiekun.id} data-bs-toggle="modal" data-bs-target="#editOpiekunowieModal" onClick={() => handleEdit(mappedOpiekun.id, mappedOpiekun.firstName, mappedOpiekun.lastName, mappedOpiekun.dogId)}>
                                            <i className="bi bi-pencil-square fs-4 text-light"></i>
                                        </button>
                                    </td>
                                </tr>
                            )))
                    }
                </tbody>
            </Table>
            <Heading level={2} title={'Dodaj opiekuna'}/>
            <AddOpiekunowieForm/>
        </div>
    )
}

export default Opiekunowie