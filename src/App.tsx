import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify/unstyled'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import FormRawMaterials from './components/rawmaterials/formrawmaterial/FormRawMaterials'
import ListRawMaterials from './components/rawmaterials/listrawmaterial/ListRawMaterials'
import DeleteRawMaterials from './components/rawmaterials/delelerawmaterial/DeleteRawMaterials'
import FormProducts from './components/products/formproducts/FormProducts'

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

            <Route path='/materia' element={<ListRawMaterials />} />
            <Route path='/rawmaterials/cadastrar' element={<FormRawMaterials />} />
            <Route path='/editarrawmaterial/:id' element={<FormRawMaterials />} />
            <Route path='/deletarrawmaterial/:id' element={<DeleteRawMaterials />} />


            <Route path='/products/cadastrar' element={<FormProducts />} />
            <Route path='/editarproduct/:id' element={<FormProducts />} />

          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App