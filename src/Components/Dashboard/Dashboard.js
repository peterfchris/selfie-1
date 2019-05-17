import React, { Component } from 'react'
import Product from '../Product/Product'

export class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      books: this.props
    }
  }


  render() {
    // const mappedBooks = this.state.books.map((e, i) => {
    return (
      <div>
        <h1>Dashboard</h1>
        <Product
        // key={i}
        // product={e} 
        />
      </div>
    )
  // })
  // return (
  //   <h3>{mappedBooks}</h3>
  // )
  }

}

export default Dashboard

