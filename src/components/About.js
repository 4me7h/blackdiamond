import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import './About.scss';

const About = () => {
    return(
        <section className="about">
                <Container>
                    <Row>
                        <Col>
                            <div className="about__container">
                                <div className="about__col">
                                    <h3>SOMOS BLACK DIAMOND</h3>
                                </div>
                                <div className="about__col">

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </section>
    );
}

export default About;