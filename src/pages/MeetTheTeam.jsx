import { useEffect, useState } from 'react';
import { fetchMembers } from '../utils/fetchMembers';
import { fetchBoardMembers} from '../utils/fetchBoardMembers'
import LoadingAnimation from '../components/loadingAnimation/loadingAnimation';
import LeaderCard from '../components/leaderCard/leaderCard';
import TeamLeadCard from '../components/teamLeadCard/teamLeadCard';
import MemberCard from '../components/memberCard/memberCard';
import BoardMemberCard from '../components/boardMemberCard/boardMemberCard';


const MeetTheTeam = () => {
    const [members, setMembers] = useState(null);
    const [boardMembers, setBoardMembers] = useState(null);

    useEffect(() => {
        (async () => {
                    const members = await fetchMembers();
                    setMembers(members);
                    const bmembers = await fetchBoardMembers();
                    setBoardMembers(bmembers);
        })()
    }, []);

    return (
        <div className="page MeetTheTeam">
            <div className='textBlurb'>
                <h1>Meet The Board</h1>
            </div>
            <div id="boardMemberContainer">
                {boardMembers ? (
                    <div className="boardMemberCardContainer">
                        {boardMembers.map((boardMember) => (
                            <BoardMemberCard boardMember={boardMember} />
                        ))}
                    </div>
                ) : (<LoadingAnimation />)}
            </div>
            <div className="textBlurb">
                <h1>Meet the Team</h1>
                <p>
                    RIOT is made up of students who founded the registered student organization-turned-nonprofit in 2022. The
                    founder, Benjamin Burdess, started the club in the spring 2022 semester to begin working
                    towards a vision of starting a premier robotics club for the University of Arkansas. With Nathaniel
                    House as his founding Vice President and Thalia Frankhouse as RIOT's founding Treasurer, they built
                    the small, single robot driven club to what it is today: The University's largest and best funded
                    engineering RSO, in contact and active development with all areas of robotics research and education
                    on and off campus throughout the community of Northwest Arkansas.
                </p>
            </div>
            {members && (
                <center>
                    <div id="leadership">
                        <h2>Leadership</h2>
                        {members ? (
                            <div className="leaderCardContainer">
                                {members.map((member) => (
                                    <LeaderCard key={member.id} member={member} />
                                ))}
                            </div>
                        ) : (<LoadingAnimation />)}
                    </div>

                    <div id="teamLeads">
                        <h2>Team Leads</h2>
                        {members ? (
                            <div className="teamLeadCardContainer">
                                {members.map((member) => (
                                    <TeamLeadCard key={member.id} member={member} />
                                ))}
                            </div>
                        ) : (<LoadingAnimation />)}
                    </div>
                    
                    <div id="otherMembers">
                        <h2>Other Members</h2>
                        <p>
                            RIOT's projects and success as an organization would not be possible without all of our
                            other members, whose passions for robotics have brought us to where we are today.
                        </p>
                    </div>
                </center>
            )}
        </div>
    );
};

export default MeetTheTeam;