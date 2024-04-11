import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WhyT from "../../Assets/Projects/WhyT.png";
import ChessAI from "../../Assets/Projects/ChessAI.png";
import GeneticAlgorithm from "../../Assets/Projects/GeneticAlgorithm.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WhyT}
              isBlog={false}
              // bold title
              title="WhyT"
              description="Introducing WhyT 🚀 – your ultimate tool for seamless YouTube-to-PDF note transformation! 📝 Harnessing the power of Machine Learning, WhyT automagically captures screenshots and crafts concise text summaries, revolutionizing your note-taking game. 🤖 Say farewell to the drudgery of manual note-making and embrace efficient content consumption."
              ghLink="https://github.com/Aditya-y9/WhyT"
              demoLink="https://drive.google.com/file/d/1J53cTCYX3ZwBVqNyUflVwBTp-l1nMm0l/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChessAI}
              isBlog={false}
              title="ChessAI"
              description="The project is a chess AI that can play against a human player. The AI uses the NegMax algorithm with alpha-beta pruning to determine the best move at each gamestate.
              The project is written in Python and uses the pygame library for the GUI. The AI uses the NegMax algorithm with alpha-beta pruning to determine the best move at each gamestate. The AI is also able to play against itself. The AI understands each game state by assigining an evaluation score to each possible gamestate"
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
              The organisms are controlled by a set of rules that determine their behavior, such as seeking out food and avoiding poison.
              The organisms make decisions based on their current state and the state of their environment.
              The organisms are able to learn from their experiences and improve their behavior over time.
              The organisms are able to reproduce and pass on their genes to the next generation.
              The organisms are able to mutate their genes to create new behaviors."
              ghLink="https://github.com/Aditya-y9/GeneticAlgorithm"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
