import styled from "styled-components"
import Heading from "../../components/heading"
import { useSpacery } from "../../services/useSpacery"

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
    return (
        <div>
            <Heading title={'Spacery'} />
            <Table>
                <tr>
                    <th>ID</th>
                    <th>ID psa</th>
                    <th>ID opiekuna</th>
                    <th>Czas</th>
                </tr>
                {loading
                    ? <tr><td>Loading...</td></tr>
                    : (error
                        ? <tr><td>Błąd</td></tr>
                        : spacery?.map(spacer => (
                            <tr key={spacer.id}>
                                <td>
                                    <p>{spacer.id}</p>
                                </td>
                                <td>
                                    <p>{spacer.dogId}</p>
                                </td>
                                <td>
                                    <p>{spacer.keeperId}</p>
                                </td>
                                <td>
                                    <p>{spacer.time.toString()}</p>
                                </td>
                            </tr>
                        )))
                }
            </Table>
        </div>
    )
}

export default Spacery