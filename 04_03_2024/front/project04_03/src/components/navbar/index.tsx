import { Link } from "react-router-dom"
import { routes } from "../../helpers/routing"

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-bottom">
                <ul className="navbar-nav">
                    {routes.map((route)=>(
                        <li key={route.path} className="nav-item">
                            <Link to={route.path} className="nav-link">{route.label}</Link>
                        </li>
                    ))}
                </ul>
        </nav>
    )
}

export default Navbar