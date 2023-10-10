import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

import logoColor from "../images/logo-color.png";

const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="footer__container">
                            <div className="footer__content">
                                <ul className="footer__grid">
                                    <li className="footer__col">
                                        <Link to="/"><img class="footer__logo" src={logoColor} alt="logoBD"/></Link>
                                        {/* <ul className="footer__list">
                                            <li className="footer__list__item text--footer"><Link to="/terminos">Términos y condiciones</Link></li>
                                            <li className="footer__list__item text--footer"><Link to="/politica">Politica de privacidad</Link></li>
                                            <li className="footer__list__item text--footer"><Link to="/cookies">Cookies</Link></li>
                                        </ul> */}
                                    </li>
                                    <li className="footer__col">
                                        <h4 className="text--footer-title">Social Media</h4>
                                        <ul className="footer__socialmedia">
                                            <li className="footer__socialmedia__item">
                                                <a className="footer__socialmedia__iconlink" href="twitter.com" >
                                                    <svg 
                                                    fill="currentColor" 
                                                    viewBox="0 0 448 512" 
                                                    height="30" 
                                                    width="30" 
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                                                    </svg>      
                                                </a>  
                                            </li>
                                            <li className="footer__socialmedia__item">
                                                <a className="footer__socialmedia__iconlink" href="twitter.com" >
                                                    <svg 
                                                    fill="#fff" 
                                                    viewBox="0 0 448 512" 
                                                    height="30" 
                                                    width="30" 
                                                    xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="footer__socialmedia__item">
                                                <a className="footer__socialmedia__iconlink" href="twitter.com" >
                                                    <svg 
                                                        fill="#fff" viewBox="0 0 448 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="footer__socialmedia__item">
                                                <a className="footer__socialmedia__iconlink" href="twitter.com" >
                                                    <svg fill="#fff" viewBox="0 0 448 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer__col">
                                        <h4 className="text--footer-title">Modalidad</h4>
                                        <ul className="footer__list">
                                            <li className="footer__list__item text--footer">Sortéos de Autos</li>
                                            <li className="footer__list__item text--footer"><Link to="/terminos">Términos y condiciones</Link></li>
                                            <li className="footer__list__item text--footer"><Link to="/politica">Politica de privacidad</Link></li>
                                            <li className="footer__list__item text--footer"><Link to="/cookies">Cookies</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer__bottom">
                <p>
                    Todos los Derechos Reservados ® {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}

export default Footer;