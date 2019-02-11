import React from 'react';

const tempFormatButton = (props) => {


  return(

    <button className="button-toggle-temp" onClick={props.toggleTempFormat}>
      <span className="tempOptionC">C</span><span className="tempOptionF">F</span><span className="toggle"></span>
    </button>
  )
}
export default tempFormatButton;