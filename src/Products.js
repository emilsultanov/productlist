

import React, { Component } from 'react';
import { Table, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';



export default class Products extends Component {

   state = {
      getSerachingProducts: ''
   }

   getSerachingProducts = (e) => {
      this.setState({
         getSerachingProducts: e.target.value
      })
   }


   render() {

      // let products, a, b = [];

      // let searchingProducts = this.state.getSerachingProducts;

      // // console.log(searchingProducts)

      // if (searchingProducts === '') {
      //    products = this.props.products;
      // } else {
      //    products = this.props.products.filter((product) => {
      //       product.productName === searchingProducts

      //    })
      // }



      return (
         <div className='products'>
            <div className='d-flex justify-content-between'>
               <h3>{this.props.currentCategory} Products</h3>
               <div>
                  <InputGroup>
                     <Input
                        placeholder="Search products"
                        onChange={this.getSerachingProducts}
                        value={this.state.getSerachingProducts}
                     />
                     <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                  </InputGroup>
               </div>
            </div>
            <Table responsive bordered dark>
               <thead>
                  <tr>
                     <th>№</th>
                     <th>Product Name</th>
                     <th>Quantity Per Unit</th>
                     <th>Unit Price</th>
                     <th>Units In Stocks</th>
                     <td>Add to Cart</td>
                  </tr>
               </thead>
               <tbody>
                  {
                     this.props.products.map((product) => {
                        return (<tr key={product.id}>
                           <th scope="row">{product.id}</th>
                           <td>{product.productName}</td>
                           <td>{product.quantityPerUnit}</td>
                           <td>{product.unitPrice}</td>
                           <td>{product.unitsInStocks}</td>
                           <td className='text-center'>
                              <Button
                                 color="info"
                                 onClick={() => { this.props.addToCart(product) }}
                              >
                                 Add
                              </Button>
                           </td>
                        </tr>);
                     })
                  }
               </tbody>
            </Table>
         </div>
      )
   }

}