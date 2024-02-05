import styled from "styled-components";

interface ErrorProps {
    message: string;
}

const P = styled.p`
    color:red;
`

export default function Error({message}:ErrorProps)
{
    return (
        <P>{message}</P>
    )
}