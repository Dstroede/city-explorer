import React from "react";
// import weather from '../assets/data/weather.json';


let API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class Explorer extends React.Component {

    render() {

        let { location } = this.props;
        let lat= location ? location.lat : '';
        console.log(lat);
        let lon= location ? location.lon : '';
        console.log(lon);
        let cityMap = `https://maps.locationiq/v3/staticmap?key=${API_KEY}&center=${lat},${lon}$zoom=9`;

        return (
            <main>
                
                <section>
                    <div className="card" style={{width: '30rem'}}>
                        <img className="card-img-top" src={location ? cityMap : "https//paceholder.co/600x400"} alt="map of location"/>
                            <div className="card-body">
                                <h3 className="card-title">Map</h3>
                                <p className="card-text">{this.props.query}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Lattitude = {this.props.location.lat}</li>
                                <li className="list-group-item">Longitude = {this.props.location.lon}</li>
                                <li className="list-group-item">Weather</li>
                            </ul>
                    </div>
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