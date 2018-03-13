import React, { Component } from 'react';
import './topmenu.css';

class TopMenu extends Component
{
    constructor() {
        super();
        this.state = {
            logo: "",
            menuLinks: ""
        };
    }

    buildMenu()
    {
        var links = [];
        links.push(
            {
                "text": "shop",
                "url": "/shop/"
            }
        );
        links.push(
            {
                "text": "about us",
                "url": "/about-us/"
            }
        );
        links.push(
            {
                "text": "our mission",
                "url": "/our-mission/"
            }
        );
        this.state = {
            logo: "https://www.kindsnacks.com/skin/frontend/kind/enterprise/images/kind-logo-white.svg",
            menuLinks: this.parseMenu(links)
        };

    }

    parseMenu(menuData)
    {
        var ret = "";
        for (let item of menuData) {
            ret += "<div class='menu_link'><a href='" + item['url'] + "'>" + item['text'] + "</a></div>";
        }
        return ret;
    }

    componentWillMount() {
        this.buildMenu();
    }

    render() {
        return (
           <div className="top_menu_container">
               <div className="menu_image_container">
               <img src={this.state.logo} />
               </div>
               <div className="top_menu_links" dangerouslySetInnerHTML={{__html: this.state.menuLinks}}>
               </div>
               <div className="utility_links">
                   <div onClick={this.toggleSearch} className="search_button utility_link" />
                   <div className="cart_menu_button utility_link" />
                   <div className="side_menu_button utility_link" />
               </div>
           </div>
        );
    }
}
export default TopMenu;