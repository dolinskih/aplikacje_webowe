import './navbar.scss'
import {Link} from "react-router-dom";
import { routes } from '../../helpers/routing';

export default function Navbar() {
  return (
    <div id="app-nav">
      <div className="navbar-brand">
        App name
      </div>
      <nav>
        <ul className="navbar-nav">
          {routes.map((route)=>(
            <li className="nav-item">
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}