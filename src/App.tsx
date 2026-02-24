import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify/unstyled'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'

function App() {


  return (
    <>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      
      <main className='min-h-[80vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App