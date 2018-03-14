import React, { Component } from 'react';
import Product from './../Product/Product';

class ProductList extends Component
{
    constructor() {
        super();
        this.changeProduct= this.changeProduct.bind(this);
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

    changeProduct(event)
    {
        alert(event.target.ref);
        Product.setState({productId: event.target.ref});
    }


    buildList()
    {
        var data = require('../data/products.json'); // forward slashes will depend on the file location
        var prods = [];

        for(var i = 0; i < data.length; i++) {
            var obj = data[i];
            prods.push(obj)
        }
        var html = "<div style='margin-top:40px; max-height:500px; overflow:auto;'>";
        for (let item of prods) {
            html += '<div ref="'+item["_id"]+'" style="display:inline-block; padding:5px; text-align:center;" className="product_item_wrapper"> \
            <img src="'+item["picture"]+'" />\
            \ <div className="clearfix"></div> \
            <span>'+item['name']+'\
            <div clasName="clearfix"></div>\
            <span>'+item['price']+'\
            </div>';
        }
        html += "</div>";
        return html;
    }

    render() {
        return (
          <div dangerouslySetInnerHTML={{__html: this.state.productsHtml}} />
        );
    }
}
export default ProductList;