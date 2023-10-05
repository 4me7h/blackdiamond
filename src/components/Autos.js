import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const Autos = () => {
    return(
        <section className="autos">
            <Container>
                <Row>
                    <Col>
                        <h3 className="text--subtitle text-center">Autos en dinámica</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Autos;