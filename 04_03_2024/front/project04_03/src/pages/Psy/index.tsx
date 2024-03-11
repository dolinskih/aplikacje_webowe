import styled from "styled-components"
import Heading from "../../components/heading"
import { usePsy } from "../../services/usePsy"
import AddPsyForm from "../../components/addPsyForm"

const Table = styled.table`
    border-collapse: collapse;
    width:90%;
    margin: 1%;
    border:1px solid black;
    td, th{
        border: 1px solid black;
    }
`

const Form = styled(AddPsyForm)`
`

function Psy(){
    const {data: psy, isLoading: loading, error: error} = usePsy()
    return (
        <div>
            <Heading title={'Psy'} />
            <Table>
                <tr>
                    <th>ID</th>
                    <th>Imię</th>
                </tr>
                {loading
                    ? <tr><td>Loading...</td></tr>
                    : (error
                        ? <tr><td>Błąd</td></tr>
                        : psy?.map(pies => (
                            <tr key={pies.id}>
                                <td>
                                    <p>{pies.id}</p>
                                </td>
                                <td>
                                    <p>{pies.name}</p>
                                </td>
                            </tr>
                        )))
                }
            </Table>
            <Heading level={2} title={'Dodaj psa'}/>
            <Form/>
        </div>
    )
}

export default Psy