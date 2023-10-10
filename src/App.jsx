import React from 'react';
import './App.css';
import Explorer from './components/Explorer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

const API_KEY = 'pk.a45be98cbfd7d0adc47687e422c9a2d5';
// const API_KEY = import.meta.env.LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor () {
    super ();
      this.state= {
        searchQuery: '',
        location: null,
      }
    }


setSearchQuery = (query) => {
  this.setState({ searchQuery: query });
}
  handleForm = (e)=> {
    console.log('form submitted');
    e.preventDefault();
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
    .then(response => {
      console.log('success', response.data);
      this.setState({ location: response.data[0] });
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

        <BrowserRouter>
          <form onSubmit={this.handleForm}>
            <input placeholder="Enter City Name" type="text" name="city" onChange={this.handleChange} />
            <button type= "submit">
              <Link to="/search">Search!</Link>
            </button>
          </form>
          <Routes>
            <Route exact path="/search" element={<Explorer location ={this.state.location} query= {this.state.searchQuery}/>} />
            <Route path="/" element={<p>Please enter a location to see results.</p>} />
          </Routes>
        </BrowserRouter>
      </header>
      </>
  )
  }
}
export default App
