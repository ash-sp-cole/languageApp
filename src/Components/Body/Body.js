import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Body = (props) => {
return(

<div className="Display">
<Jumbotron>

<h3>  Text enter is as follows :</h3>
<h2>{props.display}</h2>

</Jumbotron>
 
</div>

)
}

export default Body ;