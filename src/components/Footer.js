import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="footer__container">
                            <div className="footer__content">
                                <ul className="footer__grid">
                                    <li className="footer__item">
                                        <h4 className="text--footer-title"><Link to="/">Logo</Link></h4>
                                        <ul className="footer__list">
                                            <li className="text--footer">Todos los derechos reservados ® 2023</li>
                                            <li className="text--footer"><Link to="/terminos">Términos y condiciones</Link></li>
                                            <li className="text--footer"><Link to="/politica">Politica de privacidad</Link></li>
                                            <li className="text--footer"><Link to="/cookies">Cookies</Link></li>
                                        </ul>
                                    </li>
                                    <li className="footer__item">
                                        <h4 className="text--footer-title">Social Media</h4>
                                        <ul className="footer__socialmedia">
                                            <li className="footer__iconsocial"></li>
                                            <li className="footer__iconsocial"></li>
                                            <li className="footer__iconsocial"></li>
                                            <li className="footer__iconsocial"></li>
                                        </ul>
                                    </li>
                                    <li className="footer__item">
                                        <h4 className="text--footer-title">Modalidad</h4>
                                        <p className="text--footer">
                                            Venta de Autos de Alta Gama<br />
                                            Compra de Autos de Alta Gama<br />
                                            Sortéos de Autos
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
}

export default Footer;