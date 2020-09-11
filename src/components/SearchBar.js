import React, { Component } from 'react';
import './SearchBar.css';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


export default class SearchBar extends Component {
    render() {
        return (
            <div className="search">
                <div className="searchBar">
                    <InputGroup size="lg">
                        <FormControl className="searchInput" placeholder="Try Guardian" aria-label="Large" aria-describedby="searchBar" />
                    </InputGroup>
                </div>
            </div>
            
        );
    }
}