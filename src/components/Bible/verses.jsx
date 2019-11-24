import React, { useState, useEffect } from 'react';
import Scriptures from '../../vendor/scripture.api.bible';
//import './verses.css';
import Verse from './verse-context';

const BibleVerses = ({ bibleId, chapterId }) => {
    const [verses, set_verses] = useState([]);

    const fetchedVerses = async () => {
        try {
            const { data, error } = await Scriptures(`v1/bibles/${bibleId}/chapters/${chapterId}/verses`);
            
            if(chapterId !== null)
                set_verses(data);
        } catch (error) {
            //set_verses([]);
        }
    }

    useEffect(() => {
        fetchedVerses();
    }, []);
    console.log('verses', verses);
    return ( 
        <div className="bible-verses">
            {
                verses.map(verse => <Verse key={verse.id} detail={verse} />)
            }
        </div>
    );
}
 
export default BibleVerses;