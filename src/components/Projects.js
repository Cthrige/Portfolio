import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projekt4 from "../assets/img/projekt4.png";
import projekt5 from "../assets/img/projekt5.png";
import projekt6 from "../assets/img/projekt6.png";
import projekt7 from "../assets/img/projekt7.png";
import projekt8 from "../assets/img/projekt8.png";
import projekt9 from "../assets/img/projekt9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Aarhus Kunsthal case",
      description: "UX/UI Design & Developement",
      description2: "HTML, CSS, Vanilla JS",
      imgUrl: projekt4,
      projectUrl: "https://kunsthal.cthrige.dk/",
    },
    {
      title: "Solbiler Case",
      description: "Vanilla JS kursus",
      description2: "HTML, CSS, Vanilla JS",
      imgUrl: projekt5,
      projectUrl: "https://solbiler.cthrige.dk/",
    },
    {
      title: "Support site",
      description: "Design & Development",
      description2: "Fokus på Tweenmax & Timelinemax animations",
      imgUrl: projekt6,
      projectUrl: "https://supportside.cthrige.dk/",
    },
    {
      title: "Klima X Case",
      description: "Design & Development",
      description2: "HTML, CSS, Vanilla JS",
      imgUrl: projekt7,
      projectUrl: "https://klima-x.com/",
    },
    {
      title: "Metafor app design",
      description: "Metafor opgave",
      description2: "Adobe XD - Photoshop",
      imgUrl: projekt8,
      projectUrl: "https://xd.adobe.com/view/56d39dcc-b405-469a-b4b3-c8d2558df393-0380/?fullscreen",
    },
    {
      title: "Diverse grafisk design",
      description: "Design & Development",
      description2: "Adobe [XD, Photoshop, Illustrator, Figma]",
      imgUrl: projekt9,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>.Projekter()</h2>
                <p>Jeg beskriver mig selv som en person med en bred vifte af interesser. Det startede i en ung alder med en masse computerspil og noget tegning ved siden af. Dette har resulteret i en interesse for kodning med UX/UI ved siden af.. <br></br> Pudsigt ikke? <br></br><br></br> Her kan i få et overblik over, hvad jeg har arbejdet med af cases på nuværende tidspunkt.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">EAAA</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Arbejde</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Hobby</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <h2 className="projekterh2">Cases jeg har lavet gennem mit studie.</h2>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p id="projectP">Jeg arbejder hos Boligportal i Aarhus, hvor jeg er ansat som data scraper. - Her er jeg er ansvarlig for at skrape data fra samarbejdspartnere. <br>
                    </br><br></br>Jeg sidder derfor og adminstrerer, scraper og koder boligportals platform med 30.000 boligere i norden.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Opdateres løbende med fremtidige projekter.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
