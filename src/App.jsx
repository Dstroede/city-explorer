import React from 'react';
import './App.css';
import Explorer from './components/Explorer.jsx';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Button,Container, Form } from 'react-bootstrap';


class App extends React.Component {
  constructor (props) {
    super (props);
      this.state= {
        searchQuery: '',
        displayContent: false,
        location: {},
      }
    }


setSearchQuery = (query) => {
  this.setState({ searchQuery: query });
}
  handleForm = (e)=> {
    e.preventDefault();
    axios.get(`https://us1.locationiq.com/v1/search?key=${import.meta.env.VITE_LOCATIONIQ_API_KEY}&q=${this.state.searchQuery}&format=json`)
    .then(response => {
      let city = response.data[0];
      console.log('success', response.data[0]);
      this.setState({ location: city, displayContent: true });
      // return axios
      // .get( )
    }) .catch(error =>{
      console.log('error', error);
    });
  }

render() {
  return (
    <>
      <Container>
        <h1> Welcome to City Explorer</h1>

        {/* {this.state.searchQuery 
        ? <Explorer /> 
        : <p>Please Enter A Valid Location</p>
        } */}
          <Form onSubmit={this.handleForm}>
            <Form.Control
              onChange={(e) => this.setState({searchQuery: e.target.value})}
              type= 'text'
              name= 'city'
              placeholder="Enter City Name"
             />
            <Button 
             type= 'submit'>
              Explore!
            </Button>
          </Form>
          {Object.keys(this.state.location).length > 0 &&
          <>
          <Explorer
           location = {this.state.location}
           locationName ={this.state.location.display_name}
           lon= {this.state.location.lon}
           lat= {this.state.location.lat}
           query= {this.state.searchQuery}/>
           </>
          }

      </Container>
      </>
  )
  }
}
export default App
