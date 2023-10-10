import React from "react";
// import weather from '../assets/data/weather.json';
// import { Link } from 'react-router-dom';

let API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class Explorer extends React.Component {

    render() {

        let { location } = this.props;
        let lat= location ? location.lat : '';
        let lon= location ? location.lon : '';
        let cityMap = `https://maps.locationiq/v3/staticmap?key=${API_KEY}&center=${lat},${lon}$zoom=9`;

        return (
            <main>
                {/* <Link to="/">Go Home</Link> */}
                <section>
                    <h2> Maps</h2>
                    <p>{this.props.query}</p>
                    <img src={location ? cityMap : "https//paceholder.co/600x400"}
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