import React, { Component } from 'react';

class TopSearch extends Component
{
    render() {
        return (
            <div className="top_search" id="search">
                <input className="menu_search_bar" placeholder="Search..." type="text" />
            </div>
        );
    }
}
export default TopSearch;