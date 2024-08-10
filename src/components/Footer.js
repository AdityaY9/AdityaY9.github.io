import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiFillCode,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { renderConfetti } from "./confetti.js";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
      <Col md="4" className="footer-copywright">
      <h9 style={{ color: "white", fontSize: "0.8rem" }}>
  Designed&nbsp;&nbsp;with&nbsp;&nbsp;
  <span className="red">
    <Button
      className="fork-btn-inner"
      width="0.1px"
      height="0.1px"
      onClick={renderConfetti}
    >
      ❤️
    </Button>
  </span>
  &nbsp;&nbsp;by&nbsp;&nbsp;
  <span className="purple">Aditya Yedurkar</span>!
</h9>
    </Col>
        <Col md="4" className="footer-copywright">
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* <li className="social-icons">
              <a
                href="https://codolio.com/profile/Aditya-y9"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillCode />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://github.com/aditya-y9"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://in.linkedin.com/in/aditya-yedurkar-curious"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn style={{ fontSize: "1em" }}/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/aditya_.y9"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram style={{ fontSize: "1em" }} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
