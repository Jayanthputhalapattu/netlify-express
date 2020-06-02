import React,{useContext} from "react"
import { Container, Col, Row, Button } from "reactstrap"
import { UserContext } from "../context/UserContext"
import { FaGoogle } from "react-icons/fa"
import * as firebase from 'firebase';
import { Redirect } from "react-router-dom"
const Register = () =>{
    
    const context = useContext(UserContext)
    var provider = new firebase.auth.GoogleAuthProvider();
    const HandleAuth =()=>{
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
           
            context.setUser(user)
            return <Redirect to = "/register" />
    })

    }
   return(
      
    
        
        <div>
        {context.user?.email ? (<h1>welcome {context.user.displayName}</h1>):(  
             <Container fluid>
          
          <Row> 
          <Col>
               <p style={{fontSize:25,paddingLeft:"10%",letterSpacing:1}}>All set,Register to witness national level symposium!</p>
          </Col>
          </Row>
          <Row>
              <Col md={12} style={{}}>
              <span style={{position:"fixed",top:"50%",left:"35%"}}><Button style={{background:"blue",border:"none",color:"white",outline:0}} onClick={HandleAuth}>Sign up with Google <span style={{fontSize:17}}><FaGoogle/></span> </Button></span>
              </Col>
          </Row>
      </Container>
      )}
       </div>
   )
}

export default Register