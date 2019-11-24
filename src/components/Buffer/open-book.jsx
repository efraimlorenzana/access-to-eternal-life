import React from 'react';
import IndicatorLogo from './open-book.gif';
import './open-book.css';

const OpenBook = ({ bufferMessage }) => {
    return ( 
        <div className="open-book-buffering">
            <div className="buffer-indicator">
                <div className="buffer-message">{bufferMessage}</div>
                <img src={IndicatorLogo} alt="Loading..."/>
            </div>
        </div>
    );
}
 
export default OpenBook;