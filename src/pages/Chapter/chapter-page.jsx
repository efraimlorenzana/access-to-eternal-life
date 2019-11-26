import React, { useState, useEffect, Fragment } from 'react';
import { useQuery } from '../../Custom/hooks';
import Scriptures from '../../vendor/scripture.api.bible';
import { Link } from 'react-router-dom';
import './chapter-page.css';
import OpenBookBuffering from '../../components/Buffer/open-book';
import Verses from '../../components/Bible/verses';

const Chapter = () => {
    let queryString = useQuery();

    const [bookChapter, set_bookChapter] = useState({ isLoading: true, data: [] });

    const bibleId = queryString.get('bibleId');
    const bookId = queryString.get('bookId');

    const fetchedChapters = async () => {
        try {
            const { data, error } = await Scriptures(`v1/bibles/${bibleId}/books/${bookId}/chapters`);

            set_bookChapter({ isLoading: false, data, error });
        } catch (error) {
            set_bookChapter({ isLoading: false, error });
        }
    }

    useEffect(() => {
        fetchedChapters();
    }, []);

    console.log('bookChapter', bookChapter);

    const ChapterElement = ({ books }) =>  (
        <Fragment>
            <h2>{bookChapter.data[0].reference}</h2>
            
            <div className="chapter__content">
                <ul className="chapter__content--list">
                    {
                        books.map((book, i) => i !== 0 ? <li key={i}><Link key={book.id} to={`/access-to-eternal-life/chapter?bibleId=${bibleId}&bookId=${bookId}&read=${book.id}`}>Chapter {book.number}</Link></li> : null)
                    }
                </ul>

                <div className="chapter__content--data">
                    <Verses bibleId={bibleId} chapterId={queryString.get('read')} />
                </div>
            </div>
        </Fragment>
    );

    return bookChapter.isLoading ? <OpenBookBuffering bufferMessage="Loading Chapters..." /> : ( 
        <div className="chapter">
            {
                bookChapter.error.isError ?
                <div>{bookChapter.error.message}</div> :
                <ChapterElement books={bookChapter.data} />
            }
        </div>
    );
}
 
export default Chapter;