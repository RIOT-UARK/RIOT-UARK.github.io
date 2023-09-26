import { useEffect, useState } from 'react';
import { FaUser, FaUserAstronaut } from 'react-icons/fa';

const LeaderCard = ({ member }) => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
    if (member.position !== 'member' && member.position !== 'alumni') {
        let positionId = member.position.replace(/ /g, '');
        let imagePath = member.image_url;

        return (
            <div className="leaderCard" id={positionId}>
                <div className="leaderCardInfo">
                    <div className="leaderPortraitContainer">
                        {imagePath ? (
                            <img src={imagePath} alt="" className="leaderPortrait" />
                        ) : darkMode ? (
                            <FaUserAstronaut width={260} height={300} color={'#1c3d6e'} />
                        ) : (
                            <FaUser size={250} color={'#1c3d6e'} />
                        )}
                    </div>
                    <h3>
                        {member.first_name} {member.last_name}
                    </h3>
                    <h4>{member.email}</h4>
                    <p className="cardTitle">{member.position ? member.position : null}</p>
                </div>
                <div className="leaderCardDesc">
                    <p className="leaderDesc">{member.desc ? member.desc : null}</p>
                </div>
            </div>
        );
    }
};

export default LeaderCard;
