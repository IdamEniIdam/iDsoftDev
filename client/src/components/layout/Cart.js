
import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import unnamed from './images/unnamed.gif';
import {
  Cart,
  Product,
  CheckoutButton,
  cartLocalization,
  cartReducer,
  setCartCurrency
} from "react-shopping-cart";
 
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";
 
const { getDefaultLocalization } = cartLocalization;
 
// You may take localization object from wherever you want, that's just an example
// For more information, see localization section
const iPadCaseLocalization = {
  color: "Color",
  iPadCase: "iPad case",
  red: "Red",
  green: "Green",
  yellow: "Yellow",
  GBP: "£",
  EUR: "€",
  USD: "$"
};
 
const iPadPropertiesWithAdditionalCostLocalization = {
  // yellow: "Yellow (+{cost}{localizedCurrency})"
};
 
const store = createStore(
  combineReducers({
    cart: cartReducer
    // Your own reducers, sir
  })
);
 
store.dispatch(setCartCurrency("USD"));
 
class Carts extends PureComponent {
  state = {
    product: {
      name: "iPadCase",
      id: "ipad-case",
      path: "/shop/ipad-case/",
      properties: {
        color: [
          "red",
          "green",
          {
            additionalCost: {
              GBP: 1,
              EUR: 2,
              USD: 3.5
            },
            value: "yellow"
          }
        ]
      },
      propertiesToShowInCart: ["color"],
      prices: { GBP: 70, EUR: 80, USD: 90 },
      currency: "GBP",
      imageSrc: (unnamed)
    },

    getProductLocalization: getDefaultLocalization("product", "en", {
      ...iPadCaseLocalization,
      ...iPadPropertiesWithAdditionalCostLocalization
    }),

    getCheckoutButtonLocalization: getDefaultLocalization(
      "checkoutButton",
      "en",
      iPadCaseLocalization
    ),
    
    getCartLocalization: getDefaultLocalization(
      "cart",
      "en",
      iPadCaseLocalization
    )
  };
 
  render() {
    const {
      product,
      getCheckoutButtonLocalization,
      getProductLocalization,
      getCartLocalization 
    } = this.state;
 
    const checkoutButtonElement = (
      <CheckoutButton
        getLocalization={getCheckoutButtonLocalization}
        checkoutURL="/to/my/checkout"
      />
    );
    return (
      <Provider store={store}>
        <div className="container">
          <Product
            {...product}
            checkoutButton={checkoutButtonElement}
            getLocalization={getProductLocalization}
          />
          <Cart
            checkoutButton={checkoutButtonElement}
            getLocalization={getCartLocalization}
          />
        </div>
      </Provider>
    );
  }
}
 
export default Carts;

// import React, { Component } from 'react';
// import {Jumbotron, Row, Col} from 'react-bootstrap';
// import TextFieldGroup from '../common/TextFieldGroup';
// import TextAreaFieldGroup from '../common/TextAreaFieldGroup';




// class Carts extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {html: ''};

//     this.onChange = this.onChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }



//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }
  

//   handleSubmit(event) {
//     event.preventDefault();

    
//   }

//   render() {

//     return (
//         <div>
//          <Jumbotron fluid  >

//          <Row style={{textAlign: 'center', color: 'white'}}>
        
//           <Col sm>
              
//     <div >
//     <form onSubmit={this.handleSubmit} style={{textAlign: 'center'}}>
     
         
//           <TextFieldGroup 
//           placeholder="Name" 
//           type="text"
//           name="html"
//            value={this.state.html} 
//            onChange={this.onChange}
//             />
        

//         <input type="submit" value="Send Message" />
//       </form>
//       </div>
//           </Col>
//           </Row>
      

// </Jumbotron>
//         </div>
//     );
//   }
// }



// export default Carts
