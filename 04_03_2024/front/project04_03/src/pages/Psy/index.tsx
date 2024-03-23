import styled from "styled-components"
import Heading from "../../components/heading"
import { usePsy } from "../../services/usePsy"
import AddPsyForm from "../../components/addPsyForm"
import EditPsyModal from "../../components/editPsyModal"
import { useState } from "react"

const Table = styled.table`
    border-collapse: collapse;
    width:90%;
    margin: 1%;
    border:1px solid black;
    td, th{
        border: 1px solid black;
    }
`

function Psy() {
    const { data: psy, isLoading: loading, error: error } = usePsy()
    const [pies, setPies] = useState({
        id: 0,
        name: ""
    })
    const handleEdit = async (pId: number, pName: string) => {
        setPies(currentPies => ({
            ...currentPies,
            id: pId,
            name: pName
        }))
    }
    return (
        <div>
            <EditPsyModal initPies={pies} initSetPies={setPies} />
            <Heading title={'Psy'} />
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imię</th>
                        <th>Opcje</th>
                    </tr>
                </thead>
                <tbody>
                    {loading
                        ? <tr><td>Loading...</td></tr>
                        : (error
                            ? <tr><td>Błąd</td></tr>
                            : psy?.map(mappedPies => (
                                <tr key={mappedPies.id}>
                                    <td>
                                        <p>{mappedPies.id}</p>
                                    </td>
                                    <td>
                                        <p>{mappedPies.name}</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary m-1" key={mappedPies.id} data-bs-toggle="modal" data-bs-target="#editPsyModal" onClick={() => handleEdit(mappedPies.id, mappedPies.name)}>
                                            <i className="bi bi-pencil-square fs-4 text-light"></i>
                                        </button>
                                    </td>
                                </tr>
                            )))
                    }
                </tbody>
            </Table>
            <Heading level={2} title={'Dodaj psa'} />
            <AddPsyForm />
        </div>
    )
}

export default Psy