import React, { useState } from 'react';
import './logoSpin.css';

const LogoSpin = () => {
    const [rotationAngle, setRotationAngle] = useState(0);

    const rotateImage = () => {
        setRotationAngle(rotationAngle + 720);
    };

    return (
        <div>
            <img
                id="RIOTlogo"
                src="RIOT Logo Transparent.png"
                height="200"
                alt="RIOT Logo"
                style={{ transform: `rotate(${rotationAngle}deg)` }}
                onClick={rotateImage}
            />
        </div>
    );
};

export default LogoSpin;
