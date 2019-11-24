import React, { useState, useEffect } from 'react';
import './verse-context.css';
import Scriptures from '../../vendor/scripture.api.bible';
import OpenBookBuffering from '../../components/Buffer/open-book';

const VerseContext = ({ detail }) => {
    const [verse, set_verse] = useState({ isLoading: true, context: null });
    const fetchedVerse = async () => {
        try {
            const { data, error } = await Scriptures(`v1/bibles/${detail.bibleId}/verses/${detail.id}`);
            
            set_verse({ isLoading: false, context: data, error });
        } catch (error) {
            set_verse({ isLoading: false, context: null, error });
        }
    }

    useEffect(() => {
        fetchedVerse();
    }, []);

    const strToDOM = (text) => {
        return new DOMParser().parseFromString(text, 'text/xml');
    }

    return verse.isLoading ? <OpenBookBuffering bufferMessage={`Populating ${detail.reference}`} /> : ( 
        <div className="verse-context">
            <div>
                <em><strong>{detail.reference}</strong></em>
                <p dangerouslySetInnerHTML={{__html: verse.context.content}}></p>
            </div>
        </div>
    );
}
 
export default VerseContext;