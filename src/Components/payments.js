import React, { useContext } from "react"
import axios from "axios"
import {UserContext} from "../context/UserContext"
import { Redirect } from "react-router-dom"
import { Button } from "reactstrap"
const Payment = ()=>{
     
     if (localStorage.login)
     {
       var token = JSON.parse(localStorage.getItem('login')).token

     }
     console.log(token)
    const handleRequest =async (e)=>{
      e.preventDefault();
     await axios.get('https://laughing-perlman-483d29.netlify.app/.netlify/functions/server/checkk',{headers: { Authorization: `Bearer ${token}` }})
      .then(res=>{
        
         
        const respo = res.data;
        
        const options ={
          key: 'rzp_live_mvXKJ9AvmwCwaz',
          name :' jayanth app solutions',
          description :'app developement',
          order_id :respo.id,
          prefill:{
                    phone :9381404453
          },
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
             console.log(token)
            //  const url = 'https://laughing-perlman-483d29.netlify.app/.netlify/functions/server/succeescallback'
             const url = 'https://laughing-perlman-483d29.netlify.app/.netlify/functions/server/succeescallback'
             const captureResponse = await axios.post(url, {razorpay_order_id :respo.id, razorpay_payment_id:paymentId,razorpay_signature:response.razorpay_signature},{headers: { Authorization:`Bearer ${token}`}})
            
         
             
            
              if(captureResponse.data==true)
              {
                 window.location.reload()
           
              }
              else{
                alert("Payment revoked")
              }

             } catch (err) {
              console.log(err);
            }
          },
          theme: {
            color: "#686CFD",
          },
        }
    const rzp1 = new window.Razorpay(options)
      rzp1.open();
     
      })
      return <Redirect to="/register"/>
      
    }
    return(
      <div>
         <Button className="payraz" onClick={handleRequest}>PAY 550</Button>
        
      </div>
    )
  }
  
  export default Payment;