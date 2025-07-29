import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements,Route ,RouterProvider } from 'react-router'
import Home from './pages/home/Home.jsx'
import Layout from './layout/Layout.jsx'
import ProductsListing from './pages/productsLists/ProductsListing.jsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path="/productListing" element={<ProductsListing/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider   router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
