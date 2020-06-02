import React, { useState } from "react";

import { Container,Row,Col, Navbar, NavbarToggler, Collapse, Nav, NavItem, NavbarBrand,NavbarText } from "reactstrap";
import ButtNav from "./ButtNavBa";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import * as M from "materialize-css"

const Header = () =>{
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>setIsOpen(!isOpen)
   
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, { edge: 'left',
      draggable: true,
      inDuration: 100,
      outDuration: 200,
      onOpenStart: null,
      onOpenEnd: null,
      onCloseStart: null,
      onCloseEnd: null,
      preventScrolling: true});
    });
    return(
        
        
      //          <Navbar  light expand="md" style={{position:"sticky"}}>
      //   <NavbarBrand href="/" style={{paddingLeft:10}}><img src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/SVUCE.png/220px-SVUCE.png" width="52.8" height="80" alt="#"/>
      //      <span>SVUCE</span></NavbarBrand>
      //   <NavbarToggler onClick={toggle} />
      //   <Collapse isOpen={isOpen} navbar>
      //     <Nav  navbar className="ml-auto" >
        
      //         <NavItem style ={{margin:"auto"}}>
      //         <NavLink tag={Link} to="/"className="mr-2 pd-2" >
      //         <ButtNav value="HOME" link="" />
      //         </NavLink>
      //       <NavLink tag={Link} to="/"className="mr-2 mb-4" >
      //         <ButtNav value="EVENTS" link="events" />
      //         </NavLink>
      //         <NavLink tag={Link} to="/" className="mr-2 mb-4">
      //         <ButtNav value="REGISTER" link="register"/>
      //         </NavLink>
      //         <NavLink tag={Link} to="/" className="mr-2 mt-2">
      //         <ButtNav value="CONTACT" link="contact"/>
      //         </NavLink>
      //       </NavItem>
        
            
            
           
      //     </Nav>
         
      //   </Collapse>
      // </Navbar>
      <>
     <nav style={{background:"#EA7773"}}>
    <div class="nav-wrapper" >
      <a href="/" class="brand-logo">SVUCE</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons" ><FaBars /></i></a>
      <ul class="right hide-on-med-and-down">
      <li><Link to="/">HOME</Link></li>
        <li><Link to="/events">EVENTS</Link></li>
        <li><Link to="/register">REGISTER</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
  <li><Link to="/">HOME</Link></li>
        <li><Link to="/events">EVENTS</Link></li>
        <li><Link to="/register">REGISTER</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
  </ul>
          
            
         </>   
           
           
    )
}
export default Header
