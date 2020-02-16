import React from "react";
import { Row, Col} from 'react-bootstrap';
import paystack from './images/paystack.png';
import { Link } from "react-router-dom";


export default () => {
  return (
 
    <footer  className=" text-white mt-5 p-4 text-center">
      <p style={{textAlign: 'center', color: 'gray'}}>
      Copyright &copy; {new Date().getFullYear()} IDAM ENI IDAM

      </p>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <p style={{textAlign: 'center', color: 'gray'}}>make payment online</p>
          <Link to="/payment">
          <img
                        style={{height: '100px', width: '100px', borderRadius: '30px'}}
                            src={paystack}
                            alt="paystack logo"
                        />
          </Link>
   
        </Col>
      </Row>
    </footer>

  );
};
