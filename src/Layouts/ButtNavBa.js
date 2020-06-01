import React from "react"

import { Link } from "react-router-dom"

const ButtNav = ({value,link}) =>{
    return(
       <Link to={'/' +link} style={{marginBottom:"20px"}}> <button style={{border:"1px solid black",background:"white",color:"black",outline:0,padding:"15px 30px",width:150}}>{value}</button></Link> 
    )
}

export default ButtNav