import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify/unstyled'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {


  return (
    <>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      
      <main className='min-h-[80vh]'>

      </main>

      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App