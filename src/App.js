
import React from 'react';
import Navmenu from './Navmenu';
import Categories from './Categories';
import Products from './Products';
import { Container, Row, Col } from 'reactstrap';
import alertify from 'alertifyjs';
import NotFound from './NotFound';
import CartList from './CartList';
import FormPage from './Form';
import { Switch, Route } from 'react-router-dom';





export default class App extends React.Component {

   state = {
      products: [],
      currentCategory: 'All',
      cart: []
   }

   addToCart = (product) => {

      let newCart = this.state.cart;
      let addedProduct = newCart.find((cart) => (
         cart.product.id === product.id
      ));


      if (addedProduct) {
         addedProduct.quantity += 1;
      }
      else {
         newCart.push({
            product: product,
            quantity: 1
         });
      }

      this.setState({
         cart: newCart
      });

      alertify.success(product.productName + 'is added to cart');

   }

   removeFromCart = (product) => {
      let newCard = this.state.cart.filter(cartItem => cartItem.product.id !== product.id);
      this.setState({ cart: newCard });
   }


   getCurrentCategory = (category) => {
      this.setState({
         currentCategory: category.categoryName
      });

      this.getProducts(category.id);
   }


   getProducts = (categoryId) => {

      let url = "http://localhost:3000/products";

      if (categoryId) {
         url += '?categoryId=' + categoryId;
      }

      fetch(url)
         .then(response => response.json())
         .then(data => this.setState({ products: data }))
   }

   componentDidMount() {
      this.getProducts();
   }

   render() {
      return (
         <div className='app '>
            <Container>
               <Navmenu cart={this.state.cart} removeFromCart={this.removeFromCart} />
               <Row>
                  <Col md='3'>
                     <Categories getCurrentCategory={this.getCurrentCategory} />
                  </Col>
                  <Col md='9'>

                     <Switch>

                        <Route
                           exact
                           path='/'
                           render={props => (
                              <Products
                                 {...props}
                                 products={this.state.products}
                                 currentCategory={this.state.currentCategory}
                                 addToCart={this.addToCart}
                              />
                           )}
                        />

                        <Route
                           exact
                           path='/cart'
                           render={props => (
                              <CartList
                                 {...props}
                                 cart={this.state.cart}
                                 removeFromCart={this.removeFromCart}
                              />
                           )}
                        />

                        <Route
                           exact
                           path='/form'
                           component={FormPage}
                        />

                        <Route component={NotFound}></Route>

                     </Switch>


                  </Col>
               </Row>
            </Container>
         </div>
      )
   }

}
