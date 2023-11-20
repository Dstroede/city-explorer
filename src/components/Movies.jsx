import React from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

class Movies extends React.Component {

    render() {
        console.log('This log should return movie titles', this.props.movies);
        return (
          <Container>
            <h2> Movies Related To {this.props.location}</h2>
            <Accordion>
              {this.props.movies.map((movie, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header>{movie.title}</Accordion.Header>
                  <Accordion.Body>
                    <p>Release Date: {movie.release}</p>
                    <p>{movie.summary}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
        );
      }
    }

export default Movies