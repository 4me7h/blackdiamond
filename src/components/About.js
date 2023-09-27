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
                                    <p>
                                        Estamos enfocados en la rifa y sorteo de vehículos de alta gama para que por medio de poca inversión puedas tener el coche que siempre has soñado.
                                    </p>
                                    <p>
                                        Somos una empresa 100% mexicana ubicada en Guadalajara Jalisco dedicada al sorteo y rifa de vehículos de gama premium.
                                    </p>
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