import React, { useState } from 'react';
import Events from "./Components/events"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from "./Components/Home"

import Header from "./Layouts/header"
import Footer from './Layouts/footer';

import Contact from './Components/Contact';
import Register from './Components/Register';
import firebase from "firebase/app"
import firebaseConfig from "./config/firebaseConfig"
import { UserContext } from './context/UserContext';
import {paymentContext} from "./context/PaymentContext"
firebase.initializeApp(firebaseConfig)
function App() {
  const [user,setUser] = useState(null);
  const[payment,setPayment] = useState(null)
//   var functions = require('firebase-functions');
// var express = require('express');

// var app = express();
// var router = express.Router();



// app.use('/fns', router);

// exports.fns = functions.https.onRequest(app);
  return (
    <Router>
      <UserContext.Provider value={{user,setUser}}>
           {/* <paymentContext.provider value={{payment,setPayment}}> */}
           <Header />
        {/* <span style={{float:"right",position:"relative",marginTop:window.innerHeight-250}}><SocialMedia /></span> */}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path = "/contact" component={Contact} exact/>
            <Route path="/events" component ={Events} exact/>
            <Route path="/register" component={Register} exact/>
        </Switch>
      
   <Footer />

           {/* </paymentContext.provider> */}
     
      </UserContext.Provider>
       
</Router>
  );
}

export default App;
