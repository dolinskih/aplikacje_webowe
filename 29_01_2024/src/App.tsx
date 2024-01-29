import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { routes } from "./helpers/routing";

export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          {routes.map((route)=>(
            <Route 
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}
