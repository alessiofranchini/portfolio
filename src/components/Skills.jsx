import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import JavaScript from '../assets/img/JavaScript.png';
import Bootstrap_logo from '../assets/img/Bootstrap_logo.png';
import sass from '../assets/img/sass.png';
import reactlogo from '../assets/img/reactlogo.png';
import Java from '../assets/img/Java.png';
import spring from '../assets/img/spring.png';
import postman from '../assets/img/postman.svg';
import Postgresql from '../assets/img/Postgresql.png';

function Skills() {
    const skillsData = [
        { name: 'Html', icon: html },
        { name: 'Css', icon: css },
        { name: 'JavaScript', icon: JavaScript },
        { name: 'Bootstrap', icon: Bootstrap_logo },
        { name: 'Sass', icon: sass },
        { name: 'React', icon: reactlogo },
        { name: 'Java', icon: Java },
        { name: 'SpringBoot', icon: spring },
        { name: 'Postman', icon: postman },
        { name: 'PostgreSQL', icon: Postgresql },
    ];

    const firstRowSkills = skillsData.slice(0, 6); 
    const secondRowSkills = skillsData.slice(6); 

    return (
        <Container>
            <h2 className='text-center mb-5 mt-5'>Skills</h2>
            <Row className='mb-5'>
                {firstRowSkills.map((skill, index) => (
                    <Col key={index} xs={6} sm={4} md={2} className="text-center">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <p className='mt-4'>{skill.name}</p>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col md={2} className="text-center"></Col> {/* Spazio vuoto per far iniziare la prima immagine sotto la seconda */}
                {secondRowSkills.map((skill, index) => (
                    <Col key={index} xs={6} sm={4} md={2} className="text-center">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <p className='mt-4'>{skill.name}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Skills;
