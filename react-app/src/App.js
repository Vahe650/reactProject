import './App.css';
import {Component} from "react";
// import Navbar from "./components/navbar/Navbar";
import AdminPage from "./components/adminPage/AdminPage";
import {Route, Routes} from 'react-router-dom';
import Product from "./components/product/Product";
import ProductView from "./components/productView/ProductView";
import AddProduct from "./components/addProduct/AddProduct";
import Login from "./components/login/Login";


export default class App extends Component {
    render() {
        return (
            <div className="App" style={{height: "100vh", display: "grid"}}>
                {/*<Navbar/>*/}
                <Routes>
                    <Route path="/" element={<Login/>} exact />
                    <Route path="/product" element={<Product/>} exact />
                    <Route path="/admin" element={<AdminPage/>} exact />
                    <Route path="/product/:id" element={<ProductView/>} exact />
                    <Route path="/admin/add" element={<AddProduct/>} exact />
                </Routes>
            </div>
        );
    }
};
