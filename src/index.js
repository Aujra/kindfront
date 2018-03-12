import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header.js';
function App() {
    return (
        <div>
            <Header id="header" className="header">
            </Header>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);