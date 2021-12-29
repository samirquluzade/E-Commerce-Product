import React from 'react';
import classes from './Categories.module.css';
import {Container} from "react-bootstrap";

const Categories = () => {

    const setPage = (e) => {
        for(let i = 0; i<3;i++){
            e.target.parentNode.children[i].classList.remove(`${classes.active}`);
        }
        e.target.classList.add(`${classes.active}`);
    }

    return(
      <Container>
          <div className={classes.generalCategories}>
              <div className={classes.categoryFilters}>
                  <div className={classes.categories}>
                      <h5>Kateqoriyalar</h5>
                      <div className={classes.line}></div>
                      <div className={classes.products}>
                          <p>Smartfonlar</p>
                          <p>Smart saatlar</p>
                          <p>Aksesuarlar</p>
                          <p>Planşetlər</p>
                          <p>Qulaqlıqlar</p>
                      </div>
                  </div>
                  <div className={classes.priceRange}>
                      <h5>Qiymət aralığı</h5>
                      <div className={classes.line}></div>
                      <div className={classes.price}>
                          <div className={classes.range}>
                              <p>40&#8380;</p>
                              <p>100&#8380;</p>
                          </div>
                          <div className={classes.rangeSlider}></div>
                      </div>
                  </div>
                  <div className={classes.brands}>
                      <h5>Brendlər</h5>
                      <div className={classes.line}></div>
                      <div className={classes.brand}>
                          <input type="radio" name="brand"/>
                          <p>Apple</p>
                      </div>
                      <div className={classes.brand}>
                          <input type="radio" name="brand"/>
                          <p>Apple</p>
                      </div>
                      <div className={classes.brand}>
                          <input type="radio" name="brand"/>
                          <p>Apple</p>
                      </div>
                      <div className={classes.brand}>
                          <input type="radio" name="brand"/>
                          <p>Apple</p>
                      </div>
                      <div className={classes.brand}>
                          <input type="radio" name="brand"/>
                          <p>Apple</p>
                      </div>
                      <div className={classes.brand}>
                          <input type="radio" name="brand"/>
                          <p>Apple</p>
                      </div>
                      <div className={classes.brand}>
                          <input type="radio" name="brand"/>
                          <p>Apple</p>
                      </div>
                  </div>
              </div>
              <div className={classes.allProducts}>
                  <div className={classes.sortAZ}>
                      <p>Ada görə(A-Z)</p>
                      <i className='bx bx-chevron-down'></i>
                  </div>
                  <div className={classes.productsDetail}>
                      <div className={classes.threeProducts}>
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
                          <div className={classes.product}>
                              <div className={classes.productImage}>
                                  <img src="/images/airmax.png" alt=""/>
                              </div>
                              <p>Headphone R1342JBL LIVE 650BTNC Wireless</p>
                              <p>$42.99</p>
                          </div>
                      </div>
                      <div className={classes.threeProducts}>
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
                          <div className={classes.product}>
                              <div className={classes.productImage}>
                                  <img src="/images/airmax.png" alt=""/>
                              </div>
                              <p>Headphone R1342JBL LIVE 650BTNC Wireless</p>
                              <p>$42.99</p>
                          </div>
                      </div>
                      <div className={classes.threeProducts}>
                          <div className={classes.product}>
                              <div className={classes.productImage}>
                                  <img src="/images/iphone.png" alt=""/>
                              </div>
                              <p>Headphone R1342JBL LIVE 650BTNC Wireless</p>
                              <div className={classes.discount}>
                                  <s><span>$74.99</span></s>
                                  <span>$42.99</span>
                              </div>
                          </div>
                          <div className={classes.product}>
                              <div className={classes.productImage}>
                                  <img src="/images/iphone.png" alt=""/>
                              </div>
                              <p>Headphone R1342JBL LIVE 650BTNC Wireless</p>
                              <div className={classes.discount}>
                                  <s><span>$74.99</span></s>
                                  <span>$42.99</span>
                              </div>
                          </div>
                          <div className={classes.product}>
                              <div className={classes.productImage}>
                                  <img src="/images/iphone.png" alt=""/>
                              </div>
                              <p>Headphone R1342JBL LIVE 650BTNC Wireless</p>
                              <div className={classes.discount}>
                                  <s><span>$74.99</span></s>
                                  <span>$42.99</span>
                              </div>
                          </div>
                      </div>
                      <div className={classes.threeProducts}>
                          <div className={classes.product}>
                              <div className={classes.productImage}>
                                  <img src="/images/iphone.png" alt=""/>
                              </div>
                              <p>Headphone R1342JBL LIVE 650BTNC Wireless</p>
                              <div className={classes.discount}>
                                  <s><span>$74.99</span></s>
                                  <span>$42.99</span>
                              </div>
                          </div>
                          <div className={classes.product}>
                              <div className={classes.productImage}>
                                  <img src="/images/iphone.png" alt=""/>
                              </div>
                              <p>Headphone R1342JBL LIVE 650BTNC Wireless</p>
                              <div className={classes.discount}>
                                  <s><span>$74.99</span></s>
                                  <span>$42.99</span>
                              </div>
                          </div>
                          <div className={classes.product}>
                              <div className={classes.productImage}>
                                  <img src="/images/iphone.png" alt=""/>
                              </div>
                              <p>Headphone R1342JBL LIVE 650BTNC Wireless</p>
                              <div className={classes.discount}>
                                  <s><span>$74.99</span></s>
                                  <span>$42.99</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={classes.pages}>
                      <span className={classes.active} onClick={setPage}>1</span>
                      <span onClick={setPage}>2</span>
                      <span onClick={setPage}>
                          <i className='bx bx-right-arrow-alt'></i>
                      </span>
                  </div>
              </div>
          </div>
      </Container>
    );
}

export default Categories;