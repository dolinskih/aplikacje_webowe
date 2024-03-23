import styled from "styled-components"
import Heading from "../../components/heading"
import { useSpacery } from "../../services/useSpacery"
import AddSpaceryForm from "../../components/addSpaceryForm"
import { Spacery } from "../../types/spacery"
import { useState } from "react"
import EditSpaceryModal from "../../components/editSpaceryModal"

const Table = styled.table`
    border-collapse: collapse;
    width:90%;
    margin: 1%;
    border:1px solid black;
    td, th{
        border: 1px solid black;
    }
`

function Spacery(){
    const {data: spacery, isLoading: loading, error: error} = useSpacery()

    const [spacer, setSpacer] = useState<Spacery>({
        id: 0,
        dogId: 0,
        keeperId: 0,
        time: new Date()
    })

    const handleEdit = async (pId: number, pDogId: number, pKeeperId: number, pTime: Date) =>{
        setSpacer(currentSpacer => ({
            ...currentSpacer,
            id: pId,
            dogId: pDogId,
            keeperId: pKeeperId,
            time: pTime
        }))
    }

    return (
        <div>
            <EditSpaceryModal initSpacer={spacer} initSetSpacer={setSpacer}/>
            <Heading title={'Spacery'} />
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID psa</th>
                        <th>ID opiekuna</th>
                        <th>Czas</th>
                        <th>Opcje</th>
                    </tr>
                </thead>
                <tbody>
                    {loading
                        ? <tr><td>Loading...</td></tr>
                        : (error
                            ? <tr><td>Błąd</td></tr>
                            : spacery?.map(mappedSpacer => (
                                <tr key={mappedSpacer.id}>
                                    <td>
                                        <p>{mappedSpacer.id}</p>
                                    </td>
                                    <td>
                                        <p>{mappedSpacer.dogId}</p>
                                    </td>
                                    <td>
                                        <p>{mappedSpacer.keeperId}</p>
                                    </td>
                                    <td>
                                        <p>{mappedSpacer.time.toString()}</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary m-1" key={mappedSpacer.id} data-bs-toggle="modal" data-bs-target="#editSpaceryModal" onClick={() => handleEdit(mappedSpacer.id, mappedSpacer.dogId, mappedSpacer.keeperId, mappedSpacer.time)}>
                                            <i className="bi bi-pencil-square fs-4 text-light"></i>
                                        </button>
                                    </td>
                                </tr>
                            )))
                    }
                </tbody>
            </Table>
            <Heading level={2} title={'Dodaj spacer'}/>
            <AddSpaceryForm/>
        </div>
    )
}

export default Spacery