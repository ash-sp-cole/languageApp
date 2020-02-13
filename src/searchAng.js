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
  
    render() {
      return (
        <div>
          <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
        </div>
      );
    }
  }
  
  export default SearchGoogle;