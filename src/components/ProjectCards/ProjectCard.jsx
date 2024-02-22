import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from '../ModalContent/ModalContent';

export default function ProjectCard({ project }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div onClick={() => setShowModal(true)}>
                <div className="projectCard">
                    <img className="projectImage" src={project.image_url} alt="Placeholder" width="300" height="200" />
                    <div className="desc">
                        <p>{project.name}</p>
                        <h5>{project.yearStarted} - </h5>
                    </div>
                </div>
            </div>
            {showModal && createPortal(<ModalContent onClose={() => setShowModal(false)} />, document.body)}
        </>
    );
}
