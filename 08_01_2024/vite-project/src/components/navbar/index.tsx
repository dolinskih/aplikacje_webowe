import { Link } from "react-router-dom"
import { routes } from "../../helpers/routing"

function Navbar(){
    return (
        <div>
            <nav>
                <ul>
                    {routes.filter(route=> !route.hideInMenu).map((route)=>(
                        <li key={route.path}>
                            <Link to={route.path}>{route.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar