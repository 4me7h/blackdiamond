import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import imgAuto01 from "../images/img-autos-02.png";

const Autos = () => {
    return(
        <section className="autos">
            <Container>
                <Row>
                    <Col>
                        <div className="autos__container">
                            <div className="autos__header">
                                <h2><span className="text--subtitle-mark">Autos en dinámica</span></h2>
                                <p className="text--lead-subtitle">¿Ya tienes tus fichas?</p>
                            </div>
                            <div className="autos__content">
                                <ul className="autos__list">
                                    <li className="autos__item">
                                        <div className="autos__card">
                                            <img className="autos__card__img" src={imgAuto01} alt="imagen auto 01" />
                                            <span className="autos__card__date">Septiembre</span>
                                            <span className="autos__card__name">Ford Lobo Shelby 2022</span>
                                            <span className="autos__card__ficha">Consigue tus fichas</span>
                                            <a href="/" className="btn btn--autos">Comprar Ficha</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Autos;