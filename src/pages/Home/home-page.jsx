import React, { useEffect, useState } from 'react';
import Scriptures from '../../vendor/scripture.api.bible';
import { KJV } from '../../bible/books';
import Book from '../../components/Bible/book';
import './home-page.css';
import OpenBookBuffering from '../../components/Buffer/open-book';

const Home = (props) => {
    const [bibleBooks, set_bibleBooks] = useState({ isLoading: true, data: [] });

    const fetchedData = async () => {
        try {
            const { data, error } = await Scriptures(`v1/bibles/${KJV}/books`);
            set_bibleBooks({ isLoading: false, data, error });
        } catch(error) {
            set_bibleBooks({ isLoading: false, error });
        }
    } 

    useEffect(() => {
        fetchedData();
    }, []);
    console.log(bibleBooks);
    return bibleBooks.isLoading ? <OpenBookBuffering bufferMessage='Getting list of Books...' /> : ( 
        <section className="home">
            <h1>Scriptures</h1>

            <div className="scriptures">
                {
                    bibleBooks.error.isError ? 
                    <span>{bibleBooks.error.message}</span> :
                    bibleBooks.data.map(book => <Book key={book.id} info={book} />)
                }
            </div>
        </section>
    );
}
 
export default Home;