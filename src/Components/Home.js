import React from "react"
import { Container,Row,Col, ListGroup, ListGroupItem } from "reactstrap";
import SocialMedia from "../Layouts/SocialMedia";
import ButtNav from "../Layouts/ButtNavBa"
const Home = () =>{
     return(
        <Container fluid>
            <Row style={{}}>
               <Col  md={5} sm={6} style={{paddingBottom:100}}>
             
               <ol style={{listStyleType:"none",marginTop:175}}>
                   <li>
                   1st-2nd April 2021
                   </li>
                   <li>
                   <h1 style={{fontSize:50,letterSpacing:10}}>SIGMOID</h1>
                   </li>
                   <li>
                   <h5 style={{fontFamily: "'Orbitron', sans-serif"}}>where signal meets satellite</h5>
                   </li>
               </ol>
               </Col>
               <Col style={{textAlign:"justify",top:75}} md={7} sm={8}>
            {/* <svg width="250" height="200" viewBox="0 0 500 665" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 201.605C86.7781 -134.761 147.164 19.3443 174 201.605C231.653 598.316 333.5 201.605 333.5 201.605" stroke="#BD1818" stroke-width="5"/>
<path d="M333 205.428C416.5 -123.072 476.5 41.9277 504 205.428C581.522 560.266 687.887 269.124 656 205.428" stroke="#BD1818" stroke-width="5"/>

</svg> */}
<iframe width="360" height="250" style={{marginLeft:10,border:"none"}}
src="https://www.youtube.com/embed/b4zquGxito0?autoplay=0" >
</iframe>
<div style={{padding:"20px 10px 80px 10px"}}>
<p style={{fontSize:20,wordSpacing:.8,fontFamily: "'Megrim', cursive",
fontFamily: "'Orbitron', sans-serif"}}>Welcome to the most awaited national level technical symposium.Sigmoid is the most prestigious event conducted
    by department of Electronics and Communication Engineering ,Sri Venkateswara University College of Engineering.Last year the event was held on due to COVID-19
    pandemic.
</p>
 <span style={{marginLeft:-10}}><ButtNav value="EXPLORE..." link="events" /></span>
</div>

            </Col>
            {/* <Col>
          <span style={{float:"right",paddingTop:140}}><SocialMedia /></span> 
           </Col> */}
            </Row>
           
        </Container>

     
       
     )
}

export default Home