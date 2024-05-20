import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from '../ModalContent/ModalContent';

import './battlebotNextSeasonCard.css';

const BattlebotNextSeasonCard = ({ nextTime }) => {
    for (let i = 0; i <= nextTime.length; i++) {
        return (
            <div className="battlebotNextSeasonCardContainer">
                <div className="battlebotNextSeasonCard">
                    <div className="container">
                        <h3>{nextTime[i]}</h3>
                    </div>
                </div>
            </div>
        );
    }
};

export default BattlebotNextSeasonCard;
