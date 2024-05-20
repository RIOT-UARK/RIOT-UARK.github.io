import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import BattlebotsSeasonPopUp from '../battlebotsPopUp/battlebotsSeasonPopUp';

import './battlebotSeasonCard.css';
const BattlebotSeasonCard = ({ semester, isOpen, onTogglePopup }) => {
    const [showPopup, setShowPopup] = useState(isOpen);

    useEffect(() => {
        setShowPopup(isOpen);
    }, [isOpen]);

    const handleTogglePopup = () => {
        setShowPopup(!showPopup);
        onTogglePopup(semester);
    };

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

    return (
        <div onClick={handleCardClick}>
            <div className="battlebotSeasonCard">
                <h3>{semester}</h3>
            </div>
            {showPopup &&
                createPortal(
                    <BattlebotsSeasonPopUp
                        currSemester={semester}
                        onClose={handlePopupClose}
                        onTogglePopup={handleTogglePopup}
                    />,
                    document.body
                )}
        </div>
    );
};

export default BattlebotSeasonCard;
