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
        books: []
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
      <Dashboard />
      <Form />
      <Header />
    </div>
  );
}
}

export default App;
