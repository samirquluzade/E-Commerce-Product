import React from 'react';
import classes from "./SimilarProducts.module.css";
import {Container} from "react-bootstrap";

const SimilarProducts = () => {
    return(
        <Container>
          <div className={classes.generalProducts}>
              <h3>Oxşar məhsullar</h3>
              <div className={classes.products}>
                  <div className={classes.twoProducts}>
                      <div className={classes.product}>
                          <div className={classes.productImage}>
                              <img src="/images/airmax.png" alt=""/>
                          </div>
                          <p>Headphone R1342JBL LIVE 650BTNC Wireless</p>
                          <p>$42.99</p>
                      </div>
                      <div className={classes.product}>
                          <div className={classes.productImage}>
                              <img src="/images/airmax.png" alt=""/>
                          </div>
                          <p>Headphone R1342JBL LIVE 650BTNC Wireless</p>
                          <p>$42.99</p>
                      </div>
                  </div>
                  <div className={classes.twoProducts}>
                      <div className={classes.product}>
                          <div className={classes.productImage}>
                              <img src="/images/airmax.png" alt=""/>
                          </div>
                          <p>Headphone R1342JBL LIVE 650BTNC Wireless</p>
                          <p>$42.99</p>
                      </div>
                      <div className={classes.product}>
                          <div className={classes.productImage}>
                              <img src="/images/airmax.png" alt=""/>
                          </div>
                          <p>Headphone R1342JBL LIVE 650BTNC Wireless</p>
                          <p>$42.99</p>
                      </div>
                  </div>
              </div>
          </div>
        </Container>
    );
}

export default SimilarProducts;