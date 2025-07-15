import { Link } from 'react-router';
// import { NavBar } from 'reactstrap';


function NavBar (){
  return(
    <nav className='navBar'>
      <ul className='navBar__ul'>
        <li className='navBar__ul__li' >
          <Link to='/' className='navBar__ul__li__a'>Home</Link>
        </li>
        {/* <li className='navBar__ul__li'>
          <Link to='/digimonsPage' className='navBar__ul__li__a'>Clientes</Link>
        </li> */}
        <li className='navBar__ul__li'>
          <Link to='/PageProduct' className='navBar__ul__li__a'>Products</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;