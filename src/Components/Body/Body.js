import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Body = (props) => {
return(

<div className="Display">
<Jumbotron>

<h3>  Here is the weather for your city :</h3>
<h2>{props.display}</h2>
<h3>Current weather description is : {props.description}</h3>
<h3> Current temperture (in celcius) is : {props.temp}</h3>
<h4> Sunrise (GMT) : {props.sunrise}</h4>
<h4>SunSet (GMT) : {props.sunset}</h4>
<h2>Cloud cover right now is : {props.cloudCover}% </h2>
</Jumbotron>
 
</div>

)
}

export default Body ;