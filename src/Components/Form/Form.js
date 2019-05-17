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

  handleUpdateImageUrl = (e) => {
    this.setState({
      imageUrl: e
    })
  }

  handleUpdateProductName = (e) => {
    this.setState({
      productName: e
    })
  }

  handleUpdatePrice = (e) => {
    this.setState({
      price: e
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
            onChange={e => this.handleUpdateImageUrl(e.target.value)} />
          <h3>Product Name:</h3>
          <input 
            name="productName"
            type='text'
            onChange={e => this.handleUpdateProductName(e.target.value)} />
          <h3>Price</h3>
          <input
            name="price"
            type='text'
            onChange={e => this.handleUpdatePrice(e.target.value)}></input>
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
