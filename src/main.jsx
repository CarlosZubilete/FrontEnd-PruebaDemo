//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
// Products
import PageProduct from '@feature/products/page/PageProduct'
import NewProduct from '@feature/products/components/NewProduct'
import EditProduct from '@feature/products/components/EditProduct'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
       children:[
        {
          index: true,
          element: <h1>Hi! I'm Index</h1>,
        },
        {
          path:'/PageProduct',
          Component: PageProduct , 
        },
        {
          path:'/new-product',
          Component: NewProduct , 
        },
        {
          path:'/PageProduct/:id/edit',
          Component: NewProduct , 
        },
   
        
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
