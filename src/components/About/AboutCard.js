import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }} textAlign="center">
            Hi Everyone, I am <span className="purple">Aditya Yedurkar </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently an IT sophomore at
            <span className="yellow" >  Veermata Jijabai Technological Institute (VJTI), Mumbai.</span>
            <br />
            I am a passionate programmer and a tech enthusiast who loves exploring new technologies and frameworks.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton (even after being bad at it 😅)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Daily, I'm enthralled by the wonders of technology"{" "}
          </p>
          <footer className="blockquote-footer">Aditya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
