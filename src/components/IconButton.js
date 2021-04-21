import { Icon } from '@material-ui/core';
import React from 'react';
import './IconButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function IconButton(props) {
    return (
        <div className="icon-button-container" onClick={props.onClick}>
            <FontAwesomeIcon icon={faChevronLeft} className="icon-button-icon"/>
        </div>
    );
}

export default IconButton;