const leaderCard = ({ member }) => {
    if (member.position !== 'member' && member.position !== 'alumni') {
        let positionId = member.position.replace(/ /g, ''); //Remove spaces
        let imagePath =
            'Portraits/' + member.first_name + ' ' + member.last_name + '.jpg';
        //const [imagePath, setImgSrc] = useState("Invalid Image Source");

        return (
            <div className="leaderCard" id={positionId}>
                <div className="leaderCardInfo">
                    <img src={imagePath} alt="" className="leaderPortrait" />
                    <h3>
                        {member.first_name} {member.last_name}
                    </h3>
                    <h4>{member.email}</h4>
                    <p className="cardTitle">{member.position}</p>
                </div>
                <div className="leaderCardDesc">
                    <p className="leaderDesc">{member.desc}</p>
                </div>
            </div>
        );
    }
};

export default leaderCard;
