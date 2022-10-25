import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navLinkStyle = ({ isActive }) =>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration : isActive  ? 'none' :'underline'
        }
    
    }
    return (
            <>
              <Navbar collapseOnSelect expand="lg" className='p-3 bg-white'>
                  <Container>
                      <Navbar.Brand><h1>LEARN-JAVASCRIPT</h1></Navbar.Brand>
                       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                       <Navbar.Collapse id="responsive-navbar-nav">
                       <Nav className="me-auto">
                       </Nav>
                        <Nav className='fs-4'>
                            <NavLink style={navLinkStyle}  to='/'></NavLink>
                            <NavLink style={navLinkStyle}  to='/home'>HOME</NavLink>
                            <NavLink style={navLinkStyle} to ='/courses'>COURSES</NavLink>
                            <NavLink style={navLinkStyle} to ='/faq'>FAQ</NavLink>
                            <NavLink style={navLinkStyle} to ='/blog'>BLOG</NavLink>
                            <NavLink style={navLinkStyle} to ='/login'>LOG IN</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                 </Container>
              </Navbar>
            </>
    );
};

export default Header;