import React, { Component } from 'react';

class ProductList extends Component
{
    constructor() {
        super();
        this.state = {
            productsHtml: this.buildList()
        };
    }

    componentWillMount()
    {
        this.setState = {
            productsHtml: this.buildList()
        }
    }

    buildList()
    {
        var data = require('../data/products.json'); // forward slashes will depend on the file location
        var prods = [];

        for(var i = 0; i < data.length; i++) {
            var obj = data[i];
            prods.push(obj)
        }
        var html = "";
        for (let item of prods) {
            html += '<div className="product_item_wrapper"> \
            <img src="'+item["picture"]+'" />\
            <span>'+item['name']+'\
            <span>'+item['price']+'\
            </div>';
        }
        return html;
    }

    render() {
        return (
          <div dangerouslySetInnerHTML={{__html: this.state.productsHtml}} />
        );
    }
}
export default ProductList;