import React from 'react';
import Events from "./Components/events"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from "./Components/Home"

import Header from "./Layouts/header"
import Footer from './Layouts/footer';

import Contact from './Components/Contact';
import Register from './Components/Register';
function App() {
  return (
    <Router>
        <Header />
        {/* <span style={{float:"right",position:"relative",marginTop:window.innerHeight-250}}><SocialMedia /></span> */}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path = "/contact" component={Contact} />
            <Route path="/events" component ={Events} />
            <Route path="/register" component={Register} />
        </Switch>
      
   <Footer />
</Router>
  );
}

export default App;
