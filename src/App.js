import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from "./Components/Home"
import Events from "./Components/events"
import Header from "./Layouts/header"
import SocialMedia from './Layouts/SocialMedia';
import Footer from './Layouts/footer';
function App() {
  return (
    <Router>
        <Header />
        {/* <span style={{float:"right",position:"relative",marginTop:window.innerHeight-250}}><SocialMedia /></span> */}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path = "/events" component={Events} />
   
        </Switch>
      
   <Footer />
</Router>
  );
}

export default App;
