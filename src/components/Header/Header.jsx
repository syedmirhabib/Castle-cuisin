import React, { useContext, useEffect } from "react";
import "./Header.css";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, loading, signOutGoogle } = useContext(AuthContext);

  if (loading && !user) {
    return <></>;
  }

  return (
    <div className="navbar-bg">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <img src={Logo} width="40" height="40" alt="React Bootstrap logo" />
          <Navbar.Brand className="ms-2 brand">Castle Cuisine</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link>
                <ActiveLink to="/">Home</ActiveLink>
              </Nav.Link>

              <Nav.Link>
                <ActiveLink to="/blog">Blog</ActiveLink>
              </Nav.Link>
            </Nav>
            {user ? (
              <>
                <Nav>
                  <Link to="/profile">
                    <Image
                      src={user.photoURL}
                      alt="User"
                      height={40}
                      roundedCircle
                      title="Go to Profile"
                    />
                  </Link>
                  <Button
                    className="btn btn-warning ms-3 my-2 my-md-0"
                    onClick={signOutGoogle}
                  >
                    Logout
                  </Button>
                </Nav>
              </>
            ) : (
              <>
                <Nav>
                  <Button className="btn btn-outline-success">
                    <Link to="/login">Login</Link>
                  </Button>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
