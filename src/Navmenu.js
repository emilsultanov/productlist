

import React, { useState } from 'react';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   // NavLink,
   Button
} from 'reactstrap';





const Navmenu = (props) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);

   return (
      <div className='mb-4 mt-5'>
         <Navbar color="success" dark expand="md">

            <NavbarBrand href="/">Product-list</NavbarBrand>
            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>

               <Nav className="ml-auto" navbar>

                  <NavItem>
                     <Button color="light">
                        <Link to='/'>Home</Link>
                     </Button>
                  </NavItem>

                  <NavItem className='ml-2'>
                     <Button color='dark'>
                        <Link to='form'>Form Page</Link>
                     </Button>
                  </NavItem>

                  <CartSummary cart={props.cart} removeFromCart={props.removeFromCart} />
               </Nav>

            </Collapse>
         </Navbar>
      </div>
   );
}

export default Navmenu;