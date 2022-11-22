import {Component} from "react";
import {NavLink} from 'react-router-dom';
import Auxiliary from "../hoc/Auxiliary";
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <Auxiliary>
                <header className="u-clearfix u-gradient u-header u-header" id="sec-e8da">
                    <div className="u-clearfix u-sheet u-sheet-1 width-limit-laptop">
                        <nav className="u-menu u-menu-one-level u-offcanvas u-menu-1">
                            <div className="u-custom-menu u-nav-container">
                                <ul className="u-nav u-unstyled u-nav-1">
                                    <li className="u-nav-item u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-1">
                                        <NavLink
                                            className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                            to="/" rel="nofollow" style={{padding: "10px 20px"}}>Logout</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </Auxiliary>
        )
    }
}