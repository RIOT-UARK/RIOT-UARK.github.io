const BoardMemberCard = ({ boardMember }) => {
    if (boardMember.active === true) {
        return (
            <div className="boardMemberCard">
                <img
                    class="boardMemberPortrait"
                    src={boardMember.image_url}
                    alt={(boardMember.firstName, boardMember.lastName)}
                />
                <h3>{boardMember.firstName} {boardMember.lastName}</h3>
                <div className="boardMemberTitleContainer">
                    <h4 className="boardMemberTitle">{boardMember.externalTitle}</h4>
                </div>
            </div>
        );
    }
};
export default BoardMemberCard;
