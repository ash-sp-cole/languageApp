import React, { Component } from 'react';
// import Search from './Components/Search/Search';
import Body from './Components/Body/Body';
import './app.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import algoliasearch from 'algoliasearch';
import { createStore } from 'redux';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import testSearch from './searchAng';
import SearchGoogle from './searchAng';




 const store = createStore(reducer);


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

    selectWeather: true,

    testChild: ''
  }





callbackFunction = (childData) => {

  this.setState({
    testChild : childData
  })
console.log(this.state.testChild)

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
     location={this.state.testChild}
      cloudCover={this.state.cloudCover}
      sunrise={this.state.sunrise}
      sunset={this.state.sunset}
      temp={this.state.tempC}
      description={this.state.description}
    />
        </form >
               
            <SearchGoogle parentCallBack={this.callbackFunction}/>
        
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