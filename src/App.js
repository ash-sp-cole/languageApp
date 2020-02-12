import React, { Component } from 'react';
// import Search from './Components/Search/Search';
import Body from './Components/Body/Body';
import './app.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";




class App extends Component {


  state = {

    input:'',

    data: [],

    location: '',

    cityName: '',

    mainWeather: '',

    description: '',

    temp: '',

    tempC: '',

    sunrise: '',

    sunset: '',

    cloudCover: ''
  }


onSubmit = (location) => {

this.setState({
  location: location.target.value
})

axios.get(API_URL + this.state.location + process.env.REACT_APP_API_KEY)
.then(res => {
  this.setState({
    cityName: res.data.name,
    data: res.data,
    description: res.data.weather[0].description,
    mainWeather: res.data.weather[0].main,
    temp: res.data.main.temp,
    tempC: parseFloat(res.data.main.temp - 273.15).toFixed(2),
    sunrise: new Date(res.data.sys.sunrise * 1000).toUTCString(),
     sunset: new Date(res.data.sys.sunset * 1000).toUTCString(),
     cloudCover: res.data.clouds.all
  })


  console.log(this.state.data);
  console.log(this.state.sunrise);
})


}


  render() {

    return (
      <div className="App">
<form onClick={this.onSubmit}>
        <input type='text' />
          <Button   variant="secondary" size="sm" type="submit">
      Large button
    </Button>
    </form >
       
        <Body 
        display={this.state.cityName}
        cloudCover={this.state.cloudCover}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}
        temp={this.state.tempC}
        description={this.state.description}

        
        
        
        
        />

      </div>
    );
  }
}
export default App;
