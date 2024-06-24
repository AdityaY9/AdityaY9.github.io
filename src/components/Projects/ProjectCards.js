import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{textEmphasis:"bold", textDecorationStyle:
        "double", fontSize: 20, fontWeight: "bold" , textShadow: "10px 10px 40px #00c9ff"
        }}>{props.title}</Card.Title>
        <br />
        <Card.Text style={{ textAlign: "justify", fontSize:14}}>
          {props.description}
          <br />
          <br />
          {props.description1}
          <br />
          <br />
          {props.description2}
          <br />
          <br />
          {props.description3}
          <br />
          <br />
          {props.description4}
          <br />
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
