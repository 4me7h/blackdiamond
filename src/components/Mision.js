import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

import imgMision from "../images/img-nosotros-mision.jpg";
import imgVision from "../images/img-nosotros-vision.jpg";
import imgObjetivo from "../images/img-nosotros-objetivo.jpg";

const Card = ({img, title, text}) => {
    return(
        <div className="mision__card">
            <img className="mision__card__img" src={img} alt="mision-img"/>
            <span className="mision__card__title">
                {title}
            </span>
            <span className="mision__card__text">
                {text}
            </span>
        </div>
    );
}

const Mision = () => {
  return (
    <section className="mision">
        <Container>
            <Row>
                <Col>
                    <div className="mision__container">
                        <div className="mision__content">
                            <ul className="mision__list">
                                <li className="mision__item">
                                    <Card 
                                        img={imgMision}
                                        title="Misión"
                                        text="Ser una de las empresas mas importantes del sector, brindando a nuestros clientes fiabilidad, seguridad y sobre todo comodidad para participar en nuestros sorteos, marcando una diferencia con nuestra competencia a través de nuestra forma de trabajar y la experiencia que se le brindará al cliente"
                                    />
                                </li>
                                <li className="mision__item">
                                    <Card 
                                        img={imgVision}
                                        title="Visión"
                                        text="Ser una de las empresas mas importantes del sector, brindando a nuestros clientes fiabilidad, seguridad y sobre todo comodidad para participar en nuestros sorteos, marcando una diferencia con nuestra competencia a través de nuestra forma de trabajar y la experiencia que se le brindará al cliente"
                                    />
                                </li>
                                <li className="mision__item">
                                    <Card 
                                        img={imgObjetivo}
                                        title="Objetivo"
                                        text="Ser una de las empresas mas importantes del sector, brindando a nuestros clientes fiabilidad, seguridad y sobre todo comodidad para participar en nuestros sorteos, marcando una diferencia con nuestra competencia a través de nuestra forma de trabajar y la experiencia que se le brindará al cliente"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Mision;