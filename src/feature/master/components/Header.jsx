// import NavBar from "./NavBar";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink  } from "reactstrap";
import { Link } from 'react-router';
import { useState } from "react";

function Header(){

  const[isOpen,SetIsOpen] = useState(false);

  return (
    <header className='header'>
      <Navbar color="dark" dark fixed="top" expand="sm" >
        <NavbarBrand>
          Welcome to me web!
        </NavbarBrand>
        
        <NavbarToggler onClick={()=>{SetIsOpen(!isOpen)}}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto">
            <NavItem>
              <NavLink>
                <Link to='/' className='navBar__ul__li__a'>Home</Link> 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink >
                <Link to='/PageProduct' className='navBar__ul__li__a'>Products</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
   
    </header>
    
  
  )
}

export default Header;