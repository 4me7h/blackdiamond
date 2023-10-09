import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import imgBono01 from "../images/img-bono.png";

const Bonos = () => {
  return (
    <>
      <section className="bonos">
        <Container>
          <Row>
            <Col>
              <div className="bonos__container">
                <div className="bonos__header">
                  <h3><span className="text--subtitle-mark">Bonos sorpresa para boleto ganador</span></h3>
                </div>
                <div className="bonos__content">
                  <ul className="bonos__list">
                    <li className="bonos__item">
                      <div className="bonos__card">
                        <img className="bonos__card__img" src={imgBono01} alt="bonos-img"/>
                        <span className="bonos__card__fase">1 Fase Bono</span>
                        <span className="bonos__card__name">Black Diamond Gold</span>
                        <span className="bonos__card__text">Placas seguro bono sorpresa estimado en $150,000</span>
                      </div>
                    </li>
                    <li className="bonos__item">
                      <div className="bonos__card">
                        <img className="bonos__card__img" src={imgBono01} alt="bonos-img"/>
                        <span className="bonos__card__fase">1 Fase Bono</span>
                        <span className="bonos__card__name">Black Diamond Gold</span>
                        <span className="bonos__card__text">Placas seguro bono sorpresa estimado en $150,000</span>
                      </div>
                    </li>
                    <li className="bonos__item">
                      <div className="bonos__card">
                        <img className="bonos__card__img" src={imgBono01} alt="bonos-img"/>
                        <span className="bonos__card__fase">1 Fase Bono</span>
                        <span className="bonos__card__name">Black Diamond Gold</span>
                        <span className="bonos__card__text">Placas seguro bono sorpresa estimado en $150,000</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Bonos