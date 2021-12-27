import React, {useState} from 'react';
import classes from "./BasketDetails.module.css";
import Header from "./Header";
import Footer from "./Footer";
import {Container} from "react-bootstrap";

const BasketDetails = () => {

    const [cash,setCash] = useState(false);
    const [credit,setCredit] = useState(false);

    const chooseSection = (e) => {
        setCash(true);
        setCredit(false);
    }
    const chooseSectionCredit = (e) => {
        setCredit(true);
        setCash(false);
    }


    return(
        <>
            <Header />
                <Container>
                        <div className={classes.basketSection}>
                            <div className={classes.inputsSection}>
                                <h2>Səbət</h2>
                                <div className={classes.paymentSection}>
                                    <div className={!cash ? classes.cashSection : classes.cashSectionActive} onClick={chooseSection}>
                                        <h5>Nağd</h5>
                                        <p>Qapıda nağd ödəniş</p>
                                    </div>
                                    <div className={!credit ? classes.creditSection : classes.creditSectionActive} onClick={chooseSectionCredit}>
                                        <h5>Kredilə ödəniş</h5>
                                        <p>Kredit kartı ilə ödə</p>
                                    </div>
                                </div>
                                <div className={classes.inputs}>
                                    <div className={classes.basicInputs}>
                                        <div className={classes.input}>
                                            <label htmlFor="name">Ad <span>*</span></label>
                                            <input type="text" name="name" className="form-control"/>
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className={classes.input}>
                                            <label htmlFor="surname">Soyad <span>*</span></label>
                                            <input type="text" name="surname" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className={classes.basicInputs}>
                                        <div className={classes.input}>
                                            <label htmlFor="name">Ata adı <span>*</span></label>
                                            <input type="text" name="name" className="form-control"/>
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className={classes.input}>
                                            <label htmlFor="surname">Telefon nömrəsi <span>*</span></label>
                                            <input type="text" name="surname" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className={classes.basicInputs}>
                                        <div className={classes.inputW}>
                                            <label htmlFor="name">Əlavə qeydlər</label>
                                            <input type="text" name="name" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className={classes.deliveryAddress}>
                                        <h5>Çatdırılma ünvanı</h5>
                                        <div className={classes.basicInputs}>
                                            <div className={classes.input}>
                                                <label htmlFor="name">Şəhər <span>*</span></label>
                                                <input type="text" name="name" className="form-control"/>
                                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className={classes.input}>
                                                <label htmlFor="surname">Rayon <span>*</span></label>
                                                <input type="text" name="surname" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className={classes.basicInputs}>
                                            <div className={classes.inputW}>
                                                <label htmlFor="name">Ünvan <span>*</span></label>
                                                <input type="text" name="name" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.approve}>
                                    <a href="#">Sifarişi təsdiqlə</a>
                                </div>
                            </div>
                            {cash &&<div className={classes.sumSection}>
                                <div className={classes.result}>
                                    <p>Cəmi: 60&#8380;</p>
                                    <p>Çatdırılma: 60&#8380;</p>
                                    <h4>Yekun: 600&#8380;</h4>
                                </div>
                            </div>}
                            {credit &&<div className={classes.sumSection}>
                                <div className={classes.result}>
                                    <p>Ay: 6</p>
                                    <p>İlkin ödəniş: 60&#8380;</p>
                                    <p>Aylıq ödəniş: 60&#8380;</p>
                                    <p>Çatdırılma: 60&#8380;</p>
                                </div>
                            </div>}
                        </div>
                </Container>
            <Footer />
        </>
    );
}

export default BasketDetails;