import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Banner = () => {
    return(
        <section className="banner banner--bgimg" style={{backgroundImage: `url(https://www.blackdiamond-sorteos.com/assets/blog-73e056bc.jpg)`}}>
            <Container>
                <Row>
                    <Col>
                        <div className="banner__container">
                            <div className="banner__content">
                                <h3 className="text--subtitle">REVIVE<br />EL TRIUNFO</h3>
                                <hr className="hr--yellow"/>
                                <p className="text--lead">Así se vivió el evento de septiembre donde la gran SHELBY obtuvo a su nuevo dueño.</p>
                                <a href="/" className="btn btn--primary">Leer Blog</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;