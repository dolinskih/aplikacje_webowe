import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.scss'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { routes } from './helpers/routing'
import Navbar from './components/navbar'
import Footer from './components/footer'
import "bootstrap/dist/css/bootstrap.min.css";

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
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
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
