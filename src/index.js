import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header.js';
import ProductList from "./ProductList/ProductList";
import Product from "./Product/Product";

function App() {
    return (
        <div>
            <Header id="header" className="header">
            </Header>
            <ProductList/>
            <Product />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);