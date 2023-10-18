import React from "react";
// import weather from '../assets/data/weather.json';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

class Explorer extends React.Component {


    render() {
        console.log(this.props.location);
        // let { location } = this.props;
        // let lat= location ? location.lat : '';
        // console.log(lat);
        // let lon= location ? location.lon : '';
        // console.log(lon);
        let cityMap = `https://maps.locationiq.com/v3/staticmap?key=${import.meta.env.VITE_LOCATIONIQ_API_KEY}&center=${this.props.location.lat},${this.props.location.lon}$zoom=9`;
        console.log(cityMap);
        return (
            <main>
                {/* <Link to="/">Go Home</Link> */}
                <Container>
                    <h2> Maps</h2>
                    <p>{this.props.location.display_name}</p>
                    <p> Lat: {location ? `${this.props.location.lat}`: 'no location set'}</p>
                    <p> Lon: {location ? `${this.props.location.lon}`: 'no location set'}</p>
                    <Image className="cityMap" src={location ? cityMap : "https//paceholder.co/600x400"} fluid
                    alt= "map of location"/>
                </Container>
                <Container>
                   {/* {weather.data.map(dailyForcast => {
                        <li key= {index}>
                            <p>{dailyForecast.datetime}</p>
                            <p>{dailyForecast.temp}</p>
                        </li>
                    })}  */}
                </Container>
            </main>
        )
    }
}
export default Explorer