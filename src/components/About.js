import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const About = () => {
    return(
        <section className="about">
                <Container>
                    <Row>
                        <Col>
                            <div className="about__container">
                                <div className="about__col">
                                    <h3 class="text--subtitle about__text--title">SOMOS BLACK DIAMOND</h3>
                                    <p class="text--lead about__text--lead">
                                        Estamos enfocados en la rifa y sorteo de vehículos de alta gama para que por medio de poca inversión puedas tener el coche que siempre has soñado.
                                    </p>
                                    <p class="text--lead about__text--lead">
                                        Somos una empresa 100% mexicana ubicada en Guadalajara Jalisco dedicada al sorteo y rifa de vehículos de gama premium.
                                    </p>
                                </div>
                                <div className="about__col">
                                    Video
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </section>
    );
}

export default About;