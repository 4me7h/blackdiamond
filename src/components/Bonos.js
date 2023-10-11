import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import imgBono01 from "../images/img-bono-gold.png";
import imgBono02 from "../images/img-bono-silver.png";
import imgBono03 from "../images/img-bono-bronce.png";

const Bonos = () => {
  return (
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
                      <span className="bonos__card__text">-Placas -Seguro -Bono sorpresa estimado en $150,000</span>
                    </div>
                  </li>
                  <li className="bonos__item">
                    <div className="bonos__card">
                      <img className="bonos__card__img" src={imgBono02} alt="bonos-img"/>
                      <span className="bonos__card__fase">2 Fase Bono</span>
                      <span className="bonos__card__name">Black Diamond Silver</span>
                      <span className="bonos__card__text">-Placas -Bono sorpresa estimado en $100,000</span>
                    </div>
                  </li>
                  <li className="bonos__item">
                    <div className="bonos__card">
                      <img className="bonos__card__img" src={imgBono03} alt="bonos-img"/>
                      <span className="bonos__card__fase">1 Fase Bono</span>
                      <span className="bonos__card__name">Black Diamond Gold</span>
                      <span className="bonos__card__text">-Permiso de 30 días -Bono estimado en $50,000</span>
                    </div>
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

export default Bonos