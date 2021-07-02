import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/userReducer";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="sm">
        <LinkContainer style={{ paddingLeft: "10rem" }} to="/">
          <Navbar.Brand>LocalToDigital AdminPannel</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ paddingRight: "10rem" }}>
            {userInfo ? (
              <>
                <LinkContainer to="/cart">
                  <Nav.Link>
                 
                    <i className="fas fa-user"></i> {userInfo.name}
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/" onClick={logoutHandler}>
                  <Nav.Link>
                   
                    <i className="fas fa-sign-out-alt"></i> Sign Out
                  </Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to="/cart">
                  <Nav.Link>
                   
                    <i className="fas fa-user"></i> Hii
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/login">
                  <Nav.Link href="/login">
                   
                    <i className="fas fa-sign-out-alt"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
