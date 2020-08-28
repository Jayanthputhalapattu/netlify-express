import React from "react"
import { Container, Row,Col } from "reactstrap"
import {FaFacebook, FaInstagram} from "react-icons/fa"
const SocialMedia = ()=>{
   return(
       <Container fluid style={{fontSize:30}} className="socialMed">
           <Row>
           {/* <Col style={{fontSize:14}}><div/>&copy;Made with Love by Web Development Team</Col> */}
               <Col >
             <span style={{fontSize:15,letterSpacing:0.8}}><div/>&copy; WebTeam</span>
               </Col>
               <Col >
               <span >
               <FaInstagram />

              <span style={{marginLeft:"50%"}}><FaFacebook /></span>
                   </span> 
               </Col>
           </Row>
       </Container>
   )
}
export default SocialMedia