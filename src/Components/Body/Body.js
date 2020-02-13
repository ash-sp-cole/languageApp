import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import axios from 'axios';

const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";


class Body extends Component {


  state = {

    input:'',

    data: [],

    location: {},

    cityName: '',

    mainWeather: '',

    description: '',

    temp: '',

    tempC: '',

    sunrise: '',

    sunset: '',

    cloudCover: '',

    selectWeather: true,

    testChild: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    let location = e;
    console.log(location);
    
    axios.get(API_URL + location + process.env.REACT_APP_API_KEY)
    .then(res => {
      this.setState({
        selectWeather: true,
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



  render()
  {

  return(

<div>
<Jumbotron>

<h1>  Here is the weather for your city :</h1>
<h2 style={{textAlign:'center'}}>{this.state.cityName}</h2>
<h2 style={{textAlign:'center'}}>{this.state.description}</h2>
  <h2 style={{textAlign:'center'}}>{this.state.tempC}*C</h2>
{/* <h4> Sunrise (GMT) : {props.sunrise}</h4> */}
<h4>SunSet (GMT) : {props.loaction}</h4>
<h2 style={{textAlign:'center'}}>Cloud cover right now is : {this.state.cloudCover}% </h2>



</Jumbotron>
 
</div>

)
}
}
export default Body ;