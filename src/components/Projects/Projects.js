import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WhyT from "../../Assets/Projects/WhyT.png";
import ChessAI from "../../Assets/Projects/ChessAI.png";
import GeneticAlgorithm from "../../Assets/Projects/GeneticAlgorithm.png";
import DBMS from "../../Assets/Projects/DBMS.png";

// Inside your component




function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", textShadow: "10px 10px 40px #00c9ff", textDecoration: "none", textDecorationStyle: "double" }}>
          Find Technical Details & More such Projects on my GitHub Profile <a href="https://github.com/Aditya-y9" style={{ color: "#00c3ff", cursor: "pointer",zIndex: "1", position: "relative",
          textShadow: "10px 10px 40px #00c9ff", textDecoration: "none", fontWeight: "bold", fontSize: 20, textDecorationStyle: "double"
           }}>@Aditya-y9</a>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WhyT}
              isBlog={false}
              // bold title
              title="WhyT"

              description = "Introducing WhyT 🚀 - your ultimate tool for seamless YouTube-to-PDF note transformation! 📝"

              description1 = "Harnessing the power of Machine Learning, WhyT automagically captures screenshots and crafts concise text summaries, revolutionizing your note-taking game. 🤖"
              
              description2 = "Say farewell to the drudgery of manual note-making and embrace efficient content consumption"

              description3 = "Intelligent YouTube-to-PDF note transformation tool that automagically captures screenshots and crafts concise text summaries."

              description4 = "Frame Analyzer captures screenshots and analyzes video frames to sort their relevance, ensuring optimal note-making."

              ghLink="https://github.com/Aditya-y9/WhyT"
              demoLink="https://drive.google.com/file/d/1J53cTCYX3ZwBVqNyUflVwBTp-l1nMm0l/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChessAI}
              isBlog={false}
              title="ChessAI"

              description="The project is a chess AI that can play against a human player. The AI uses the NegMax algorithm with alpha-beta pruning to determine the best move at each gamestate."

              description1="The project is written in Python and uses the pygame library for the GUI. The AI uses the NegMax algorithm with alpha-beta pruning to determine the best move at each gamestate."

              description2="The AI is also able to play against itself. The AI understands each game state by assigining an evaluation score to each possible gamestate."

              description3 = "The AI is able to play at different difficulty levels, with the highest difficulty level being able to beat most human players."

              description4 = "It uses the Tree data structure to store the game tree and the NegMax algorithm to traverse the tree and determine the best move."

              ghLink="https://github.com/Aditya-y9/COC_Project_X_ChessAI"
              demoLink="https://drive.google.com/file/d/1-EqixFDe9Iy7AqRsp5VVrwxX8uG5FjgJ/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GeneticAlgorithm}
              isBlog={false}
              title="Autonomous Vehicle Simulation Using Genetic Algorithm"
              description="This is a Python simulation of organisms that eat food and avoid poison.
              The organisms are controlled by a set of rules that determine their behavior, such as seeking out food and avoiding poison."
              description1="The organisms make decisions based on their current state and the state of their environment."
              description2="The organisms are able to learn from their experiences and improve their behavior over time."
              description3="The organisms are able to reproduce and pass on their genes to the next generation."
              description4="The organisms are able to mutate their genes to create new behaviors."
              ghLink="https://github.com/Aditya-y9/GeneticAlgorithm"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DBMS}
              isBlog={false}
              title="MariaDB Travel Agency Database Management System"
              description="Travel Management System Using PHP for Frontend and MariaDB for Database operations. 
              User-Friendly Interface with separate Secure views for the Admin and Customer.
              Designed and implemented a comprehensive travel management system using PHP for the frontend and MariaDB for robust database operations."

              description1 = "Engineered a user-centric interface that prioritized intuitive navigation and seamless user experience."

              description2= "Implemented secure access protocols, ensuring distinct and protected views for administrators and customers."

              description3 = "Addressed real-world challenges such as efficient customer-to-admin enquiry management through proficient database operations."

              description4 = "Employed CRUD functionalities for seamless data management and modern interface abstractions to enhance usability and functionality."
              ghLink="https://github.com/Aditya-y9/DBMS-Travel-Management-System"
              demoLink="https://drive.google.com/file/d/1Mfii0IG1NKQx5HD1mlMlFEv7BwCBo3Tm/view"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
