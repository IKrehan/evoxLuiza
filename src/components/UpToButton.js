import React, { Component } from 'react';

import './UptoButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

export default class UpToButton extends Component {
    constructor(props) {
        super();

        window.addEventListener('scroll', (e) => {
            this.scrollFunction(e)
        })
    }

    scrollFunction = (e) => {
        const upButton = document.getElementById("upButton")

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            upButton.style.display = "block";
        } else {
            upButton.style.display = "none";
        }
    }

    topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }


    render() {
        return (
            <div className='btn-box upTo hvr-grow'>
                <FontAwesomeIcon cursor='pointer' onClick={this.topFunction} id='upButton' icon={faArrowCircleUp} />
            </div>
        );
    }
}
