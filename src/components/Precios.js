import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import imgPrecios from "../images/img-precios.png";

const Precios = () => {
    return(
        <>
            <section className="precios">
                <Container>
                    <Row>
                        <Col>
                            <div className="precios__container">
                                <div className="precios__header">
                                    <h3>
                                        <span className="text--subtitle-mark">
                                            Precio P/Boleto + Plus
                                        </span>
                                    </h3>
                                </div>
                                <div className="precios__content">
                                    <img className="precios__img" src={imgPrecios} alt="precios" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Precios;