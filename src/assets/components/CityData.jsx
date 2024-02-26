const weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday ","Sunday ",]
const months = [ "January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December" ];

function CityData(props){
   
    return(
        <div className="city-data-container">
            <div className="city-info">
                <h1>{(props.cityInfo.location) ? getLocation(props) : ""}</h1>
            </div>
            <div className="current-date">
                <h1>{(props.cityInfo.location) ? getDate() : ""}</h1>
            </div>
        </div>
    )


   
}

function getDate(){

    return weekDays[new Date().getDay() - 1] + " " + new Date().getDate() + " " + months[new Date().getMonth()];
}

function getLocation(props){

    return props.cityInfo.location.name;    
}

export default CityData;