import React from 'react';
import classes from './Footer.module.css';
import {Container, Row} from "react-bootstrap";

const Footer = () => {
    return(
        <div className={classes.footer}>
            <Container>
                <Row>
                    <div className={classes.footerHelp}>
                        <div className={classes.logo}>
                            <span>Green</span>
                            <span>Tekno</span>
                        </div>
                        <div className={classes.info}>
                            <div className={classes.follow}>
                                <p>Bizi izləyin:</p>
                                <div className={classes.links}>
                                    <i className='bx bxl-instagram'></i>
                                    <i className='bx bxl-facebook-circle'></i>
                                </div>
                            </div>
                            <div className={classes.contact}>
                                <p>Əlaqə:</p>
                                <p>+994 55 123 45 67</p>
                                <p>info@mail.com</p>
                            </div>
                            <div className={classes.address}>
                                <p>Ünvan:</p>
                                <p>Atatürk prospekti 58</p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;