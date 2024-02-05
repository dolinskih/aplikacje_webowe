import './App.scss'
import Navbar from './components/navbar'
import Footer from './components/footer'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { routes } from './helpers/routing'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          {
            routes.map((route)=>(
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))
          }
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
