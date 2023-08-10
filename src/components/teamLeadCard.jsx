const teamLeadCard = ({ member }) => {
    if (member.team_lead !== 'none') {
        return (
            <div className="teamLeadCard">
                <h3>
                    {member.first_name} {member.last_name}
                </h3>
                <h4>{member.email}</h4>
                <p className="cardTitle">{member.team_lead} Lead</p>
            </div>
        );
    }
};

export default teamLeadCard;
