import { useEffect, useState } from 'react';
import { fetchBattlebots } from '../../utils/fetchBattlebots';
import CloseButton from '../closeButton/CloseButton';
import BattlebotCard from '../battlebotCard/battlebotCard';

import './battlebotsSeasonPopUp.css';

export default function BattlebotsSeasonPopUp({ currSemester, onClose, isOpen, onTogglePopup }) {
    const [battlebots, setBattlebots] = useState(null);
    const [showPopup, setShowPopup] = useState(isOpen);
    const [prevBattlebots, setPrevBattlebots] = useState([]);

    useEffect(() => {
        const fetchBattlebotsData = async () => {
            const battlebotsData = await fetchBattlebots();
            setBattlebots(battlebotsData);
        };
        fetchBattlebotsData();
    }, []);

    useEffect(() => {
        setShowPopup(isOpen);
    }, [isOpen]);

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        if (battlebots && currSemester) {
            const prevBattlebots = battlebots.filter((battlebot) => battlebot.semester.includes(currSemester));
            setPrevBattlebots(prevBattlebots);
        }
    }, [battlebots, currSemester]);

    const handleCardClick = (event) => {
        // Prevent event propagation to parent elements
        event.stopPropagation();
    };

    return (
        <div className="popup" onClick={handleCardClick}>
            <CloseButton onClose={onClose} />
            <center>
                <div className="desc">
                    <h1>{currSemester}</h1>
                    <div className="battlebotCardContainer" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        {prevBattlebots &&
                            prevBattlebots.map((battlebot) => (
                                <BattlebotCard key={battlebot.id} battlebot={battlebot} />
                            ))}
                    </div>
                </div>
            </center>
        </div>
    );
}
