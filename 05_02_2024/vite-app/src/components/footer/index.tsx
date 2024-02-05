import styled from "styled-components"

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 98%;
    margin: 1%;
    margin-top: 5%;
    background-color: rgb(245, 245, 245);
    border-radius: 10px;
`

function Footer(){
    return (
        <StyledFooter>
            <p>Copyright Hubert Doliński 2024</p>
        </StyledFooter>
    )
}

export default Footer