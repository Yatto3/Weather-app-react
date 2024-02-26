//  props.data[props.id].time.slice(5,10) : ""
function ForecastCard(props){
    let dates = [];
    let temps_c  = []
    let img_src = []

    if(props.data){
        
        props.data.forEach(time_stemp =>{
            dates.push(time_stemp.time.slice(-5));
            temps_c.push(time_stemp?.temp_c);
            img_src.push(time_stemp?.condition.icon);
        })

    }

    return(
        <div className="container">
            <div className="time">
                <p className="current-date">{}</p>
                <p className="forecast-time">{dates[props.id]}</p>
            </div>
            <img src={img_src[props.id]? "https:" + img_src[props.id] : "" } alt="" />
            <p className="temperature">
                {temps_c[props.id] ? temps_c[props.id] + "°" : "" }
            </p>
        </div>
    )
}

ForecastCard.defaultProps ={
    data : null,
    id : 0,
}

export default ForecastCard;