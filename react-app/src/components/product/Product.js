import ProductItem from "../productItem/ProductItem";
import axios from "axios";
import React, {Component} from "react";
import Auxiliary from "../hoc/Auxiliary";
import './Product.css'
import Navbar from "../navbar/Navbar";

export default class Product extends Component {
    state = {productList: []};
    sortByAsk = true;
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

    getProductList = () => {
        axios.get('http://localhost:3000/products').then(response => {
                this.setState({productList: response.data})
            }
        )
    }

    sortData = (type) => {
        let sortedData = [];
        if (type) {
            sortedData = this.state.productList.sort((a, b) => (+a.price > +b.price) ? -1 : 1)
        } else {
            sortedData = this.state.productList.sort((a, b) => (+a.price > +b.price) ? 1 : -1)
        }
        this.sortByAsk = !this.sortByAsk;
        this.setState({productList: sortedData});
    }

    search = (productName) => {
        /* let find = this.state.productList.find(item => item.name === productName);
         find ? this.setState({productList: [find]}) : this.getProductList();*/
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
                <section className="u-clearfix u-palette-2-light-2 u-section-1 product-list-container-bg" id="sec-1741">
                    <div className="u-clearfix u-valign-middle product-list-container">
                        <h2 className="u-align-center u-text u-text-default u-text-1">Product List</h2>
                    </div>
                </section>

                <section className="u-clearfix u-gradient u-section-2" id="sec-ff85">
                    <div className="u-clearfix u-sheet u-sheet-1 width-limit-laptop">
                        <button onClick={this.sortData.bind(this, this.sortByAsk)}
                                className="u-border-none u-btn u-btn-round u-button-style u-palette-2-light-1 u-radius-3 u-text-body-alt-color u-text-hover-white u-btn-1">
                            Sort by {this.sortByAsk ? 'ASC' : 'DESC'}
                        </button>

                        <input onInput={(event) => this.search(event.target.value)} className="u-search-input"
                               type="search" name="search" placeholder="Search"/>


                        <div className="u-expanded-width u-list u-list-1">
                            <div className="u-repeater u-repeater-grid">
                                {this.state.productList.map(item => {
                                    return (
                                        <ProductItem changeState={this.changeState} productItem={item} key={item.id}/>)
                                })}
                            </div>
                        </div>

                    </div>
                </section>
            </Auxiliary>

        )
    }
}
