import React from "react";
import { Row, Col} from 'react-bootstrap';
import paystack from './images/paystack.png';
import { Link } from "react-router-dom";



const bg = require('./images/unnamed.gif')
const divStyle = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}

export default () => {
  return (
 
    <footer  style={divStyle}  className=" text-white mt-5 p-4 text-center">
      <p style={{textAlign: 'center', color: 'white'}}>
      Copyright &copy; {new Date().getFullYear()} IDAM ENI IDAM

      </p>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <p>make payment online</p>
          <Link to="/payment">
          <img
                        style={{height: '90px', width: '90px', borderRadius: '30px'}}
                            src={paystack}
                            alt="paystack logo"
                        />
          </Link>
   
        </Col>
      </Row>
    </footer>

  );
};
