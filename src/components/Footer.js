import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

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
                                        <h4 className="text--footer-title">Logo</h4>
                                        <p className="text--footer ">
                                            Todos los derechos reservados ® 2023<br />
                                            Términos y condiciones<br />
                                            Politica de privacidad<br />
                                            Cookies
                                        </p>
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