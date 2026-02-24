import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify/unstyled'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      
      <main className='min-h-[80vh]'>

      </main>

      </BrowserRouter>
    </>
  )
}

export default App