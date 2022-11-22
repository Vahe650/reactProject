import React from "react";
import Auxiliary from "../hoc/Auxiliary";
import {NavLink} from "react-router-dom";
import './ProductView.css'
import {useLocation} from "react-router-dom";
import Navbar from "../navbar/Navbar";

const ProductView = (props) => {
    const location = useLocation();
    const { state } = location;

    return (
        <Auxiliary>
            <Navbar></Navbar>
            <section className="u-align-center u-clearfix u-gradient u-section-1 product-list-section" id="carousel_3090">
                <div className="u-clearfix u-sheet u-valign-middle-lg u-sheet-1">
                    <div className="u-border-2 u-border-palette-2-dark-1 u-container-style u-expanded-width u-gradient u-product u-product-1 width-limit-laptop">
                        <div className="u-container-layout u-container-layout-1 width-limit-laptop grid-container-layout">
                            <img src={state.imageUrl} alt=""
                                 className="u-image u-image-default u-product-control u-image-1"
                                 data-image-width="750"
                                 data-image-height="750" />

                                <div className="u-align-center u-container-style u-gradient u-group u-radius-20 u-shape-round u-group-1">
                                    <div className="u-container-layout u-valign-middle u-container-layout-2">
                                        <h2 className="u-product-control u-text u-text-default u-text-1">
                                            <span className="u-product-title-link">{state.name}</span>
                                        </h2>
                                        <div className="u-product-control u-product-price u-product-price-1">
                                            <div className="u-price-wrapper u-spacing-10">
                                                <div className="u-price" style={{fontSize: "4.5rem; font-weight: 700"}}>${state.price}</div>
                                            </div>
                                        </div>
                                        <div className="u-product-control u-product-desc u-text u-text-grey-15 u-text-2">
                                            <p>{state.description}</p>
                                        </div>
                                        <NavLink to="/product" className="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-product-control u-btn-1">Back To List</NavLink>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </Auxiliary>
    )

}

export default ProductView;