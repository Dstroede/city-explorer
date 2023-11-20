import React from "react";
// import weather from '../assets/data/weather.json';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Weather from "./Weather";
import Movies from "./Movies";

class Explorer extends React.Component {


    render() {
        console.log(this.props.location);

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
                    <Image className="cityMap" src={location ? cityMap : "https://paceholder.co/600x400"} fluid
                    alt= "map of location"/>
                </Container>
                <Container>
                   <Weather forecast= {this.props.forecast}/>
                </Container>
                <Container>
                   <Movies movies= {this.props.movies}/>
                </Container>
            </main>
        )
    }
}
export default Explorer