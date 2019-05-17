import React, { Component } from 'react'

export class Product extends Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.title}</h1>
        <h1>Price: {this.props.price}</h1>
        <h1>Image: {this.props.imageUrl}</h1>
      </div>
    )
  }
}

export default Product
