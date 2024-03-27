import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from '../ModalContent/ModalContent';

export default function ProjectCard({ project, isOpen, onToggleModal }) {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleToggleModal = () => {
        setShowModal(!showModal);
        onToggleModal(project.id);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const handleClickOutsideModal = (event) => {
            if (showModal && event.target.closest('.modal') === null) {
                handleModalClose();
            }
        };

        document.addEventListener('click', handleClickOutsideModal);

        return () => {
            document.removeEventListener('click', handleClickOutsideModal);
        };
    }, [showModal]);

    const handleCardClick = () => {
        onToggleModal(project.id);
    };

    return (
        <div onClick={handleCardClick}>
            <div className="projectCard">
                <img className="projectImage" src={project.image_url} alt="Placeholder" width="300" height="200" />
                <div className="desc">
                    <p>{project.name}</p>
                    <h5>
                        {project.yearStarted} - {project.yearFinished !== -1 && project.yearFinished}
                    </h5>
                </div>
            </div>
            {showModal && createPortal(<ModalContent project={project} onClose={handleModalClose} />, document.body)}
        </div>
    );
}
