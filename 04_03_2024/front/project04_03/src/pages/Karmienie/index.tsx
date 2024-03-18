import styled from "styled-components"
import Heading from "../../components/heading"
import { useKarmienie } from "../../services/useKarmienie"
import AddKarmienieForm from "../../components/addKarmienieForm"

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
    return (
        <div>
            <Heading title={'Karmienie'} />
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
                            </tr>
                        )))
                }
            </Table>
            <Heading level={2} title={'Dodaj karmienie'}/>
            <AddKarmienieForm/>
        </div>
    )
}

export default Karmienie