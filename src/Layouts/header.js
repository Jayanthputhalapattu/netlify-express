import React, {  } from "react";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import * as M from "materialize-css"

const Header = () =>{
  
  
   
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
      console.log(instances)
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
     <nav style={{background:"linear-gradient(to right,#E55D87,#5FC3E4)"  }}>
    <div class="nav-wrapper">
      <a href="/" style={{marginLeft:"52px",fontSize:24,textDecoration:"none"}}>SVUCE</a>
      <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons" ><FaBars /></i></a>
      <ul class="right hide-on-med-and-down navli">
      <li><Link to="/" tag={Link}>HOME</Link></li>
        <li><Link to="/events" tag={Link}>EVENTS</Link></li>
        <li><Link to="/register" tag={Link}>REGISTER</Link></li>
        <li><Link to="/contact" tag={Link}>CONTACT</Link></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
  <li><Link to="/" tag={Link}>HOME</Link></li>
        <li><Link to="/events" tag={Link} >EVENTS</Link></li>
        <li><Link to="/register" tag={Link}>REGISTER</Link></li>
        <li><Link to="/contact" tag={Link}>CONTACT</Link></li>
  </ul>
          
            
         </>   
           
           
    )
}
export default Header
