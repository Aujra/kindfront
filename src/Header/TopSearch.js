import React, { Component } from 'react';

class TopSearch extends Component
{
    constructor(props) {
        super(props);
        this.state = {searchterm: '', searchresults: ''};

        this.doSearch = this.doSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }
    clearSearch(event)
    {
        this.setState({ searchresults: "" });
    }
    doSearch(event) {
        this.setState({searchterm: event.target.value});
        if (event.target.value.length <= 2) {
            this.setState({ searchresults: "" });
            return;
        }
        var data = require('../data/products.json'); // forward slashes will depend on the file location
        var prods = [];

        for(var i = 0; i < data.length; i++) {
            var obj = data[i];
            prods.push(obj)
        }
        this.setState({ searchresults: this.parseResults(prods, event.target.value) });
    }

    parseResults(prods, term)
    {
        var nameresults =  [];
        var descresults =  [];
        for (let item of prods) {
            // alert(item['name'] + " ||| " + term +"|||"+ term.indexOf(item['name']));
            if (item['name'].includes(term))
            {
                nameresults.push(item);
            }
            if (item['description'].includes(term)) {
                descresults.push(item);
            }
        }
        var finalresults = nameresults.concat(descresults);
        var filteredArray = finalresults.filter(function(item, pos){
            return finalresults.indexOf(item)== pos;
        });
        var html = "<div style='position:absolute; right:0px; background:white; max-height:350px; overflow:auto; width:100%'>";
        for (let item of filteredArray) {
            html += '<div style="display:inline-block; padding:10px; text-align:center;" className="product_item_wrapper"> \
            <img style="width:50px; height:50px;" src="'+item["picture"]+'" />\
            \ <div className="clearfix"></div> \
            <span>'+item['name']+'\
            <div clasName="clearfix"></div>\
            <span>'+item['price']+'\
            </div>';
        }
        html += "</ul>";

        return html;
    }

render() {
        return (
            <div className="top_search" id="search">
                <input placeholder="Search here..." onBlur={this.clearSearch} onFocus={this.doSearch} className="menu_search_bar" type="text" value={this.state.searchterm} onChange={this.doSearch} />
                <div dangerouslySetInnerHTML={{__html: this.state.searchresults}} />
            </div>
        );
    }
}
export default TopSearch;