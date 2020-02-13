/*global google*/ 
import React, {Component} from 'react';
import Script from 'react-load-script';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class SearchGoogle extends Component {
  // Define Constructor
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: '',
      query: ''
    };

  }

  sendData = (data) =>{
    this.props.parentCallBack(data)
  }
  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ['(cities)'],
    };


    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options,
    );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    this.autocomplete.setFields(['address_components', 'formatted_address']);

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }
  
  handlePlaceSelect = () => {

    // Extract City From Address Object
    const addressObject = this.autocomplete.getPlace();
    const address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          city: address[0].long_name,
          query: addressObject.formatted_address,
        }
        
      );
  
      }
     this.sendData(this.state.city);
      
  }

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHFp-wOqYboHCBoWpB6tWGd9wuLFWare0&libraries=places" 
          onLoad={this.handleScriptLoad}
        />
        <Form  style={{
            margin: '0 auto',
            maxWidth: 800,
          }}>
        <FormControl id="autocomplete" placeholder="" hintText="Search City" 
         
        />
          <Button variant="outline-success" style={{textAlign:'center'}}>Search</Button>
        </Form>
        <h1>{this.state.city}</h1>
      </div>
    );
  }
}

  export default SearchGoogle;