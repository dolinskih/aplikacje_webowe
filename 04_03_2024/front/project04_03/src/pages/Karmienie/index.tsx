import styled from "styled-components"
import Heading from "../../components/heading"
import { useKarmienie } from "../../services/useKarmienie"
import AddKarmienieForm from "../../components/addKarmienieForm"
import EditKarmienieModal from "../../components/editKarmienieModal"
import { useState } from "react"
import { Karmienie } from "../../types/karmienie"

const Table = styled.table`
    border-collapse: collapse;
    width:90%;
    margin: 1%;
    border:1px solid black;
    td, th{
        border: 1px solid black;
    }
`

function Karmienie(){
    const {data: karmienie, isLoading: loading, error: error} = useKarmienie()

    const [currentKarmienie, setCurrentKarmienie] = useState<Karmienie>({
        id: 0,
        dogId: 0,
        keeperId: 0,
        time: new Date()
    })

    const handleEdit = async (pId: number, pDogId: number, pKeeperId: number, pTime: Date) =>{
        setCurrentKarmienie(_currentKarmienie => ({
            ..._currentKarmienie,
            id: pId,
            dogId: pDogId,
            keeperId: pKeeperId,
            time: pTime
        }))
    }

    return (
        <div>
            <EditKarmienieModal initKarmienie={currentKarmienie} initSetKarmienie={setCurrentKarmienie}/>
            <Heading title={'Karmienie'} />
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
                            : karmienie?.map(karm => (
                                <tr key={karm.id}>
                                    <td>
                                        <p>{karm.id}</p>
                                    </td>
                                    <td>
                                        <p>{karm.dogId}</p>
                                    </td>
                                    <td>
                                        <p>{karm.keeperId}</p>
                                    </td>
                                    <td>
                                        <p>{karm.time.toString()}</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary m-1" key={karm.id} data-bs-toggle="modal" data-bs-target="#editKarmienieModal" onClick={() => handleEdit(karm.id, karm.dogId, karm.keeperId, karm.time)}>
                                            <i className="bi bi-pencil-square fs-4 text-light"></i>
                                        </button>
                                    </td>
                                </tr>
                            )))
                    }
                </tbody>
            </Table>
            <Heading level={2} title={'Dodaj karmienie'}/>
            <AddKarmienieForm/>
        </div>
    )
}

export default Karmienie