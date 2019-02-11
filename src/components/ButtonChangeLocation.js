import React from 'react';

const buttonChangeLocation = (props) => {


  return(

    <button className="btn btn-custom" onClick={props.toggleShowForm}>
      Change Location
    </button>
  )
}
export default buttonChangeLocation;