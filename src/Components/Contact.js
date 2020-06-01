import React from "react"
import ContactCard from "./ContactForm"
import { Container ,Row,Col} from "reactstrap"

const Contact =()=>{
   return(
    //    <ContactCard Sname="RITHEESH SAI"/>
     <Container fluid>
          <Row>
          <h2 style={{margin:"0px 10px 50px 10px"}}>Need Help? Feel free to contact us!</h2>
          </Row>
            <Row>
            <Col md={4}>
               <ContactCard Sname="Ritheesh Sai" Role="Co-ordinator" phtoUrl="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/44976661_113589932968840_6917787017736617984_n.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=LJUZpuEgDLsAX-bp79n&_nc_ht=scontent-maa2-1.xx&oh=2fd138dce7b060d9fb38febb61bf209f&oe=5EF97847"
              phoneNum="7330685365" />
           </Col>
           <Col md={4}>
               <ContactCard Sname="Jyothish chandra" Role="Technical Round" phtoUrl="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/91388985_529905391219154_6898218635634933760_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=GQZsZoOHIbAAX_kHmVr&_nc_ht=scontent-maa2-1.xx&oh=439a4fabb604cb2e432774ace57a8eb9&oe=5EFC16A6"
               phoneNum="7997661804"/>
           </Col>
           <Col md={4}>
               <ContactCard Sname="Gnana Prasuna Kanta" Role="Paper presentation " phtoUrl="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/71751230_946512179042572_6739651209025552384_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=GXN6LSSX434AX9x884K&_nc_ht=scontent-maa2-1.xx&oh=66570daf6e8cad0670bf8ae002cadc8c&oe=5EFC38C1"
               phoneNum="7993599288"/>
           </Col>
           </Row>
     </Container>
   )
}
export default Contact