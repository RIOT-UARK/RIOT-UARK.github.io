import CloseButton from '../closeButton/CloseButton';

export default function battlebotsSeasonPopUp({ season, onClose }) {
    const handlePopUpClick = (event) => {
        // Prevent event propagation to parent elements
        event.stopPropagation();
    };

    return (
        <center>
            <div className="modal" onClick={handlePopUpClick}>
                <CloseButton onClose={onClose} />
                <div className="desc">
                    <p></p>
                </div>
            </div>
        </center>
    );
}
