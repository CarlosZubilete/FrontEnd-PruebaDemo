// import '../styleSheet/Head.css';
//import NavBar from './NavBar.jsx';
import NavBar from "./NavBar";

function Header(){
  return (
    <header className='header'>
      <h2 className='header__title'>¡Welcome to my Web!</h2>
      <NavBar />
    </header>
  )
}

export default Header;