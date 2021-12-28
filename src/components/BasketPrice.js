import React from 'react';
import Header from "./Header";
import classes from'./BasketPrice.module.css';
import {Container} from "react-bootstrap";
import SimilarProducts from "./SimilarProducts";
import Footer from "./Footer";

const BasketPrice = () => {
    return(
      <>
        <Header />
        <Container>
            <div className={classes.basketSection}>
                <div className={classes.detailsSection}>
                    <h1>Səbət</h1>
                    <div className={classes.checkoutSection}>
                        <div className={classes.priceSection}>
                            <div className={classes.itemsSection}>
                                <div className={classes.itemSection}>
                                    <div className={classes.imageSection}>
                                        <img src="/images/headphone.png" alt=""/>
                                    </div>
                                    <div className={classes.productName}>
                                        <p>Qulaqlıqlar</p>
                                        <p>Apple Airpods Max</p>
                                    </div>
                                    <div className={classes.productCount}>
                                        <span>-</span>
                                        <p>1</p>
                                        <span>+</span>
                                    </div>
                                    <div className={classes.productPrice}>
                                        <span>$550.00</span>
                                    </div>
                                </div>
                                <div className={classes.line}></div>
                            </div>
                            <div className={classes.itemsSection}>
                                <div className={classes.itemSection}>
                                    <div className={classes.imageSection}>
                                        <img src="/images/headphone.png" alt=""/>
                                    </div>
                                    <div className={classes.productName}>
                                        <p>Qulaqlıqlar</p>
                                        <p>Apple Airpods Max</p>
                                    </div>
                                    <div className={classes.productCount}>
                                        <span>-</span>
                                        <p>1</p>
                                        <span>+</span>
                                    </div>
                                    <div className={classes.productPrice}>
                                        <span>$550.00</span>
                                    </div>
                                </div>
                                <div className={classes.line}></div>
                            </div>
                            <div className={classes.itemsSection}>
                                <div className={classes.itemSection}>
                                    <div className={classes.imageSection}>
                                        <img src="/images/headphone.png" alt=""/>
                                    </div>
                                    <div className={classes.productName}>
                                        <p>Qulaqlıqlar</p>
                                        <p>Apple Airpods Max</p>
                                    </div>
                                    <div className={classes.productCount}>
                                        <span>-</span>
                                        <p>1</p>
                                        <span>+</span>
                                    </div>
                                    <div className={classes.productPrice}>
                                        <span>$550.00</span>
                                    </div>
                                </div>
                                <div className={classes.line}></div>
                            </div>
                        </div>
                        <div className={classes.sumSection}>
                            <div className={classes.promocode}>
                                <input type="text" placeholder="Promokod" className="form-control"/>
                                <i className='bx bx-chevron-right'></i>
                            </div>
                            <div className={classes.generalPriceSection}>
                                <div className={classes.calcPriceSection}>
                                    <p>Endirim</p>
                                    <p>0 AZN</p>
                                </div>
                                <div className={classes.calcPriceSection}>
                                    <p>Çatdırılma</p>
                                    <p>0 AZN</p>
                                </div>
                                <div className={classes.totalPriceSection}>
                                    <p>Toplam</p>
                                    <p>500 AZN</p>
                                </div>
                                <div className={classes.totalPriceSection}>
                                    <a href="#">Sifarişi rəsmiləşdir</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SimilarProducts />
        </Container>
          <Footer />
      </>
    );
}

export default BasketPrice;