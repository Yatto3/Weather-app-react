

function CurrentForecast(props){
    return(
        <div className="current-fore-container visually-hidden">
            <div className="current-weather">
                <div>
                    <img src = {(props.cityInfo.current?.condition.icon) ? "https:" + props.cityInfo.current.condition.icon : "" }  alt="" />
                </div>
                <div>
                    <div>
                        <h1>{(props.cityInfo.current?.temp_c) ?  + props.cityInfo.current.temp_c + "°" : ""}</h1>
                        <h1>{props.cityInfo.current?.condition.text}</h1>
                    </div>
                </div>
            </div>
            <div className="current-info">
                <div id="feels_like">
                    <h4>{(props.cityInfo.current?.temp_c) ?  + props.cityInfo.current.temp_c + "°" : ""}</h4>
                    <p>Feels Like</p>
                </div>
                <div id="humidity">
                <h4>{(props.cityInfo.current?.humidity) ?  + props.cityInfo.current.humidity + "%" : ""}</h4>
                    <p>Humidity</p>
                </div>
                <div id="pressure_mb">
                    <h4>{(props.cityInfo.current?.pressure_mb) ?  + props.cityInfo.current.pressure_mb + "mb" : ""}</h4>
                    <p>Pressure</p>
                </div>
                <div id="wind_degree">
                    <h4>{(props.cityInfo.current?.wind_degree) ?  + props.cityInfo.current.wind_degree + "°" : ""}</h4>
                    <p>Wind Degree</p>
                </div>
                <div id="wind_kph">
                    <h4>{(props.cityInfo.current?.wind_kph) ?  + props.cityInfo.current.wind_kph + " Km/h" : ""}</h4>
                    <p>Wind Speed</p>
                </div>
                <div id="gust_kph">
                    <h4>{(props.cityInfo.current?.gust_kph) ?  + props.cityInfo.current.gust_kph + " Km/h" : ""}</h4>
                    <p>Gust Speed</p>
                </div>
            </div>
        </div>
    )
}




export default CurrentForecast