import React from "react"
import { Container, Row,Col } from "reactstrap"
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"
const SocialMedia = ()=>{
   return(
       <Container fluid style={{fontSize:30}} className="socialMed">
           <Row>
           {/* <Col style={{fontSize:14}}><div/>&copy;Made with Love by Web Development Team</Col> */}
               <Col>
               <FaFacebook />
               </Col>
               <Col>
                <FaInstagram />

               </Col>
               <Col>
               <FaTwitter/>
               </Col>
            
           </Row>
       </Container>
   )
}
export default SocialMedia