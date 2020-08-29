import React,{useContext, useState} from "react"
import {  Button } from "reactstrap"
import { UserContext } from "../context/UserContext"
import { FaGoogle } from "react-icons/fa"
import * as firebase from 'firebase';
import { Redirect } from "react-router-dom"
import Payment from "./payments";
import Axios from "axios";


const Register = () =>{
    
    const context = useContext(UserContext)
    const url = "http://localhost:3000/.netlify/functions/server/find"


    var provider = new firebase.auth.GoogleAuthProvider();
    const HandleAuth =()=> {
     firebase.auth().signInWithPopup(provider)
      .then( async  function(result) {
           
            var user = result.user;
             var paymentTrue = await Axios.post(url,{email:user.email})
             user["payment"] = paymentTrue.data
           context.setUser(user)
        
           
            return <Redirect to = "/register" />
    })
    
    
    
    }
    
   return(
      
    
       
        <div>
         
        {context.user?.email ? 
        <>
         
        <h1>welcome {context.user.displayName}</h1>
        {context.user.payment?"Your payment is success":<Payment />}
        
        
        </>:(  
           <>
            <p style={{fontSize:25,paddingLeft:"10%",letterSpacing:1}}>All set,Register to witness national level symposium!</p>
              
          <div style={{margin:"auto" ,width:300,height:400}}>
             <span style={{position:"fixed",top:"50%"}}><Button style={{background:"blue",border:"none",color:"white",outline:0}} onClick={HandleAuth}>Sign up with Google <span style={{fontSize:17}}><FaGoogle/></span> </Button></span>
              
          </div>
        </>
      
      )}
       </div>
   )
}

export default Register