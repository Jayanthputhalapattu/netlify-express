import React,{useContext, useState, useEffect} from "react"
import {  Button } from "reactstrap"

import { Redirect ,withRouter} from "react-router-dom"
import config from "../APIcalls/AuthToken"
import axios from "axios";
import {Container,Col,Row, Toast,} from "reactstrap"
import "react-toastify/dist/ReactToastify.css";
import {toast, ToastContainer} from "react-toastify"
import "../index.css"
const Register = () =>{
   
  const [credentials,setCrediantials] = useState({
    username : "",
    password : ""
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
   var response = await axios.post("https://laughing-perlman-483d29.netlify.app/.netlify/functions/server/user/login",credentials)
  
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

var getData = async ()  =>{
  var response = await axios.get('https://laughing-perlman-483d29.netlify.app/.netlify/functions/server/user/validjwt',

  {headers: { Authorization: `Bearer ${token}` }})

  setIsloggedin(response.data.success)
}
getData()
if(isLoggedin)
{
  return <Redirect to="/dashboard"/>
}
return(
     <div >
            <ToastContainer position="bottom-left"/>
          <Container fluid style={{height:window.innerHeight-65}}>
     
              <Row >
                 
                  <Col >
                  
                       <div className = "loginForm">
                              <span><h2 style={{textAlign :"center"}}>LOGIN</h2></span>
                           <form onSubmit ={sendHandler} >
                               <input type = "text" name = "name" placeholder= "Registered Email" required value={credentials.username} onChange = {changeHandler} id="uname"
                               style={{paddingLeft:20,width:200}}
                               />
                               <input type = "password" id = "pword" placeholder = "password" required value = {credentials.password} onChange = {changeHandler}  style={{paddingLeft:20,width:200}}/>
                               <input type = "submit" value = "Login" id= "button" className="payraz"style={{marginTop:10,marginLeft:"36%"}}/>
                           </form>
                       </div>
                  </Col>
                  
              </Row>
             
          </Container>
     </div>
)
}

export default (Register)