import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
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
    );
}

export default Header;

