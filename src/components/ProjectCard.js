import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, description2, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={projectUrl}>
        <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{description2}</p>
        </div>
      </div>
      </a>
    </Col>
  )
}
