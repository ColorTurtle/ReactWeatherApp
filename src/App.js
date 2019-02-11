import React, { Component } from 'react';
import Dallas_BG from './img/Dallas_BG.jpg';
import CloudPng from './img/Cloud.png';
import CloudPng2 from './img/Cloud2.png';
import './App.scss';
import Form from './components/Form';
import Weather from './components/WeatherOfDay';
import WeatherForTheWeek from './components/WeatherForTheWeek';
import TempFormatButton from './components/TempFormatButton';
import ButtonChangeLocation from './components/ButtonChangeLocation';

class App extends Component {
  state = {
    temperature: undefined,
    today: undefined,
    city: undefined,
    farenheightFormat: true,
    wrapperClass: 'App-header show-farenheightFormat',
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    weatherID: undefined,
    showLocationForm: false,
    forecastLoaded: false,
    formClass: 'App',
    forcastLabels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    todayLabels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    forecast: []
  }


  initialWeather = async () => {
    var self = this;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Dallas,US&appid=fb44b7724c22bbcc33d5563bbd500bf0`);

    const response = await api_call.json();
    console.log('heres the response: ', response);

    if (response.cod !== 200) {
      console.log('there has been an error', response );
      this.setState({
        error: 'True'
      })
    } else {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        windSpeed: response.wind.speed,
        description: response.weather[0].description,
        error: "",
        weatherID: response.weather[0].id
      })

      self.getWeatherForecast(response.name, response.country);
    }
  }

  FarenheitTemp(temp) {
    var thisTemperature = temp - 273.15;
    var convertedTemp = Math.round((thisTemperature) * 9/5 + 32);

    return convertedTemp;
  }

  CelciusTemp(temp) {
    var thisTemperature = temp - 273.15;
    var convertedTemp = Math.round(thisTemperature);

    return convertedTemp;
  }

  toggleTempFormat = async () => {
    var self = this;

    if(!this.state.farenheightFormat === true) {
      self.state.farenheightFormat = true;

      self.setState({
        wrapperClass: 'App-header show-farenheightFormat',
        farenheightFormat: true
      })
    } else {
      this.setState({
        wrapperClass: 'App-header hide-farenheightFormat',
        farenheightFormat: false
      })
    }
  }

  toggleShowForm = async () => {
    var self = this;

    if(!this.state.showLocationForm === true) {
      self.setState({
        showLocationForm: true,
        formClass: 'App show-location-form'
      });
      console.log('here is the showlocationform: ', this.state.showLocationForm);
    } else {
      self.setState({
        showLocationForm: false,
        formClass: 'App'
      });
      console.log('here is the showlocationform: ', this.state.showLocationForm);
    }
  }

  getWeather = async (e) => {
    var self = this;

    e.preventDefault();

    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=fb44b7724c22bbcc33d5563bbd500bf0`);

    const response = await api_call.json();

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      today: response.dt_txt,
      humidity: response.main.humidity,
      windSpeed: response.wind.speed,
      description: response.weather[0].description,
      error: ""
    })

    self.getWeatherForecast(response.name, response.country);
    self.toggleShowForm();
  }

  sortArray = async (array) => {
    const newForeCastArray = [];
    var prevDate = "";
    for (var i = 0; i < array.length; i++) {

      var currentDate = array[i].dt_txt.split(' ')[0];
      var thisDate = currentDate.split(' ')[0];

      if(prevDate === thisDate) {
        console.log("This has the same date - DONT PUSH");
      } else {
        prevDate = currentDate;
        newForeCastArray.push(array[i]);
      }
    }

    // newForeCastArray.shift();

    this.setState({
      forecast: newForeCastArray
    })
  }

  getWeatherForecast = async (thisCity, thisCountry) => {
    var self = this;
    var allForecastsArray = [];

    const city = thisCity;

    const country = thisCountry;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=fb44b7724c22bbcc33d5563bbd500bf0`);

    const response = await api_call.json();

    for (var i = 0; i < response.list.length; i++) {
      allForecastsArray.push(response.list[i]);

      if (i === (response.list.length - 1)) {
        self.sortArray(allForecastsArray);
      }
    }

    this.setState({
      forecastLoaded: true
    })
  }

  componentDidMount(){
    this.initialWeather();
  }

  componentWillMount(){
    console.log('First this called');
  }

  render() {
    return (
      <div className={this.state.formClass}>
        <div className="form-wrapper">
          < Form
            loadWeather={this.getWeather}
            error={this.state.error}/>
          <button className="btn btn-custom mt-3" onClick={this.toggleShowForm}>Cancel</button>
        </div>
        <header className={this.state.wrapperClass} >
          <div className="app-actions-wrapper">
            < ButtonChangeLocation
              toggleShowForm={this.toggleShowForm}/>
            < TempFormatButton toggleTempFormat={this.toggleTempFormat}/>
          </div>
          <div className="img-wrapper">
            <img src={Dallas_BG} className="" alt="dallas" />
          </div>
          <img src={CloudPng} className="cloud1" alt="cloud large" />
          <img src={CloudPng2} className="cloud2" alt="cloud small" />
          <img src={CloudPng2} className="cloud3" alt="cloud small" />
          <img src={CloudPng} className="cloud4" alt="cloud small" />
          < Weather
            farenheightFormat={this.state.farenheightFormat}
            convertTempF={this.FarenheitTemp}
            convertTempC={this.CelciusTemp}
            temperature={this.state.temperature}
            city={this.state.city}
            today={this.state.today}
            todayLabels={this.state.todayLabels}
            monthLabels={this.state.monthLabels}
            country={this.state.country}
            humidity={this.state.humidity}
            windSpeed={this.state.windSpeed}
            description={this.state.description}
            error={this.state.error}
            weatherID={this.state.weatherID}/>

          < WeatherForTheWeek
            farenheightFormat={this.state.farenheightFormat}
            convertTempF={this.FarenheitTemp}
            convertTempC={this.CelciusTemp}
            items={this.state.forecast}
            labelsArray={this.state.forcastLabels}
            forecastLoaded={this.state.forecastLoaded}/>
        </header>
        <div className="overlay" onClick={this.toggleShowForm}></div>

      </div>
    );
  }
}

export default App;
