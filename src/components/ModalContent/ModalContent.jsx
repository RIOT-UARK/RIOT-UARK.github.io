export default function ModalContent({ project, onClose }) {
    return (
        <div className="modal">
            <img src="Projects/Squirtle.jpg" alt="Squirtle" />
            <p>Desc</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}
