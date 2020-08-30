import React,{useContext, useState} from "react"
import {  Button } from "reactstrap"
import { UserContext } from "../context/UserContext"
import { FaGoogle } from "react-icons/fa"
import * as firebase from 'firebase';
import { Redirect ,withRouter} from "react-router-dom"

import axios from "axios";
import {Container,Col,Row, Toast,} from "reactstrap"
import "react-toastify/dist/ReactToastify.css";
import {toast, ToastContainer} from "react-toastify"
const Register = () =>{
    
  const [credentials,setCrediantials] = useState({
    username : "JAYANTH",
    password : "jayanth1234bf"
 })
const [isLoggedin,setIsloggedin] = useState()
const changeHandler = () =>{
       setCrediantials({
           username : document.getElementById("uname").value,
           password : document.getElementById("pword").value
       })
      
}
const sendHandler =async (e)=>{
    e.preventDefault();   
   var response = await axios.post("http://localhost:5000/.netlify/functions/server/user/login",credentials)
  
   if (response.data.success==false){
        setIsloggedin(false)
        return toast(response.data.status.message,{type:"error"})
     }
     else {
     
      localStorage.setItem("login",JSON.stringify({
        login     : true,
        token : response.data.token
    }))
        window.location.reload()
     }
   
}
if (localStorage.login)
{
  var token = JSON.parse(localStorage.getItem('login')).token
}

 var getData=async()=>{
  var response = await axios.get('http://localhost:5000/.netlify/functions/server/user/validjwt',

  {headers: { Authorization: `Bearer ${token}` }})
  var ret = response.data.success
 
   setIsloggedin(ret)
   return ret
}
getData()
if(isLoggedin)
{
  return <Redirect to="/dashboard"/>
}
return(
     <div>
            <ToastContainer position="bottom-left"/>
          <Container >
     
              <Row >
                  <Col>
                  </Col>
                  <Col >
                  
                       <div className = "loginForm">
                              <span><h2 style={{textAlign :"center"}}>LOGIN</h2></span>
                           <form onSubmit ={sendHandler} autoComplete="false" >
                               <input type = "text" name = "name" placeholder= "username" required value={credentials.username} onChange = {changeHandler} id="uname"/>
                               <input type = "password" id = "pword" placeholder = "password" required value = {credentials.password} onChange = {changeHandler}/>
                               <input type = "submit" value = "Login" id= "button"/>
                           </form>
                       </div>
                  </Col>
                  <Col>
                  </Col>
              </Row>
             
          </Container>
     </div>
)
}

export default (Register)