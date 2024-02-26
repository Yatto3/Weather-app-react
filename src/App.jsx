import SearchBar from './assets/components/SearchBar'
import CityData from './assets/components/CityData'
import CurrentForecast from './assets/components/CurrentForecast'
import Forecast from './assets/components/Forecast'

import { useState } from 'react'
import './App.css'
function App() {

  const [weatherData,setData] = useState("");
  const [futureWeather ,setFutureData] = useState("");
 
  let getWeatherInfo = (data) => data.then(result => setData(result));
  let getFutureWeatherInfo = (data) => data.then(result => setFutureData(result));
  
  
  return (
    <>
      <h1>Weather App</h1>
      <SearchBar getCurrentWeatherData = {getWeatherInfo} getFutureWeatherData = {getFutureWeatherInfo}/>
      <CityData cityInfo = {weatherData}/>
      <CurrentForecast cityInfo = {weatherData}/>
      <Forecast weatherInfo = {futureWeather}/>
    </>
    )
}


export default App
