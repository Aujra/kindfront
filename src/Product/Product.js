import React, { Component } from 'react';

class Product extends Component
{
    constructor() {
        super();
        this.state = {
            productId: "5aa742bda22e69dade0f6f5e",
            productHtml: ""
        };
    }

    componentWillMount()
    {
        this.setState = {
            productHtml: this.buildProduct()
        }
    }

    buildProduct()
    {
        var data = require('../data/products.json'); // forward slashes will depend on the file location
        var prods = [];
        var prod;

        for(var i = 0; i < data.length; i++) {
            var obj = data[i];
            prods.push(obj)
        }
        for (let item of prods) {
            // alert(item['name'] + " ||| " + term +"|||"+ term.indexOf(item['name']));
            if (item['_id'] == this.state.productId) {
                prod = item;
                break;
            }
        }
        var html = "<div style='margin-top: 10px;'> \
            <img src='"+prod['picture']+"' style='width:350px; display:inline-block; float:left; padding:10px;'> \
            <h1 style='display:inline-block'>"+prod['name']+"</h1> \
            <div className='clearfix' /> \
            <span>"+prod['price']+" \
            <div className='clearfix' /> \
            <span style='display:inline-block; width:400px'>"+prod['description']+"</span> \
            </div>";
        return html;
    }

    render() {
        return (
            <div className="product" dangerouslySetInnerHTML={{__html: this.buildProduct()}} />
        );
    }
}
export default Product;