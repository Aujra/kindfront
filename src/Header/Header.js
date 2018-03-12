import React, { Component } from 'react';
import TopMenu from './TopMenu.js';

class Header extends Component
{
    render() {
        return (
            <div id="top_container">
                <TopMenu />
            </div>
        );
    }
}
export default Header;