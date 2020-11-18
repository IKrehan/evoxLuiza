import React from 'react';

import './UptoButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

const UpToButton = () => {
    
    window.addEventListener('scroll', (e) => {
        scrollFunction(e)
    })

    const scrollFunction = (e) => {
        const upButton = document.getElementById("upButton")

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            upButton.style.display = "block";
        } else {
            upButton.style.display = "none";
        }
    }

    const topFunction = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }


    return (
        <div className='btn-box upTo hvr-grow'>
            <FontAwesomeIcon cursor='pointer' onClick={topFunction} id='upButton' icon={faArrowCircleUp} />
        </div>
    );
}

export default UpToButton;