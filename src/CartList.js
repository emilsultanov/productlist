

import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

class CartList extends Component {

   // renderCart = () => {
   //    return (
   //       <Table>
   //          <thead>
   //             <tr>
   //                <th>№</th>
   //                <th>Product Name</th>
   //                <th>Quantity Per Unit</th>
   //                <th>Unit Price	</th>
   //                <th>Units In Stocks	</th>
   //                <th>Count</th>
   //             </tr>
   //          </thead>
   //          <tbody>
   //             {
   //                this.props.cart.map(cartItem => (

   //                   <tr key={cartItem.id}>
   //                      <th scope="row">{cartItem.product.id}</th>
   //                      <td>{cartItem.product.productName}</td>
   //                      <td>{cartItem.product.quantityPerUnit}</td>
   //                      <td>{cartItem.product.unitsInStocks}</td>
   //                      <td>{cartItem.quantity}</td>
   //                   </tr>

   //                ))
   //             }
   //          </tbody>
   //       </Table>
   //    )
   // }

   render() {
      return (
         <div>
            <h3>Cart-list</h3>

            {
               <Table responsive bordered dark>
                  <thead>
                     <tr>
                        <th>id</th>
                        <th>category Id</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stocks</th>
                        <th>Count</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        this.props.cart.map(cartItem => (

                           <tr key={cartItem.product.id}>

                              <th scope="row">{cartItem.product.id}</th>
                              <td>{cartItem.product.categoryId}</td>
                              <td>{cartItem.product.productName}</td>
                              <td>{cartItem.product.unitPrice}</td>
                              <td>{cartItem.product.unitsInStocks}</td>
                              <td>{cartItem.quantity}</td>
                              <td>
                                 <Button color="danger" onClick={() => this.props.removeFromCart(cartItem.product)} >Remove</Button>
                              </td>
                           </tr>
                        ))
                     }
                  </tbody>
               </Table>
            }
         </div>
      );
   }
}

export default CartList;