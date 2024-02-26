import ForecastCard from "./ForecastCard";

function Forecast(props){
    let currentTime = new Date().getHours();
    let forecast = props.weatherInfo.forecast?.forecastday[0].hour;

    if(forecast){
        forecast = forecast.filter((elem) => elem.time.slice(-5,-3) > currentTime);
        forecast.length = 10;
    }
    
    return(
        <>
            
            <div className="forecast-container visually-hidden">
                <div className="header">
                    <h1>Forecast</h1>
                </div>
                <div className="cards">
                    <ForecastCard data = {forecast} id = {0}/>
                    <ForecastCard data = {forecast} id = {1}/>
                    <ForecastCard data = {forecast} id = {2}/>
                    <ForecastCard data = {forecast} id = {3}/>
                    <ForecastCard data = {forecast} id = {4}/>
                    <ForecastCard data = {forecast} id = {5}/>
                    <ForecastCard data = {forecast} id = {6}/>
                    <ForecastCard data = {forecast} id = {7}/>
                    <ForecastCard data = {forecast} id = {8}/>
                    <ForecastCard data = {forecast} id = {9}/>
                </div>
            </div>
        </>
    )
}


export default Forecast;