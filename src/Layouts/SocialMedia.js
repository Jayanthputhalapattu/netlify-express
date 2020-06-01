import React from "react"
import { Container, Row,Col } from "reactstrap"
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"
const SocialMedia = ()=>{
   return(
       <Container fluid style={{fontSize:30}} className="socialMed">
           <Row>
           {/* <Col style={{fontSize:14}}><div/>&copy;Made with Love by Web Development Team</Col> */}
               <Col>
             <span style={{fontSize:15}}>Developed by Web-Team</span>
               </Col>
               <Col>
               <span style={{float:"right"}}>
               <FaInstagram />

<FaFacebook />
                   </span> 
               </Col>
           </Row>
       </Container>
   )
}
export default SocialMedia