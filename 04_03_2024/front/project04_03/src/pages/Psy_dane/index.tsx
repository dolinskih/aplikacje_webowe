import styled from "styled-components"
import Heading from "../../components/heading"
import { usePsy_dane } from "../../services/usePsy_dane"
import AddPsy_daneForm from "../../components/addPsy_daneForm"
import { useState } from "react"
import EditPsy_daneModal from "../../components/editPsy_daneModal"

const Table = styled.table`
    border-collapse: collapse;
    width:90%;
    margin: 1%;
    border:1px solid black;
    td, th{
        border: 1px solid black;
    }
`

function Psy_dane() {
    const { data: psy_dane, isLoading: loading, error: error } = usePsy_dane()

    const [pies_dane, setPies_dane] = useState({
        id: 0,
        weight: 0,
        breed: ""
    })

    const handleEdit = async (pId: number, pWeight: number, pBreed: string) => {
        setPies_dane(currentPies_dane => ({
            ...currentPies_dane,
            id: pId,
            weight: pWeight,
            breed: pBreed
        }))
    }

    return (
        <div>
            <EditPsy_daneModal initPies_dane={pies_dane} initSetPies_dane={setPies_dane}/>
            <Heading title={'Dane psów'} />
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Waga</th>
                        <th>Rasa</th>
                        <th>Opcje</th>
                    </tr>
                </thead>
                <tbody>
                    {loading
                        ? <tr><td>Loading...</td></tr>
                        : (error
                            ? <tr><td>Błąd</td></tr>
                            : psy_dane?.map(mappedPies_dane => (
                                <tr key={mappedPies_dane.id}>
                                    <td>
                                        <p>{mappedPies_dane.id}</p>
                                    </td>
                                    <td>
                                        <p>{mappedPies_dane.weight}</p>
                                    </td>
                                    <td>
                                        <p>{mappedPies_dane.breed}</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary m-1" key={mappedPies_dane.id} data-bs-toggle="modal" data-bs-target="#editPsy_daneModal" onClick={() => handleEdit(mappedPies_dane.id, mappedPies_dane.weight, mappedPies_dane.breed)}>
                                            <i className="bi bi-pencil-square fs-4 text-light"></i>
                                        </button>
                                    </td>
                                </tr>
                            )))
                    }
                </tbody>
            </Table>
            <Heading level={2} title={'Dodaj dane psa'} />
            <AddPsy_daneForm />
        </div>
    )
}

export default Psy_dane