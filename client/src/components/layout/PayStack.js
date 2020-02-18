import React, { Component } from 'react';
import SelectListGroup from '../common/SelectListGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import { Row, Col} from 'react-bootstrap';



//import the library
import PaystackButton from 'react-paystack';

class PayStack extends Component {
  constructor(props) {
    super(props);
  this.state = {
    key: "pk_live_9384943bc1d4e3c108ff177d10e77a6b960b39d4", //PAYSTACK PUBLIC KEY
    email: "",  // customer email
    amount: ""   //10000 equals NGN100,
    // status: ''
  }

  this.onChange = this.onChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);
}


onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}



  callback = (response) => {
    console.log(response); // card charged successfully, get reference here
  }

  close = () => {
    console.log("Payment closed");
  }

  getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for( let i=0; i < 15; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  render() {
      // Select options for status
      const options = [
        { label: '* Transaction amount', value: 0 },
        { label: 'Web Development for weekend class', value: 13000000 },
        { label: 'Web Development if paying once', value: 11000000 },
        { label: 'Web Development for corpers', value: 8000000 },
        { label: 'Web Development for students & Interns', value: 6000000 },
        { label: 'Android Development for weekend class', value: 15000000 },
        { label: 'Android Development if paying once', value: 13000000 },
        { label: 'Android Development for corpers', value: 10000000 },
        { label: 'Android Development for students & Interns', value: 7000000 },
        { label: 'Software Development for weekend class', value: 18000000 },
        { label: 'Software Development if paying once', value: 16000000},
        { label: 'Software Development for corpers', value: 12000000 },
        { label: 'Software Development for students & Interns', value: 8000000 }
      ];
    return (
      <div>

        <div style={{textAlign: 'center'}}>
        <Row>
        <Col md={{ span: 4, offset: 4 }}>
        <TextFieldGroup 
          placeholder="Enter your email address" 
          type="email"
          name="email"
           value={this.state.email} 
           onChange={this.onChange}
            />

              <SelectListGroup
                  placeholder="Transaction amount"
                  name="amount"
                  value={this.state.amount}
                  onChange={this.onChange}
                  options={options}
                />
                </Col>
                </Row>
        </div>
       
        <p>
          <PaystackButton
            text="Make Payment"
            className="payButton"
            callback={this.callback}
            close={this.close}
            disabled={true} //disable payment button*
            embed={true} //payment embed in your app instead of a pop up
            reference={this.getReference()}
            email={this.state.email}
            amount={this.state.amount}
            paystackkey={this.state.key}
            tag="button" //it can be button or a or input tag 
          />
        </p>
      </div>
    );
  }
}

export default PayStack;


