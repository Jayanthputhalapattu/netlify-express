import React from "react"
import { Card, CardBody, CardImg, } from "reactstrap"
import { FaPhone, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"

const ContactCard = ({Sname,Role,phtoUrl,phoneNum}) =>{
  return(
      <div>
          
      <Card style={{width:360,height:450,marginBottom:75,border:"1px solid grey",boxShadow:"3px 3px lightblue"}} className="Cardq">
         <CardImg  src={phtoUrl} top style={{width:"100px",height:"100px",borderRadius:"50% 50%",margin:"auto",marginTop:-50,}}></CardImg>
          <CardBody style={{}}>
            <h2>{Sname}</h2>
           <p>{Role}</p> 
            <p>III year<br/>
            Department of ECE</p>
           <span style={{fontSize:30,marginRight:240}}><a class="mobilesOnly" href={"tel:"+phoneNum}><FaPhoneAlt/></a></span>
           <span style={{fontSize:38}}><a href={"https://api.whatsapp.com/send?phone=91"+phoneNum}><FaWhatsapp /></a></span>
           
          </CardBody>
          
      </Card>
      </div>
  )
}

export default ContactCard