import styled from "styled-components";

interface HeadingProps {
    title: string;
}

const H1 = styled.h1`
    margin-left:3%;
`

export default function Heading({title}:HeadingProps)
{
    return (
        <H1>{title}</H1>
    )
}