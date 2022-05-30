import React from 'react'
import { Sidebar } from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import Home from './pages/Home';
import ViewPage from './pages/ViewPage';

function App() {

  return (
    <div className='flex h-screen h-100 w-screen'>
      <BrowserRouter>
        <Sidebar />
        <div className='w-full px-10 py-6 '>
          <ToastContainer position='top-center' />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/addProduct' element={<AddProduct />} />
            <Route path='/update/:id' element={<AddProduct />} />
            <Route path='/view/:id' element={<ViewPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
