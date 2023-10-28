import React from 'react';
import './App.css';
import Explorer from './components/Explorer.jsx';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      displayContent: false,
      location: {},
      error: null,
      weather: [],
    }
  }


  setSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  }
  handleForm = (e) => {
    e.preventDefault();
    axios.get(`https://us1.locationiq.com/v1/search?key=${import.meta.env.VITE_LOCATIONIQ_API_KEY}&q=${this.state.searchQuery}&format=json`)
      .then(response => {
        let city = response.data[0];
        this.setState({ location: city, displayContent: true, error: null });
        this.showWeather(city.lat, city.lon)
      }).catch(error => {
        if (error.response) {
          console.log(error.response.data);
          this.setState({ error: `Server Error: ${error.response.status} - ${error.response.data.error}` });
        } else {
          this.setState({ error: 'An error has occurred while making the request' });
        }
      });
  }

  showWeather = async (lat, lon) => {
    const res = await axios.get(`http://localhost:3001/weather?lat=${lat}&lon=${lon}`)
    this.setState({ weather: res.data })
  }
  render() {
    return (
      <>
        <Container>
          <h1> Welcome to City Explorer</h1>
          <Form onSubmit={this.handleForm}>
            <Form.Control
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
              type='text'
              name='city'
              placeholder="Enter City Name"
            />
            <Button
              type='submit'>
              Explore!
            </Button>
          </Form>
          {this.state.error && (
            <Alert variant='danger'>
              {`${this.state.error}`}
            </Alert>
          )}
          {Object.keys(this.state.location).length > 0 &&
            <>
              <Explorer
                location={this.state.location}
                locationName={this.state.location.display_name}
                lon={this.state.location.lon}
                lat={this.state.location.lat}
                query={this.state.searchQuery}
                forecast={this.state.weather}
              />
            </>
          }
          <>


          </>
        </Container>
      </>
    )
  }
}
export default App
