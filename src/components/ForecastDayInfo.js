import React from 'react';

const ForecastDayInfo = (props) => {
  var thisInfo = props.item;

  return (
    <li>
      {thisInfo}
    </li>
  )
}
export default ForecastDayInfo;