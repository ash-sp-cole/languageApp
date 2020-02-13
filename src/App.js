import React, { Component } from 'react';
// import Search from './Components/Search/Search';
import Body from './Components/Body/Body';
import './app.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import algoliasearch from 'algoliasearch';

import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import testSearch from './searchAng';
import SearchGoogle from './searchAng';

const searchClient = algoliasearch('SRMMS6XOSZ','084420dcd0e16e74a020a2fef35ec80f');
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

    cloudCover: '',

    selectWeather: true
  }


onSubmit = (e) => {
e.preventDefault();
let location = document.getElementById('locationInput').value;
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


  render() {

    const weatherChosen = this.state.selectWeather;

    if(weatherChosen === true){
      return (
        <div className="App">
       


        <form onSubmit={this.onSubmit}>
                <input type='text' id="locationInput"/>
                  <Button   variant="secondary" size="sm" type="submit">
              Large button
            </Button>
        

      <Body 
      display={this.state.cityName}
      cloudCover={this.state.cloudCover}
      sunrise={this.state.sunrise}
      sunset={this.state.sunset}
      temp={this.state.tempC}
      description={this.state.description}
    />
        </form >
               
            <SearchGoogle/>
        
               </div>) }
    else
    {
      return (
   
        <div className="App">
       
        <form onSubmit={this.onSubmit}>
                <input type='text'  id="locationInput"/>
                  <Button   variant="secondary" size="sm" type="submit">
              Large button
            </Button>

        </form >
               
             
        
               </div>




      )
    }

    
    
    return (
      <div className="App">
       
<form onSubmit={this.onSubmit}>
        <input type='text' id="locationInput"/>
          <Button   variant="secondary" size="sm" type="submit">
      Large button
    </Button>
    </form >
       
     

      </div>
    );
  }
}
export default App;


// 084420dcd0e16e74a020a2fef35ec80f

// SRMMS6XOSZ