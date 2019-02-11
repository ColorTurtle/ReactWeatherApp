import React from 'react';

const Form = (props) => {
  if(props.error === 'True') {
    console.log('Error is True');
  //  Add a dom element explaining there is an error
  } else {

    return(

      <form className="form-location" onSubmit = {props.loadWeather}>
        <div className="input-group">
          <input className="form-control" type="text" name="city" placeholder="City..."/>
          <input className="form-control" type="text" name="country" placeholder="Country..."/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary">Get Weather</button>
          </div>
        </div>
      </form>
    )
  }
}
export default Form;