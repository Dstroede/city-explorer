import React from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {

  render() {
    let movieTitles = this.props.flix;
    console.log('This log should return movie titles', movieTitles);
    return (
        <>
            <Container>
                <h2> Movies Related To {this.props.location}</h2>
                <ListGroup >
                    {movieTitles.map((title, index) => (
                        <ListGroup.Item key={index}>
                            {title}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </>

        )
    }
}
export default Movies