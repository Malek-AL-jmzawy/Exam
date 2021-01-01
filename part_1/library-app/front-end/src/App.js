import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const axios = require('axios');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  getAllBooks=function(){
    axios.get('/books', {
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  render() {
    return (
      <Router>
      <div>
        <Route path="/library/create_book">
          <button  type="submit" onClick="">add book </button>
          <input/>
        </Route>
        <Route path="/library">

        </Route>
        <h1>HELLO WORLD</h1>
      </div>
      </Router>
    );
  }
}