import {useEffect, useState} from 'react';
import { fetchBattlebots } from '../../db/db';
import CloseButton from '../closeButton/CloseButton';
import BattlebotCard from '../battlebotCard/battlebotCard';

export default function BattlebotsSeasonPopUp({ semester, onClose, isOpen, onTogglePopup }) {
    const [battlebots, setBattlebots] = useState(null);
    const [showPopup, setShowPopup] = useState(isOpen);

    useEffect(() => {
        const fetchBattlebotsData = async () => {
            const battlebots = await fetchBattlebots();
            setBattlebots(battlebots);
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
        const handleClickOutsidePopup = (event) => {
            if (showPopup && event.target.closest('.popup') === null) {
                handlePopupClose();
            }
        };

        document.addEventListener('click', handleClickOutsidePopup);

        return () => {
            document.removeEventListener('click', handleClickOutsidePopup);
        };
    }, [showPopup]);

    const handleCardClick = () => {
        onTogglePopup(semester);
    };

    const prevBattlebots = battlebots && battlebots.filter((battlebot) => battlebot.semester == semester);

    return (
        <center>
            <div className="popup" onClick={handleCardClick}>
                <CloseButton onClose={onClose} />
                <div className="desc">
                    <h1>{semester}</h1>
                    <div className="battlebotCardContainer">
                        {prevBattlebots && (
                            prevBattlebots.map((battlebot) => (
                                <BattlebotCard
                                    key={battlebot.id}
                                    battlebot={battlebot}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </center>
    );
}
