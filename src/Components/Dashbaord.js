import React from "react";

import {Button, Form} from "reactstrap"
import {Redirect, Link} from "react-router-dom"
import axios from "axios"
import config from "../APIcalls/AuthToken"
const Dashboard =() =>{
   const handlerLogout =()=>{
     localStorage.clear()
     console.log(localStorage.length)
 
   }
   var getData=async()=>{
    var response = await axios.get(config.ValidJwtURl,
  
    {headers: { Authorization: `Bearer ${config.token}` }})
    var ret = response.data.success
   
    
    
  }
  getData()
   if(getData()==false){
       return <Redirect to="/"/>
   }
   return(
       
    <div>

        succesfull login
        
  <Button  onClick={handlerLogout}><a href="/">logout</a></Button>
       
    </div>
   )
}
export default Dashboard