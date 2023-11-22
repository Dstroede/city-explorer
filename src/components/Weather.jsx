import React from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {

  render() {
    let forecasts = this.props.forecast;
    console.log('xxxxx', forecasts);
    return (
        <>
            <Container style={{ marginTop: '5rem', marginBottom: '5rem'}}>
                <h2> The Weather: </h2>
                <ListGroup >
                    {forecasts.map((forecast, index) => (
                        <ListGroup.Item key={index}>
                            {forecast.date} Feels Like: {forecast.temp}°C {forecast.weather.description}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </>

        )
    }
}
export default Weather