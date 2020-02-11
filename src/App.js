import React, { Component } from 'react';
import Search from './Components/Search/Search';
import Body from './Components/Body/Body';
import './app.css';
class App extends Component {
  
  state= {

    input:''

  }

  eventChangeHandler = (e) => {

this.setState({
  input: e.target.value
})

  }

  
  render(){
  
  return (
    <div className="App">

      <input type ='text' 
    onChange= {this.eventChangeHandler} 
   />
    
<Search  onchange={this.eventChangeHandler}   >  {this.state.input}    </Search>
<Body display={this.state.input}/>
   
    </div>
  );
}
}
export default App;
