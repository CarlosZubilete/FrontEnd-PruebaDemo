import './App.css'
import { Outlet } from 'react-router'
import Header from '@/feature/master/components/Header'
import Footer from '@/feature/master/components/Footer'

function App() {
 
  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App




