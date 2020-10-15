import React from "react"
import { Container,Row,Col } from "reactstrap"
import EveCard from "../Layouts/EveCard"
import "../events.css"
import ButtNav from "../Layouts/ButtNavBa"
const Events = () =>{
  return(
    <Container fluid>
      <Row>
        <Col>
          <p style={{paddingLeft:30,fontSize:35}}>Have a glimpse over the events!</p>
        </Col>
      </Row>
        <Row>

          <Col md={4}>
           <EveCard title="paper presentation" details="Unleash your presentation skills, boost 
           your existing paper prsentations skills"/>
          </Col >
          <Col md={4}>
           <EveCard title="poster presentation" details="Unleash your presentation skills, boost 
           your existing poster prsentations skills"/>
          </Col>
          <Col md={4}>
           <EveCard title="Electro-Mania" details="Enhance your electronic application skills with
           this event!,see you soon"/>
          </Col>
        </Row>
        <Row>

          <Col md={4}>
           <EveCard title="paper presentation" details="Unleash your presentation skills, boost 
           your existing paper prsentations skills"/>
          </Col >
          <Col md={4}>
           <EveCard title="poster presentation" details="Unleash your presentation skills, boost 
           your existing poster prsentations skills"/>
          </Col>
          <Col md={4}>
           <EveCard title="Electro-Mania" details="Enhance your electronic application skills with
           this event!,see you soon"/>
          </Col>
        </Row>
        <Row><Col>
          <div style={{textAlign:"center",letterSpacing:0.8,paddingBottom:60}}>
           <span> <h2>Don't wait grab all the events with single registration!</h2></span>
            <span ><ButtNav value="REGISTER" link="signup"/></span>
          </div>
        </Col></Row>
    </Container>
  )
}

export default Events