import { Container, Row, Col } from "react-bootstrap";
import aboutfoto from "../assets/img/aboutfoto.png";

export const About = () => {
  return (
    <footer className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} >
            <h1 className="abouth1">.Om mig()</h1>
            <p className="aboutP">Velkommen til min kreative platform hvor jeg kan få lov til at udfolde min store interesse idenfor design og programmering af store som små opgaver.
Jeg er 24 år og befinder mig på mit tredje semester af multimediedesign uddannelsen. Jeg er født og opvokset i smilets by, selvom jeg angiveligt, meget kontroversielt, er FCK fan. En af mine store passioner i livet er at rejse. Dette har ført mig til jobs i både Japan og Canada, hvor jeg sammenlagt har boet 1 år. 
</p>
            <em className="abouth2">- "First solve the problem. Then write the code"</em>
            <p className="aboutP">Som person brænder jeg for, at lave kreativt og innovativt indhold på diverse digitale platforme. Her kan ideerne ikke være krøllede nok og udfordringen ikke for stor! Jeg drømmer om en fremtid indenfor frontend developement, hvor jeg også har en rolle indenfor UX/UI-relateret arbejde. </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="aboutfoto">
            <img className="aboutfoto" src={aboutfoto} alt="Header Img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}