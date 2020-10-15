import React, { useState } from 'react';
import Events from "./Components/events"
import Header from "./Layouts/header"
import 'bootstrap/dist/css/bootstrap.min.css'

import firebase from "firebase/app"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from "./Components/Home"


import Footer from './Layouts/footer';

import Contact from './Components/Contact';
import Register from './Components/Register';

import firebaseConfig from "./config/firebaseConfig"
import { UserContext } from './context/UserContext';

import Dashboard from './Components/Dashbaord';
import SignUp from './Components/singup';
import "./App.css"
firebase.initializeApp(firebaseConfig)
function App() {
  const [user,setUser] = useState(null);
 

  return (
    <Router>
      <UserContext.Provider value={{user,setUser}}>
           {/* <paymentContext.provider value={{payment,setPayment}}> */}
           <Header />
        {/* <span style={{float:"right",position:"relative",marginTop:window.innerHeight-250}}><SocialMedia /></span> */}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path = "/contact" component={Contact} />
            <Route path="/events" component ={Events} />
            <Route path="/login" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signup" component={SignUp}/>
        </Switch>
      
   {/* <Footer /> */}

           {/* </paymentContext.provider> */}
     
      </UserContext.Provider>
       
</Router>
  );
}

export default App;
