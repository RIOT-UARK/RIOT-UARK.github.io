import {useEffect, useState} from 'react';
import { fetchBattlebots } from '../../db/db';
import CloseButton from '../closeButton/CloseButton';

export default function BattlebotsSeasonPopUp({ semester, onClose }) {
    //const [battlebots, setBattlebots] = useState(null);

    /*useEffect(() => {
        const fetchBattlebotsData = async () => {
            const battlebots = await fetchBattlebots();
            setBattlebots(battlebots);
        };
        fetchBattlebotsData();
    }, []);*/
    
    const handlePopUpClick = (event) => {
        // Prevent event propagation to parent elements
        event.stopPropagation();
    };

    return (
        <center>
            <div className="modal" onClick={handlePopUpClick}>
                <CloseButton onClose={onClose} />
                <div className="desc">
                    <h1>{semester}</h1>
                    <p>Sample text</p>
                </div>
            </div>
        </center>
    );
}
