

import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';



export default class Categories extends Component {

   state = {
      categories: []
   }

   getCategories = () => {

      fetch("http://localhost:3000/categories")
         .then(response => response.json())
         .then(data => this.setState({ categories: data }));
   }

   componentDidMount() {
      this.getCategories();
   }

   render() {
      return (
         <div className='categories'>
            <h3>Categories</h3>
            <ListGroup >
               <ListGroupItem key='0' onClick={() => { this.props.getCurrentCategory('all') }}>All</ListGroupItem>
               {
                  this.state.categories.map((category) => (
                     <ListGroupItem
                        key={category.id}
                        onClick={() => { this.props.getCurrentCategory(category) }}
                     >
                        {category.categoryName}
                     </ListGroupItem>)
                  )
               }
            </ListGroup>
         </div>
      )
   }
}