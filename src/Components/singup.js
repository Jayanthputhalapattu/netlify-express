import React, { useState } from "react"

import Axios from "axios"
import config from "../APIcalls/AuthToken"
import { toast, ToastContainer } from "react-toastify"
import { Input, Container, Row, Col } from "reactstrap"

const SignUp = () =>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
 
    const handleSubm=async(e)=>{
        e.preventDefault()
      
     
        const response = await Axios.post("https://laughing-perlman-483d29.netlify.app/.netlify/functions/server/user/signup",{username:email,password:password})
        console.log(response)
        if (response.data.success)
        {
            return toast(response.data.status,{type:"success"} )
        }
        if (response.data.err){
            return toast(response.data.err.message,{type:"error"})
      
        }
        
    }
    return(
        <div className="loginn">
        <Container fluid style={{height:window.innerHeight-65}}>
           
            <ToastContainer position="bottom-left"/>
      
<form className="loginForm" onSubmit={handleSubm}> 
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
             <input type="submit" value="SIGNUP" onSubmit={handleSubm}/>
        </form>
      
        </Container>
        
        </div>
    )
}
export default SignUp