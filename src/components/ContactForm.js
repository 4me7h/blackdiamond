import {useState} from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //aqui se realizan acciones con los datos
        console.log(formData);
    };

    return(
        <section className="contact">
            <Container>
                <Row>
                    <Col>
                        <div className="contact__container">
                            <div className="contact__header">
                                <h3>
                                    <span className="text--subtitle-mark">Contáctanos para más información</span>
                                </h3>
                            </div>
                            <div className="contact__content">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="name">Nombre</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="phone">Teléfono</label>
                                        <input 
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="email">Correo Electrónico</label>
                                        <input 
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>                                    
                                    <div className="form-group mb-4">
                                        <label htmlFor="message">Mensaje</label>
                                        <textarea 
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn--contact">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactForm;