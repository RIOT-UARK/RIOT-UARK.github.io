import CloseButton from "../closeButton/CloseButton";

export default function ModalContent({ project, onClose }) {
    const handleModalClick = (event) => {
        // Prevent event propagation to parent elements
        event.stopPropagation();
    };

    return (
        <div className="modal" onClick={handleModalClick}>
            <CloseButton onClose={onClose} />
            <center>
                <img className="projectImage" src={project.image_url} alt="Placeholder" width="300" height="200" />
            </center>
            <div className="desc">
                <p>{project.name}</p>
                <p>{project.projectDesc}</p>
            </div>
        </div>
    );
}
