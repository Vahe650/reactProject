import React, {useState} from "react";
import Auxiliary from "../hoc/Auxiliary";
import './AddProduct.css';
import axios from "axios";
import {NavLink, useNavigate} from 'react-router-dom';
import Navbar from "../navbar/Navbar";

const AddProduct = (props) => {

    let state = {
        name: '',
        description: '',
        price: 0,
        imageUrl: ''
    }
    let [localState, setState] = useState(state)

    let navigate = useNavigate();

    const createProduct = () => {
        try {
            axios.post(' http://localhost:3000/products', localState).then(() => {
                navigate('/admin')
            })
        } catch (e) {
            console.log(e)
        }
    }
    const handleChangeName = event => {
        state.name = event.target.value;
        setState({...localState, name: event.target.value});
    }
    const handleChangeDescription = event => {
        state.description = event.target.value;
        setState({...localState, description: event.target.value});
    }
    const handleChangePrice = event => {
        state.price = event.target.value;
        setState({...localState, price: event.target.value});
    }

    const selectFile = event => {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        data.append('upload_preset', 'sweet_bakery_store_cloudinary');
        data.append('cloud_name', 'dh1uq37vi');

        axios.post('https://api.cloudinary.com/v1_1/dh1uq37vi/image/upload', data).then(response => {
            state.imageUrl = response.data.url;
            setState({...localState, imageUrl: response.data.url})
        })
    }

    return (
        <Auxiliary>
            <Navbar></Navbar>
            <section className="u-clearfix u-gradient add-product-section" id="sec-0352">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1 width-limit-laptop">
                    <h2 className="u-align-center u-text u-text-default u-text-1">Create Product</h2>
                </div>
            </section>

            <section className="u-clearfix u-gradient u-section-2" style={{height: "100vh"}} id="sec-acde">
                <div className="width-limit-laptop add-product-container">
                    <form className="add-product-form" name="form" style={{padding: "10px"}}>
                        <div className="u-form-group u-form-name">
                            <label htmlFor="name-0760" className="u-label">Product Name</label>
                            <input type="text" placeholder="Enter Product Name"
                                   id="name-0760"
                                   name="name"

                                   onChange={handleChangeName}
                                   className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                   required=""/>
                        </div>
                        <div className="u-form-group u-form-message">
                            <label htmlFor="email-0760" className="u-label">Description</label>
                            <textarea placeholder="Add Product Description" id="email-0760"
                                      name="email"
                                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                      required="required"
                                      onChange={handleChangeDescription}
                            >
                                                        </textarea>
                        </div>
                        <div className="u-form-group u-form-textarea u-form-group-3">
                            <label htmlFor="textarea-9dea" className="u-label">Price</label>
                            <input id="textarea-9dea" name="textarea"
                                   onChange={handleChangePrice}
                                   className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                   required="required" type="number"/>
                        </div>
                    </form>

                    <div className="upload-product-image">
                        {localState?.imageUrl ? <img alt='' className="u-expanded-width u-image u-image-1"
                              src={localState?.imageUrl}
                              data-image-width="750"
                              data-image-height="750"/> : ''}
                        <input type="file" id="upload-product-image" onChange={selectFile}/>
                        <label htmlFor="upload-product-image" className="u-btn u-upload-button">Upload Image</label>
                    </div>

                    <div className="buttongroup">
                        <NavLink to={'/admin'}
                                 className="u-align-center u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-3">
                            Cancel
                        </NavLink>
                        <button disabled={!localState.name || !localState.price} onClick={createProduct.bind(this)}
                                className="u-align-center u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-3">
                            Add product
                        </button>
                    </div>
                </div>
            </section>
        </Auxiliary>
    )
}

export default AddProduct;