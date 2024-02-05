import { Link } from "react-router-dom"
import { routes } from "../../helpers/routing"
import styled from "styled-components"

const Nav = styled.nav`
    width: 98%;
    padding: 1%;
    display: flex;
    justify-content:center;
`

const Ul = styled.ul`
    width: 96%;
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style-type: none;
`

const Li = styled.li`
    padding-top: 2vh;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin: 0;
    padding: 2vh;
    background-color: dodgerblue;
    border-radius: 10px;
    border: 1px solid dodgerblue;
    white-space: nowrap;
    transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out;
    &:hover {
        background-color: white;
        color: dodgerblue;
        cursor: pointer;
    }

    &:focus {
        outline: none;
        background-color: white;
        color: dodgerblue;
    }
`

function Navbar(){
    return (
        <div>
            <Nav>
                <Ul>
                    {routes.map((route)=>(
                        <Li key={route.path}>
                            <StyledLink to={route.path}>{route.label}</StyledLink>
                        </Li>
                    ))}
                </Ul>
            </Nav>
        </div>
    )
}

export default Navbar