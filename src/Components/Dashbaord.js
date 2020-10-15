import React, { useState } from "react";
import {useEffect} from "react"
import {Button, Form} from "reactstrap"
import {Redirect, Link} from "react-router-dom"
import axios from "axios"
import config from "../APIcalls/AuthToken"
import Payment from "./payments";
const Dashboard =() =>{
  const [payment,setPayment] = useState([])
  if (localStorage.login)
  {
    var token = JSON.parse(localStorage.getItem('login')).token

  }
  useEffect(()=>{
    axios.get('https://laughing-perlman-483d29.netlify.app/.netlify/functions/server/payment',{headers: { Authorization:`Bearer ${token}`}})
    .then((response)=>{
         if(response.data.length>0)
         {
          setPayment(true)
         }
         else{
           setPayment(false)
         }
        
    })
   },[])
   const handlerLogout =()=>{
     localStorage.clear()
     console.log(localStorage.length)
 
   }
  
 

 
   
   return(
       
    <div>

        {/* <h2>succesfull login</h2> */}
        {payment?<>Payment Success</>:<> </>}
        {payment==false?<Payment />:<></>}
        <a href="/"><Button  onClick={handlerLogout}>logout</Button></a>
     
    </div>
   )
}
export default Dashboard