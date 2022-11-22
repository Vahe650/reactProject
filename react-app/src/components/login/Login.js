import React from "react";
import Auxiliary from "../hoc/Auxiliary";
import {useNavigate} from "react-router-dom";
import './Login.css';

const Login = (props) => {

    let formData = {
        login: '',
        password: ''
    }
    let navigate = useNavigate();

    const onLoginInput = (event) => {
        formData.login = event.target.value;
    }

    const onPasswordInput = (event) => {
        formData.password = event.target.value;
    }

    const navigateTo = () => {
       if (formData.login === 'user' && formData.password === 'user') {
           navigate('/product');
           return;
       } else if (formData.login === 'admin' && formData.password === 'admin') {
           navigate('/admin');
           return;
       } else {
           navigate('/')
       }
    }

    return(
        <Auxiliary>
            <section className="u-align-center u-clearfix u-gradient u-section-1" id="sec-ea6c">
                <div className="u-clearfix u-sheet u-sheet-1 login-container">

                    <div className="u-form u-form-1">
                        <form className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                              style={{padding: "15px"}} name="form">
                            <h2 className="u-align-center u-text u-text-default u-text-1 margin-horizontally-auto" style={{marginBottom: "20px"}}>Login</h2>
                            <div className="u-form-group u-form-name u-label-none u-form-group-1">
                                <label htmlFor="name-6797" className="u-label">Login</label>
                                <input type="text" placeholder="Login" id="name-6797" name="login"
                                       onChange={onLoginInput}
                                       className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required="" />
                            </div>
                            <div className="u-form-email u-form-group u-label-none u-form-group-2">
                                <label htmlFor="email-6797" className="u-label">Password</label>
                                <input type="Password" placeholder="Password" id="email-6797" name="password"
                                       onChange={onPasswordInput}
                                       className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required="" />
                            </div>

                            <div className="u-align-left u-form-group u-form-submit u-form-group-4">
                                <span onClick={navigateTo} className="u-btn u-btn-submit u-button-style">Login</span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Auxiliary>
    )
}

export default Login;