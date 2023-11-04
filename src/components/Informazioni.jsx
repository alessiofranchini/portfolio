import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import foto from '../assets/img/foto.jpg';

function Informazioni() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <div className="profile-image m-5">
                        <img src={foto} alt="Foto Profilo" className='foto-profilo' />
                    </div>
                </Col>
                <Col md={6} className="d-flex align-items-center">
                    <div className="curriculum-info m-5 text-center">
                        <h1>Alessio Franchini</h1>
                        <h2>Web developer full-stack</h2>
                        <p> Mi piace mettermi alla prova ed imparare sempre cose nuove. Il mio
                            obiettivo è lavorare nell'ambito dello sviluppo web e accrescere le
                            mie competenze. Sono una persona molto constante e per questo ho conlcuso
                            con successo il percorso in Epicode.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Informazioni;
