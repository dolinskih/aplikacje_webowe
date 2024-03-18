import styled from "styled-components"
import Heading from "../../components/heading"
import { useOpiekunowie } from "../../services/useOpiekunowie"
import AddOpiekunowieForm from "../../components/addOpiekunowieForm"

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
    return (
        <div>
            <Heading title={'Opiekunowie'} />
            <Table>
                <tr>
                    <th>ID</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>ID psa</th>
                </tr>
                {loading
                    ? <tr><td>Loading...</td></tr>
                    : (error
                        ? <tr><td>Błąd</td></tr>
                        : opiekunowie?.map(opiekun => (
                            <tr key={opiekun.id}>
                                <td>
                                    <p>{opiekun.id}</p>
                                </td>
                                <td>
                                    <p>{opiekun.firstName}</p>
                                </td>
                                <td>
                                    <p>{opiekun.lastName}</p>
                                </td>
                                <td>
                                    <p>{opiekun.dogId}</p>
                                </td>
                            </tr>
                        )))
                }
            </Table>
            <Heading level={2} title={'Dodaj opiekuna'}/>
            <AddOpiekunowieForm/>
        </div>
    )
}

export default Opiekunowie