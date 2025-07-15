//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
// Products
import PageProduct from '@feature/products/page/PageProduct'
import NewProduct from '@feature/products/components/NewProduct'
import DeleteProduct from '@feature/products/components/DeleteProduct'
//import DeleteProduct from './feature/products/components/DeleteProduct.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
       children:[
        {
          index: true,
          element: <h1 className="container mt-5 pt-4" >Hi! I'm Index</h1>,
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
        {
          path:'/PageProduct/:id/delete',
          Component: DeleteProduct , 
        },
        
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
