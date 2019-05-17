import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
        books: [
          {name: 'a', price: 2, imageUrl: 'e'},
          {name: 'b', price: 1, imageUrl: 'd'},
          {name: 'c', price: 3, imageUrl: 'f'}
        ]
    }
  }

  componentDidMount(){
    axios
    .get('/api/inventory')
    .then((res) => {
      this.setState({
        books: res.data
      })
    })
  }

  render(){
  return (
    <div>
      <Dashboard books={this.state}/>
      <Header />
      <Form />
      
    </div>
  );
}
}

export default App;
