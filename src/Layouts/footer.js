import React from "react"
import SocialMedia from "./SocialMedia"
import {Container,Col} from "reactstrap"
const Footer = () =>{
   return(
    <Container fluid tag="footer" className="text-white fixed-bottom" style={{background:"linear-gradient(to right,#403B4A,#E7E9BB)",height:50}}>
        <SocialMedia />
   </Container>
   )
}
export default Footer