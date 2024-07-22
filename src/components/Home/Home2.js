import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillCode, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6rem" }}>
              <span className="purple">ALLOW ME</span> TO INTRODUCE MYSELF
            </h1>
            <p className="home-about-body">
              At VJTI,
              <br />
              I've embarked on a captivating journey with programming, and along the way, I've accumulated a wealth of knowledge and skills. 🚀
              <br />
              <br />
              My expertise lies in the timeless realms of{" "}
              <i>
                <b className="purple">Java and Python</b>
              </i>
              , with which I've solved a variety of DSA problems and developed a plethora of applications under domains such as{" "}
              <i>
                <br />
                <b className="purple">Web Development</b>
                <br />
                <b className="purple">Machine Learning</b>
                <br />
                <b className="purple">Natural Language Processing</b>
                <br />
                <b className="purple">Computer Vision</b>
                <br />
                <b className="purple">Game Development</b>
                <br />
              </i>{" "}
              <br />
              Yet, my curiosity extends far beyond these domains. I'm always eager to learn new technologies and explore new horizons.
              <i>
                <br />
                <br />
              Looking at my Projects, the key domains I've worked on are{" "}
                <b className="purple">Machine Learning and Natural Language Processing</b>
              </i>
              . These cutting-edge fields ignite my passion for creating innovative{" "}
              <b className="purple">Web Technologies and Products</b>.
              <br />
              <br />
              Whenever the opportunity arises, I channel my enthusiasm into developing web applications with the powerful{" "}
              <b className="purple">React.js and Next.js</b> frameworks. Additionally, I delve into the realm of{" "}
              <i>
                <b className="purple">ML Projects with Neural Networks</b>
              </i>
              , such as{" "}
              <i>
                <b className="purple">CNNs and RNNs</b>
              </i>
              , pushing the boundaries of what's possible.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12} className="home-about-social">
            <h1 className="text-center">FIND ME ON</h1>
            <p className="text-center">
              Let's <span className="purple">connect</span>!
            </p>
            <ul className="home-about-social-links d-flex justify-content-center list-unstyled">
            <li className="social-icons mx-3">
                <a style={{color: "white"}}
                  href="https://codolio.com/profile/Aditya-y9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillCode size={26} />
                </a>
              </li>
              <li className="social-icons mx-3">
                <a style={{color: "white"}}
                  href="https://github.com/Aditya-y9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub size={26} />
                </a>
              </li>
              <li className="social-icons mx-3">
                <a
                  href="https://www.linkedin.com/in/aditya-yedurkar-curious/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn/>
                </a>
              </li>
              <li className="social-icons mx-3">
                <a
                  href="https://www.instagram.com/aditya_.y9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram size={25} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home2;