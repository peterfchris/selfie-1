import React, { Component } from 'react'

export class Form extends Component {
  constructor() {
    super()

    this.state = {
      imageUrl: '',
      productName: '',
      price: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCancel = () => {
    this.setState({
      imageUrl: '',
      productName: '',
      price: 0
    })
  }

  render() {
    return (
      <div>
        <form>
          <h3>Image URL:</h3>
          <input 
            name="imageUrl"
            type='text'
            value={this.state.imageUrl}
            onChange={this.handleChange} />
          <h3>Product Name:</h3>
          <input 
            name="productName"
            type='text'
            value={this.state.productName}
            onChange={this.handleChange} />
          <h3>Price</h3>
          <input
            name="price"
            type='text'
            value={this.state.price}
            onChange={this.handleChange}></input>
          <button onClick={this.handleCancel}>
            Cancel
          </button>
          <button>Add to Inventory</button>
        </form>
        
      </div>
    )
  }
}

export default Form
