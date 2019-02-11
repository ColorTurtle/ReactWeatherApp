import React from 'react';
import CloudThunderstormIcon from './icons/CloudThunderstormIcon';
import CloudRainIcon from './icons/CloudRainIcon';
import CloudDrizzleIcon from './icons/CloudDrizzleIcon';
import CloudSnowIcon from './icons/CloudSnowIcon';
import CloudFogIcon from './icons/CloudFogIcon';
import SunIcon from './icons/SunIcon';
import CloudIcon from './icons/CloudIcon';

const WeatherIcon = (props) => {
  var thisIconID = props.weatherID;

  var getWeatherIcon = function () {
    if (thisIconID < 300) {
      return < CloudThunderstormIcon />;
    } else if ( thisIconID >= 300 && thisIconID < 500) {
      return < CloudDrizzleIcon />;
    } else if ( thisIconID >= 500 && thisIconID < 600) {
      return < CloudRainIcon />;
    } else if ( thisIconID >= 600 && thisIconID < 700) {
      return < CloudSnowIcon />;
    } else if ( thisIconID >= 700 && thisIconID < 800) {
      return < CloudFogIcon />;
    } else if ( thisIconID >= 800 && thisIconID <801 ) {
      return < SunIcon />;
    } else if ( thisIconID >= 801 ) {
      return < CloudIcon />;
    }
  }

  var thisIconSVG = getWeatherIcon();

  return (
    <div className="icon-wrapper">
      {thisIconSVG}
    </div>
  )
}
export default WeatherIcon;