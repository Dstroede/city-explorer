import React from "react";
// import weather from '../assets/data/weather.json';
import { Link } from 'react-router-dom';

class Explorer extends React.Component {

    render() {

        let { location } = this.props;
        return (
            <main>
                <Link to="/">Go Home</Link>
                <section>
                    <h2> Maps</h2>
                    <p>{this.props.query}</p>
                    <p> Lat: {location ? location.lat: 'no location set'}</p>
                    <p> Lon: {location ? location.lon: 'no location set'}</p>
                    <img src={location ? location.map : "https//paceholder.co/600x400"}
                    alt= "map of location"></img>
                </section>
                <section>
                   {/* {weather.data.map(dailyForcast => {
                        <li key= {index}>
                            <p>{dailyForecast.datetime}</p>
                            <p>{dailyForecast.temp}</p>
                        </li>
                    })}  */}
                </section>
            </main>
        )
    }
}
export default Explorer