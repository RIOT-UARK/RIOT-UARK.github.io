const memberCard = ({ member }) => {
    if (member.position === 'member' && member.team_lead === 'none') {
        return (
            <div className="memberCard">
                <h3>
                    {member.first_name} {member.last_name}
                </h3>
                <h4>{member.email}</h4>
            </div>
        );
    }
};

export default memberCard;
