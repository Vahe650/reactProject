import React from "react";
import './ProductItem.css';
import Auxiliary from "../hoc/Auxiliary";
import {NavLink, useLocation} from "react-router-dom";
import axios from "axios";
import noImage from '../../assets/no-image.png';

const ProductItem = (props) => {
    const location = useLocation();
    const {pathname} = location;
    const changeState = props.changeState;

    const removeProduct = (id) => {
        try {
            axios.delete('http://localhost:3000/products/' + id)
                .then(() => getProductList())
        } catch (e) {
            console.log(e)
        }
    }

    const getProductList = () => {
        try {
            axios.get(' http://localhost:3000/products').then(response => {
                changeState(response.data);
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Auxiliary>


            <div
                className="u-container-style u-gradient u-list-item u-radius-20 u-repeater-item u-shape-round u-video-cover u-list-item-1">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                    <img alt="..." className="u-expanded-width u-image u-image-default u-image-1"
                         data-image-width="1200" data-image-height="1500"
                         src={props.productItem.imageUrl || noImage}/>
                    <h4 className="u-text u-text-default u-text-1">{props.productItem.name}</h4>
                    <p className="u-text u-text-default u-text-2">{props.productItem.description}.</p>
                    <h4 className="u-text u-text-default u-text-palette-1-base u-text-3">${props.productItem.price}</h4>
                    {(pathname !== '/admin' ?
                        <NavLink to={'/product/' + props.productItem.id} state={props.productItem}>
                            <span className="u-btn u-button-style u-btn-2">View</span></NavLink> :
                        <span onClick={removeProduct.bind(this, props.productItem.id)}
                              className="u-btn u-button-style u-btn-4">delete</span>)}
                </div>
            </div>


        </Auxiliary>
    )
}

export default ProductItem;
