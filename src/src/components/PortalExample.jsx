import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.jsx';

export default function PortalExample() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div onClick={() => setShowModal(true)}>
                <div className="projectCard">
                    <img className="projectImage" src="RIOT Logo.png" alt="Placeholder"></img>
                    <div className="desc">
                        <p>Project Name</p>
                        <h5>2022 - </h5>
                    </div>
                </div>
            </div>
            {showModal && createPortal(<ModalContent onClose={() => setShowModal(false)} />, document.body)}
        </>
    );
}
