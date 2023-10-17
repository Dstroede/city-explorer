import React from 'react';
import './App.css';
import Explorer from './components/Explorer';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';



const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor () {
    super ();
      this.state= {
        displayContent: false,
        searchQuery: '',
        location: {},
      }
    }


setSearchQuery = (query) => {
  this.setState({ searchQuery: query });
}
  handleForm = (e)=> {
    e.preventDefault();
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
    .then(response => {
      console.log('success', response.data);
      this.setState({ location: response.data[0], displayContent: true });
    }) .catch(error =>{
      console.log('error', error);
    });
  }
  handleChange = (e) => {
    this.setState({searchQuery: e.target.value})

  }
render() {
  console.log('CITY EXPLORER', this.state);
  return (
    <>
      <header>
        <h1> Welcome to City Explorer</h1>

        {/* {this.state.searchQuery 
        ? <Explorer /> 
        : <p>Please Enter A Valid Location</p>
        } */}
          <Form onSubmit={this.handleForm}>
            <input 
              type= 'text'
              name= 'city'
              placeholder="Enter City Name"
              onChange={this.handleChange} />
            <Button 
             type= 'submit'>
              Explore!
            </Button>
          </Form>
          {this.state.location.length > 0 &&
          <Explorer
           location ={this.state.location}
           query= {this.state.searchQuery}/>
          }

      </header>
      </>
  )
  }
}
export default App
