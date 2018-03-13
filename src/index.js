import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header.js';
import ProductList from "./ProductList/ProductList";
function App() {
    return (
        <div>
            <Header id="header" className="header">
            </Header>
            <ProductList/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);