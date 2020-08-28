import React from "react"

import { Link } from "react-router-dom"

const ButtNav = ({value,link}) =>{
    const ripple = ()=>{
       
       
    }
    return(
       <Link to={'/' +link}> <button style={{border:"none",color:"white",outline:0,width:150}} className="btnn" onClick={ripple} id= "ripple">{value}</button></Link> 
    )
}

export default ButtNav