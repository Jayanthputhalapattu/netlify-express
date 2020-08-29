import React, { useContext } from "react"
import axios from "axios"
import {UserContext} from "../context/UserContext"
import { Redirect } from "react-router-dom"
const Payment = ()=>{
    const context = useContext(UserContext)
    const handleRequest =async (e)=>{
      e.preventDefault();
      axios.get('http://localhost:3000/.netlify/functions/server/checkk')
      .then(res=>{
        
         
        const respo = res.data;
        
        const options ={
          key: 'rzp_test_RdkiOl654i5b7N',
          name :' jayanth app solutions',
          description :'app developement',
          order_id :respo.id,
          prefill:{
              email:context.user.email,
              phone :9381404453
          },
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
            //  const url = 'https://laughing-perlman-483d29.netlify.app/.netlify/functions/server/succeescallback'
            const url = 'http://localhost:3000/.netlify/functions/server/succeescallback'
             const captureResponse = await axios.post(url, {razorpay_order_id :respo.id, razorpay_payment_id:paymentId,razorpay_signature:response.razorpay_signature})
             console.log(captureResponse)
         
             
              const auth = await axios.post("http://localhost:3000/.netlify/functions/server/register/contest",{email:context.user.email,fullname:"xyz",collegename:"xyxy"})
              console.log(auth)
              var newUser =context.user
              newUser["payment"] =captureResponse.data
              await context.setUser(newUser)
              if(captureResponse.data==true)
              {
                alert("Payment is success")
                return <Redirect to="http://localhost:30001/register" />
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
        <form>
          <input type="text" required/>
        <input type="submit" onClick={handleRequest} value="pay with razorpay"/>
        
        
        </form>
       
        
      </div>
    )
  }
  
  export default Payment;