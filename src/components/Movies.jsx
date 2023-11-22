import React from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends React.Component {

    render() {
        console.log('This log should return movie titles', this.props.movies);
        return (
            <>
            <h2> Movies Related To {this.props.location}</h2>
            <Accordion defaultActiveKey="0" flush>
            {this.props.movies.map((movie, index) => (
                <Accordion.Item key={index.toString()} eventKey={index.toString()}>
                  <Accordion.Header>{movie.title}</Accordion.Header>
                  <Accordion.Body>
                <p>Release Date: {movie.release}</p>
                <p>{movie.summary}</p>
                  </Accordion.Body>
                </Accordion.Item>
                ))}
            </Accordion>
            </>
        );
      }
    }

export default Movies