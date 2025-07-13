import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
       children:[
        {
          index: true,
          element: <h1>Hi! I'm Index</h1>,
        }
      ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
