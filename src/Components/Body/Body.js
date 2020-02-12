import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Body = (props) => {
return(

<div >
<Jumbotron>

<h1>  Here is the weather for your city :</h1>
<h2 style={{textAlign:'center'}}>{props.display}</h2>
<h2 style={{textAlign:'center'}}>{props.description}</h2>
  <h2 style={{textAlign:'center'}}>{props.temp}*C</h2>
<h4> Sunrise (GMT) : {props.sunrise}</h4>
<h4>SunSet (GMT) : {props.sunset}</h4>
<h2 style={{textAlign:'center'}}>Cloud cover right now is : {props.cloudCover}% </h2>



</Jumbotron>
 
</div>

)
}

export default Body ;