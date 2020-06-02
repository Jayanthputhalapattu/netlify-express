import React from "react"
import SocialMedia from "./SocialMedia"
import {Container,Col} from "reactstrap"
const Footer = () =>{
   return(
    <Container fluid tag="footer" className="text-white p-3 " style={{backgroundColor:"#0A79DF"}}>
        <SocialMedia />
   </Container>
   )
}
export default Footer