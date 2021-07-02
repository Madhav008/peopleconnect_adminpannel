import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import LandingScreen from "./Screen/LandingScreen";
import TheameScreen from "./Screen/TheameScreen";
import RegisterScreen from "./Screen/RegisterScreen";
import LoginScreen from "./Screen/LoginScreen";
import CompanyDetail from "./Screen/CompanyDetail";
import SocialDetail from "./Screen/SocialDetail";
import PaymentScreen from "./Screen/PaymentScreen";
import ServicesScreen from "./Screen/ServicesScreen";
import OrderScreen from "./Screen/OrderScreen";
import ImageScreen from "./Screen/ImageScreen";
import Header from "./components/Header";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Switch>
          <Route path="/" component={LandingScreen} exact />
          <Route path="/theame" component={TheameScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/company" component={CompanyDetail} />
          <Route path="/social" component={SocialDetail} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/service" component={ServicesScreen} />
          <Route path="/order" component={OrderScreen} />
          <Route path="/images" component={ImageScreen} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
