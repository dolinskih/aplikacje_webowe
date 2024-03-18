import styled from "styled-components"
import Heading from "../../components/heading"
import { usePsy_dane } from "../../services/usePsy_dane"
import AddPsy_daneForm from "../../components/addPsy_daneForm"

const Table = styled.table`
    border-collapse: collapse;
    width:90%;
    margin: 1%;
    border:1px solid black;
    td, th{
        border: 1px solid black;
    }
`

function Psy_dane(){
    const {data: psy_dane, isLoading: loading, error: error} = usePsy_dane()
    return (
        <div>
            <Heading title={'Dane psów'} />
            <Table>
                <tr>
                    <th>ID</th>
                    <th>Waga</th>
                    <th>Rasa</th>
                </tr>
                {loading
                    ? <tr><td>Loading...</td></tr>
                    : (error
                        ? <tr><td>Błąd</td></tr>
                        : psy_dane?.map(pies => (
                            <tr key={pies.id}>
                                <td>
                                    <p>{pies.id}</p>
                                </td>
                                <td>
                                    <p>{pies.weight}</p>
                                </td>
                                <td>
                                    <p>{pies.breed}</p>
                                </td>
                            </tr>
                        )))
                }
            </Table>
            <Heading level={2} title={'Dodaj dane psa'}/>
            <AddPsy_daneForm/>
        </div>
    )
}

export default Psy_dane