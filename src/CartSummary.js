

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   Badge

} from 'reactstrap';


export default class CartSummary extends Component {

   render() {
      return (
         <UncontrolledDropdown nav inNavbar>

            <DropdownToggle nav caret>
               Options- {this.props.cart.length}
            </DropdownToggle>

            <DropdownMenu right>
               {
                  this.props.cart.map((cartItem) => (
                     <DropdownItem key={cartItem.product.id}>
                        <Badge color='danger' className='mr-2' onClick={() => this.props.removeFromCart(cartItem.product)}>x</Badge>
                        {cartItem.product.productName}
                        <Badge color="primary" className='ml-2'>
                           {cartItem.quantity}
                        </Badge>
                     </DropdownItem>
                  ))
               }

               <DropdownItem divider />

               <DropdownItem>
                  <Link to='cart'>go to Cart-list</Link>
               </DropdownItem>

            </DropdownMenu>
         </UncontrolledDropdown>
      )
   }

}