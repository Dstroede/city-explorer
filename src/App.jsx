import React from 'react';
import './App.css';
import Explorer from './components/Explorer';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

// let API_KEY='pk.a45be98cbfd7d0adc47687e422c9a2d5';
const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor () {
    super ();
      this.state= {
        searchQuery: '',
        location: {},
      }
    }


setSearchQuery = (query) => {
  this.setState({ searchQuery: query });
}
  handleForm = (e)=> {
    e.preventDefault();
    console.log('API key:', API_KEY);
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

  return (
    <>
      <header>
        <h1> Welcome to City Explorer</h1>

        {/* {this.state.searchQuery 
        ? <Explorer /> 
        : <p>Please Enter A Valid Location</p>
        } */}

        {/* <BrowserRouter> */}
          <form onSubmit={this.handleForm}>
            <input placeholder="Enter City Name"
             type="text"
             name="city"
             value= {this.state.searchQuery}
             onChange={this.handleChange} />
            <button type= "submit"> Search
              {/* <Link to="/search">Search!</Link> */}
            </button>
          </form>
          <Explorer location ={this.state.location} query= {this.state.searchQuery}/>
          {/* <Routes>
            <Route exact path="/search" element={<Explorer location ={this.state.location} query= {this.state.searchQuery}/>} />
            <Route path="/" element={<p>Please enter a location to see results.</p>} />
          </Routes>
        </BrowserRouter> */}
      </header>
      </>
  )
  }
}
export default App
