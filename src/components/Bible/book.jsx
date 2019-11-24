import React from 'react';
import './book.css';
import { Link } from 'react-router-dom';

const Book = ({ info }) => {
    
    return ( 
        <div className="bible__books">
            <h4>{info.name}</h4>
            <p>
                {info.nameLong}
            </p>
            <Link to={`/chapter?bibleId=${info.bibleId}&bookId=${info.id}`} >Read</Link>
        </div>
    );
}
 
export default Book;