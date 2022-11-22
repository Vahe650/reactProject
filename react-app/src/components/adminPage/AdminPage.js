import {Component} from "react";
import axios from "axios";
import Auxiliary from "../hoc/Auxiliary";
import ProductItem from "../productItem/ProductItem";
import {NavLink} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import './adminPage.css';

export default class AdminPage extends Component {
    state = {productList: []};
    findedProductList = [];
    async componentDidMount() {
        try {
            const response = await axios.get(' http://localhost:3000/products');
            this.setState({productList: response.data})
            this.findedProductList = response.data;
        } catch (e) {
            console.log(e)
        }
    };

    changeState = (newState) => {
        this.setState({productList: newState})
    }

    search = (productName) => {
        let find = []
        this.findedProductList.map(item => {
            if (item?.name?.toLowerCase().includes(productName.toLowerCase())) {
                find.push(item)
            }
            return find
        });
        find.length ? this.setState({productList: find}) : this.setState({productList: this.findedProductList});
    }

    render() {
        return (
            <Auxiliary>
                <Navbar></Navbar>
                <section className="u-clearfix u-gradient admin-section" id="sec-0352">
                    <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                        <h2 className="u-align-center u-text u-text-default u-text-1">ADMIN PAGE</h2>
                    </div>
                </section>
                <section className="u-clearfix u-gradient u-section-2" id="sec-0d84">
                    <div className="u-clearfix u-sheet u-sheet-1 width-limit-laptop">
                        <NavLink to="add" className="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-1">Add Product</NavLink>
                        <input onInput={(event) => this.search(event.target.value)} className="u-search-input" type="search" name="search" placeholder="Search"/>
                        <div className="u-expanded-width u-list u-list-1">
                            <div className="u-repeater u-repeater-grid">
                                {this.state.productList.map(item => {
                                    return (<ProductItem changeState={this.changeState} productItem={item} key={item.id}/>)
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </Auxiliary>
        )
    }
}