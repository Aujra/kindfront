import React, { Component } from 'react';

class TopSearch extends Component
{
    constructor(props) {
        super(props);
        this.state = {searchterm: '', searchresults: ''};

        this.doSearch = this.doSearch.bind(this);
    }
    doSearch(event) {
        this.setState({searchterm: event.target.value});
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
        var results =  [];
        for (let item of prods) {
            // alert(item['name'] + " ||| " + term +"|||"+ term.indexOf(item['name']));
            if (item['name'].includes(term) || item['description'].includes(term))
            {
                results.push(item);
            }
        }
        var html = "<ul>";
        for (let res of results) {
            html += "<li>"+res['name']+"</li>";
        }
        html += "</ul>";

        return html;
    }

render() {
        return (
            <div className="top_search" id="search">
                <input type="text" value={this.state.searchterm} onChange={this.doSearch} />
                <div dangerouslySetInnerHTML={{__html: this.state.searchresults}} />
            </div>
        );
    }
}
export default TopSearch;