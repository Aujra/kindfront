import React, { Component } from 'react';
import TopMenu from './TopMenu.js';
import TopSearch from "./TopSearch";

class Header extends Component
{
    render() {
        return (
            <div id="top_container">
                <TopMenu />
                <TopSearch />
            </div>
        );
    }
}
export default Header;