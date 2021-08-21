import React from "react";

import {
  Navbar,
  Container,
  Button,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import { QuestionCircle } from "react-bootstrap-icons";

import "./header.style.scss";

const Header = () => (
  <Navbar className="header" bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top logo"
          alt="logo"
        />
        Test Weather App
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <OverlayTrigger
          trigger="click"
          placement="left"
          overlay={
            <Popover id="popover-basic">
              <Popover.Header as="h3">About App</Popover.Header>
              <Popover.Body>
                This is a test app based on <strong>OpenWeather API</strong>.
                You can type the city name and see the weater forecast on this
                day.
              </Popover.Body>
            </Popover>
          }
        >
          <Button className="about" variant="secondary">
            <QuestionCircle className="icon" size={22} />
            <span>Help</span>
          </Button>
        </OverlayTrigger>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
