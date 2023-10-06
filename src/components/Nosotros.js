import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Youtube from 'react-youtube';

const Nosotros = () => {

    const videoId = "0cVFvGPaFC4";
    const opts = {
        playerVars: {
            autoplay: 1,
            modestbranding: 1,
            controls: 0,
            showinfo: 0,
            disablekb: 1,
            loop: 1,
            playlist: videoId, 
            mute: 1
        },
    };

    return(
        <section className="nosotros">
                <Container>
                    <Row>
                        <Col>
                            <div className="nosotros__container">
                                <div className="nosotros__col">
                                    <h3 class="text--subtitle nosotros__text--title">SOMOS BLACK DIAMOND</h3>
                                    <p class="text--lead nosotros__text--lead">
                                        Estamos enfocados en la rifa y sorteo de vehículos de alta gama para que por medio de poca inversión puedas tener el coche que siempre has soñado.
                                    </p>
                                    <p class="text--lead nosotros__text--lead">
                                        Somos una empresa 100% mexicana ubicada en Guadalajara Jalisco dedicada al sorteo y rifa de vehículos de gama premium.
                                    </p>
                                </div>
                                <div className="nosotros__col">
                                    <div className="nosotros__video">
                                        <div className="nosotros__video__overlay"></div>
                                        <Youtube 
                                            videoId={videoId}
                                            opts={opts}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </section>
    );
}

export default Nosotros;