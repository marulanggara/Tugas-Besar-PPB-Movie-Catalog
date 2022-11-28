import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { Navbar,Nav, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>

                    <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

                    <Navbar.Collapse id="nabarScroll">
                        <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
                        <Link to="/about" style={{ setDecoration: "none" }}><span>About Us</span></Link>
                        <Nav
                            className="me-auto my-2 my-lg-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll></Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header