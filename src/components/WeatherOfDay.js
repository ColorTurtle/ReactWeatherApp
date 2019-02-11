import React from 'react';
import WeatherIcon from './weatherIcon';

const WeatherOfDay = (props) => {

  let thisFarenheitTemp = props.convertTempF(props.temperature);
  let thisCelciusTemp = props.convertTempC(props.temperature);

  var roundThisNumber = function (number) {
    var roundedNumber = Math.round(number);

    return roundedNumber;
  }

  var getTodayDate = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); //January is 0!
    var monthLabel = props.monthLabels[mm];
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    var todayLabel = props.todayLabels[today.getDay()];

    var dateTitle = todayLabel + ', ' + monthLabel + ' ' + dd + ', ' + yyyy;

    return dateTitle;
  }

  return (
    <div className="today-stats">
      <div className="today-title">
        {props.country && props.city && <span className="today-city">{props.city},    {props.country}</span>}
        <p><span className="today-day">{getTodayDate()} </span></p>
      </div>
      <div className="today-weather">
        {props.temperature && <span className="today-temp"><span className="tempF">{thisFarenheitTemp}</span><span className="tempC">{thisCelciusTemp}</span></span>}
        < WeatherIcon weatherID={props.weatherID}/>
        <span className="today-weather-misc">
          {props.description && <span className="today-weather-desc">{props.description}</span>}
          {props.windSpeed && <span className="today-wind">{roundThisNumber(props.windSpeed)} mph</span>}
        </span>
        {props.error && <p>{props.error}</p>}
      </div>
    </div>
  )
}
export default WeatherOfDay;