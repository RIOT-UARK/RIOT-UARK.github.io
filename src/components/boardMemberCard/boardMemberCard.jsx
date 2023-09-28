const BoardMemberCard = ({ boardMember }) => {
    if (boardMember.active === true) {
        return (
            <div className="boardMemberCard">
                <img
                    class="boardMemberPortrait"
                    src={boardMember.image_url}
                    alt={(boardMember.firstName, boardMember.lastName)}
                />
                <h3>
                    {boardMember.firstName} {boardMember.lastName}
                </h3>
                <h4>{boardMember.phoneNumber}</h4>
                <h4>{boardMember.email}</h4>
            </div>
        );
    }
};
export default BoardMemberCard;
