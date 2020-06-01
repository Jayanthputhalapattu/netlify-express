import React, { useState } from "react";

import { Container,Row,Col, Navbar, NavbarToggler, Collapse, Nav, NavItem, NavbarBrand,NavbarText } from "reactstrap";
import ButtNav from "./ButtNavBa";
import { NavLink, Link } from "react-router-dom";


const Header = () =>{
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>setIsOpen(!isOpen)

    return(
        
        
               <Navbar  light expand="md" style={{position:"sticky"}}>
        <NavbarBrand href="/" style={{paddingLeft:10}}><img src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/SVUCE.png/220px-SVUCE.png" width="60" height="80" alt="#"/>
           <span>SVUCE</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  navbar className="ml-auto" >
        
              <NavItem style ={{margin:"auto"}}>
              <NavLink tag={Link} to="/"className="mr-2 pd-2" >
              <ButtNav value="HOME" link="" />
              </NavLink>
            <NavLink tag={Link} to="/"className="mr-2 mb-4" >
              <ButtNav value="EVENTS" link="events" />
              </NavLink>
              <NavLink tag={Link} to="/" className="mr-2 mb-4">
              <ButtNav value="REGISTER" link="register"/>
              </NavLink>
              <NavLink tag={Link} to="/" className="mr-2 mt-2">
              <ButtNav value="CONTACT" link="contact"/>
              </NavLink>
            </NavItem>
        
            
            
           
          </Nav>
         
        </Collapse>
      </Navbar>
           
    )
}
export default Header
