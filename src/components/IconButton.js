import { Icon } from '@material-ui/core';
import React from 'react';
import './IconButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function IconButton(props) {
    return (
        <div className="icon-button-container">
            <FontAwesomeIcon icon={faChevronLeft} className="icon-button-icon"/>
        </div>
    );
}

export default IconButton;