import React from 'react';
import { 
    Navbar,
    Nav
} from 'react-bootstrap';
import './index.css'
class Header extends React.Component {
    render() {
        return (
            <Navbar bg="success" variant="dark" expand="lg">
                <Navbar.Brand to="/"><img src={require('../../assets/images/logo.png')} height="30" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link to="/" className="home-nav-link">
                            <i className="fas fa-home"></i> 
                            <span> Home</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;