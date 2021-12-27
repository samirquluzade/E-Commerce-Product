import React, {useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import classes from './Header.module.css';

const Header = () => {
    const [check,setChecked] = useState(false);

    const changeHandler = (e) => {
        const check = e.target.checked;
        if(check === true){
            setChecked(true);
        }
        else {
            setChecked(false);
        }
    }

    return(
            <div className={classes.site}>
                <div className={classes.head}>
                    <Container>
                    <div className={classes.mainMenu}>
                        <div>
                            <img src="/images/logo.png" alt="" className="logo"/>
                        </div>
                        <div className={classes.menu}>
                            <ul>
                                <li>Ana səhifə</li>
                                <li>Məhsullar</li>
                                <li>Endirimlər</li>
                            </ul>
                        </div>
                        <div className={classes.actions}>
                            <ul>
                                <li><img src="/images/heart.svg" alt=""/></li>
                                <li><img src="/images/cart.svg" alt=""/></li>
                            </ul>
                        </div>
                        <div className={classes.hamburger}>
                            <input type="checkbox" id="check" onChange={changeHandler}/>
                            <label htmlFor="check">
                                <i className="fas fa-bars"></i>
                            </label>
                        </div>
                        {check && <div className={classes.responsive}>
                            <ul>
                                <li>Ana səhifə</li>
                                <li>Məhsullar</li>
                                <li>Endirimlər</li>
                            </ul>
                        </div>}
                    </div>
                </Container>
                    <div className={classes.filter}>
                            <div className={classes.general}>
                                <div className={classes.categories}>
                                    <input type="checkbox" id="checks"/>
                                    <label htmlFor="checks">
                                        <i className="fas fa-bars"></i>
                                    </label>
                                    <p>Kateqoriyaları göstər</p>
                                </div>
                                <div className={classes.search}>
                                    <input type="text" placeholder='Məhsul axtar' className="form-control"/>
                                    <i className='bx bx-search-alt-2'></i>
                                </div>
                            </div>
                    </div>
                </div>
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
            </div>
    );
}

export default Header;

