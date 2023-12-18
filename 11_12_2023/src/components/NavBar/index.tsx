import React from 'react'
import './index.scss'

function NavBar(): React.JSX.Element{
    return(
        <nav>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </nav>
    )
}

export default NavBar