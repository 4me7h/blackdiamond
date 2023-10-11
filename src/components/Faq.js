import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Accordion from "react-bootstrap/esm/Accordion";

const Faq = () => {
  return (
    <section className="faq">
        <Container>
            <Row>
                <Col>
                    {/* <div className="faq__container">
                        <div className="faq__header">
                            <h3><span className="text--subtitle-mark">¿Por qué comprar un boleto con nosotros?</span></h3>
                        </div>
                        <div className="faq__content">
                            <ul className="faq__list">
                                <li className="faq__list__text"><span className="faq__list__number">1.</span> Somos una empresa confiable ubicada en Guadalajara, Jalisco.</li>

                                <li className="faq__list__text"><span className="faq__list__number">2.</span> Somos expertos en sorteos de vehículos de alta gama.</li>

                                <li className="faq__list__text"><span className="faq__list__number">3.</span> Nuestros sorteos se basan siempre en la lotería nacional.</li>

                                <li className="faq__list__text"><span className="faq__list__number">4.</span> Siempre contamos con nuevas dinámicas para que tengas la posibilidad de ganar con nosotros.</li>

                                <li className="faq__list__text"><span className="faq__list__number">5.</span> Siempre contamos con nuevas dinámicas para que tengas la posibilidad de ganar con nosotros.</li>

                                <li className="faq__list__text"><span className="faq__list__number">6.</span> Realizamos transmisiones en vivo de nuestra plataforma donde los boletos comprados por nuestros clientes están registrados para notificar a los ganadores.</li>

                                <li className="faq__list__text"><span className="faq__list__number">7.</span> Damos bonos y premios en todos nuestros sorteos.</li>
                            </ul>
                        </div>
                        <div className="faq__header">
                            <h3><span className="text--subtitle-mark">¿Cómo son las dinámicas de nuestros sorteos?</span></h3>
                        </div>
                        <div className="faq__content">
                            <ul className="faq__list">
                                <li className="faq__list__text"><span className="faq__list__number">1.</span> Todo sorteo se realiza en base a la LOTERIA NACIONAL PARA LA ASISTENCIA PUBLICA MEXICANA.</li>

                                <li className="faq__list__text"><span className="faq__list__number">2.</span> El ganador de BLACK DIAMOND será el participante cuyo numero de boleto coincida las ultimas 5 cifras del primer premio ganador de la lotería nacional (todo sorteo vendrán con la fecha basada a la misma LN).</li>

                                <li className="faq__list__text"><span className="faq__list__number">3.</span> Se elegirá un nuevo ganador realizando la misma dinámica en la siguiente fecha del premio de la lotería Nacional (en nuestra pagina haremos mención de la siguiente fecha) entonces tendrá una segunda oportunidad de ser el ganador con tu misma numeración.</li>

                                <li className="faq__list__text"><span className="faq__list__number">4.</span> Toda transmisión será en vivo de los sorteos en nuestra pagina de Facebook en las fechas indicadas a las 20:00 hrs del centro del país.</li>

                                <li className="faq__list__text"><span className="faq__list__number">5.</span> En nuestra pagina web de Black diamond haremos la transmisión en vivo con la lotería nacional, asi como las entregas de los premios a los ganadores.</li>

                                <li className="faq__list__text"><span className="faq__list__number">6.</span> RIFA CONCESIONADA AL 90% DE EMISIONES.</li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="faq__container">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>¿Por qué comprar un boleto con nosotros?</Accordion.Header>
                                <Accordion.Body>
                                    <div className="faq__content">
                                        <ul className="faq__list">
                                            <li className="faq__list__text"><span className="faq__list__number">1.</span> Somos una empresa confiable ubicada en Guadalajara, Jalisco.</li>

                                            <li className="faq__list__text"><span className="faq__list__number">2.</span> Somos expertos en sorteos de vehículos de alta gama.</li>

                                            <li className="faq__list__text"><span className="faq__list__number">3.</span> Nuestros sorteos se basan siempre en la lotería nacional.</li>

                                            <li className="faq__list__text"><span className="faq__list__number">4.</span> Siempre contamos con nuevas dinámicas para que tengas la posibilidad de ganar con nosotros.</li>

                                            <li className="faq__list__text"><span className="faq__list__number">5.</span> Siempre contamos con nuevas dinámicas para que tengas la posibilidad de ganar con nosotros.</li>

                                            <li className="faq__list__text"><span className="faq__list__number">6.</span> Realizamos transmisiones en vivo de nuestra plataforma donde los boletos comprados por nuestros clientes están registrados para notificar a los ganadores.</li>

                                            <li className="faq__list__text"><span className="faq__list__number">7.</span> Damos bonos y premios en todos nuestros sorteos.</li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>¿Cómo son las dinámicas de nuestros sorteos?</Accordion.Header>
                                <Accordion.Body>
                                    <div className="faq__content">
                                        <ul className="faq__list">
                                            <li className="faq__list__text"><span className="faq__list__number">1.</span> Todo sorteo se realiza en base a la LOTERIA NACIONAL PARA LA ASISTENCIA PUBLICA MEXICANA.</li>

                                            <li className="faq__list__text"><span className="faq__list__number">2.</span> El ganador de BLACK DIAMOND será el participante cuyo numero de boleto coincida las ultimas 5 cifras del primer premio ganador de la lotería nacional (todo sorteo vendrán con la fecha basada a la misma LN).</li>

                                            <li className="faq__list__text"><span className="faq__list__number">3.</span> Se elegirá un nuevo ganador realizando la misma dinámica en la siguiente fecha del premio de la lotería Nacional (en nuestra pagina haremos mención de la siguiente fecha) entonces tendrá una segunda oportunidad de ser el ganador con tu misma numeración.</li>

                                            <li className="faq__list__text"><span className="faq__list__number">4.</span> Toda transmisión será en vivo de los sorteos en nuestra pagina de Facebook en las fechas indicadas a las 20:00 hrs del centro del país.</li>

                                            <li className="faq__list__text"><span className="faq__list__number">5.</span> En nuestra pagina web de Black diamond haremos la transmisión en vivo con la lotería nacional, asi como las entregas de los premios a los ganadores.</li>

                                            <li className="faq__list__text"><span className="faq__list__number">6.</span> RIFA CONCESIONADA AL 90% DE EMISIONES.</li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Faq;