import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const Gridimg = () => {
    return(
        <section className="gridimg">
            <Container>
                <Row>
                    <Col>
                        <div className="gridimg__container">
                            <div className="gridimg__content">
                                <div className="gridimg__list">
                                    <div className="gridimg__item">
                                        <img className="gridimg__img" src={'https://www.blackdiamond-sorteos.com/assets/foto1-e2c6f44a.jpg'} alt="algo"/>
                                    </div>
                                    <div className="gridimg__item">
                                        <img className="gridimg__img" src={'https://www.blackdiamond-sorteos.com/assets/foto1-e2c6f44a.jpg'} alt="algo"/>
                                    </div>
                                    <div className="gridimg__item">
                                        <img className="gridimg__img" src={'https://www.blackdiamond-sorteos.com/assets/foto1-e2c6f44a.jpg'} alt="algo"/>
                                    </div>
                                    <div className="gridimg__item">
                                        <img className="gridimg__img" src={'https://www.blackdiamond-sorteos.com/assets/foto1-e2c6f44a.jpg'} alt="algo"/>
                                    </div>
                                    <div className="gridimg__item">
                                        <img className="gridimg__img" src={'https://www.blackdiamond-sorteos.com/assets/foto1-e2c6f44a.jpg'} alt="algo"/>
                                    </div>
                                    <div className="gridimg__item">
                                        <img className="gridimg__img" src={'https://www.blackdiamond-sorteos.com/assets/foto1-e2c6f44a.jpg'} alt="algo"/>
                                    </div>
                                  
                                    
                                    {/* <li className="gridimg__item" style={{backgroundImage: `url(https://www.blackdiamond-sorteos.com/assets/foto1-e2c6f44a.jpg)`}}></li>
                                    <li className="gridimg__item" style={{backgroundImage: `url(https://www.blackdiamond-sorteos.com/assets/foto1-e2c6f44a.jpg)`}}></li>
                                    <li className="gridimg__item" style={{backgroundImage: `url(https://www.blackdiamond-sorteos.com/assets/foto1-e2c6f44a.jpg)`}}></li>
                                    <li className="gridimg__item" style={{backgroundImage: `url(https://www.blackdiamond-sorteos.com/assets/foto1-e2c6f44a.jpg)`}}></li>
                                    <li className="gridimg__item" style={{backgroundImage: `url(https://www.blackdiamond-sorteos.com/assets/foto1-e2c6f44a.jpg)`}}></li> */}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Gridimg;