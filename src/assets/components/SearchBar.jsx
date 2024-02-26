import { useState } from "react";
function SearchBar(props){
    let [userInput , setInput] = useState("");
    return(
        <div className="search-bar">
            <input type="text" placeholder="New York" id="search" onChange={(e) => {
                setInput(e.target.value);
                
            }} />
            <button onClick={() => {
                if (!userInput){
                    alert("The field must be fulfilled");
                    return;

                }
                clerInput();
                let weatherData = handleFetch(userInput);
                let futureData = handleFetchFuture(userInput);

                props.getCurrentWeatherData(weatherData);
                props.getFutureWeatherData(futureData);
                displayHiddenElements();
            }}>
                <img src="/public/img/search-svgrepo-com.svg" alt="search-button" />
            </button>
        </div>
    )

    function clerInput(){
        setInput("")
        document.querySelector("#search").value = "";
    }
    
}


async function handleFetch(cityName){
    const url = `http://api.weatherapi.com/v1/current.json?key=a176e2490f2f420ea1b101340231810&q=${cityName}`
    const response = await fetch(url);
    const data = await response.json();
    
    return data
}

async function handleFetchFuture(cityName){
    const url = `http://api.weatherapi.com/v1/future.json?key=3832ffa624d84717ab680745242202&q=${cityName}&dt=${formatDate(new Date())}`
    const response = await fetch(url);
    const data = await response.json();

    return data ;
}

function formatDate(date){
    let year = date.getFullYear()
    let month = (date.getMonth() <= 9) ? "0" + (date.getMonth() + 2) : date.getMonth() + 2 ;
    let day = (date.getDate() + 1 <= 9) ? "0" + date.getDate()+1 : date.getDate() + 1;
    
    return year + "-" + month + "-" + day;
}

function displayHiddenElements(){
    document.querySelector(".current-fore-container").classList.remove("visually-hidden");
    document.querySelector(".forecast-container").classList.remove("visually-hidden");
}


export default SearchBar;