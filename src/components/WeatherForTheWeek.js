import React from 'react';
import WeatherIcon from './weatherIcon';

const WeatherForTheWeek = (props) => {



  var convertDateToDay = function (date) {
    var formattedDay = new Date(date);
    var thisDay = formattedDay.getDay();
    var dayLabel = props.labelsArray;

    return dayLabel[thisDay];
  }

  if(props.forecastLoaded === true){
    return (
      <ul className="list-unstyled forecast-week-wrapper data-mounted">
        {props.items.map(p => <li className="forecast-day-info" key={p.dt}><div className="p-3 day-stats"><span className="day-stats-day">{convertDateToDay(p.dt_txt)}</span>< WeatherIcon weatherID={p.weather[0].id}/><span className="forecast-temp-wrapper"><span className="tempF">{props.convertTempF(p.main.temp)} </span><span className="tempC">{props.convertTempC(p.main.temp)} </span></span><span className="sr-only">{p.weather[0].description} </span></div></li>)}
      </ul>
    )
  } else {
    return (
      <ul className="list-unstyled forecast-week-wrapper">
        {props.items.map(p => <li className="forecast-day-info" key={p.dt}><div className="p-3 day-stats"><span className="day-stats-day">{convertDateToDay(p.dt_txt)}</span>< WeatherIcon weatherID={p.weather[0].id}/><span className="tempF">{props.convertTempF(p.main.temp)}°F </span><span className="tempC">{props.convertTempC(p.main.temp)}°C, </span><span className="sr-only">{p.weather[0].description} </span></div></li>)}
      </ul>
    )
  }
}
export default WeatherForTheWeek;