import React from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {

  render() {
    let forecasts = this.props.forecast;
    console.log('xxxxx', forecasts);
    return (
        <>
            <Container>
                <h2> The Weather: </h2>
                <ListGroup >
                    {forecasts.map((forecast, index) => (
                        <ListGroup.Item key={index}>
                            {forecast.date} {forecast.weather.description}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </>

        )
    }
}
export default Weather