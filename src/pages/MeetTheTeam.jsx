import supabase from '../config/supabaseClient';
import { useEffect, useState } from 'react';

import LeaderCard from '../components/leaderCard';
import TeamLeadCard from '../components/teamLeadCard';
import MemberCard from '../components/memberCard';

const MeetTheTeam = () => {
    const [fetchError, setFetchError] = useState(null);
    const [members, setMembers] = useState(null);

    useEffect(() => {
        const fetchMembers = async () => {
            const { data, error } = await supabase.from('Members').select();

            if (error) {
                setFetchError('Error: failed to fetch data');
                console.log(error);
                setMembers(null);
            }
            if (data) {
                setMembers(data);
                setFetchError(null);
            }
        };
        fetchMembers();
    }, []);

    return (
        <div className="page MeetTheTeam">
            <div className="textBlurb">
                <h1>Meet the Team</h1>
                <p>
                    RIOT is consisted of students who founded the registered student org. turned non profit in 2023. The
                    founder, Benjamin Burdess started the club in spring of 2022 during his classes to begin working
                    towards a vision of starting a premier robotics club for the University of Arkansas. With Nathaniel
                    House as his founding Vice President and Thalia Hawkins as RIOT's founding Treasurer, they built the
                    small, single robot driven club to what it is today: The University's largest and best funded
                    engineering RSO, in contact and active development with all areas of robotics research and education
                    on and off campus throughout the community of Northwest Arkansas.
                </p>
            </div>
            {fetchError && <p>{fetchError}</p>}
            {members && (
                <center>
                    <div id="leadership">
                        <h2>Leadership</h2>
                        <div className="leaderCardContainer">
                            {members.map((member) => (
                                <LeaderCard key={member.id} member={member} />
                            ))}
                        </div>
                    </div>

                    <div id="teamLeads">
                        <h2>Team Leads</h2>
                        <div className="teamLeadCardContainer">
                            {members.map((member) => (
                                <TeamLeadCard key={member.id} member={member} />
                            ))}
                        </div>
                    </div>

                    <div id="otherMembers">
                        <h2>Other Members</h2>
                        <p>
                            RIOT's projects and success as an organization would not be possible without all of our
                            other members, whose passion for robotics have brought us to where we are today.
                        </p>
                        {/* <div className="memberCardContainer">
							{members.map(member => (
								<MemberCard key={member.id} member={member} />
							))}
						</div> */}
                    </div>
                </center>
            )}
        </div>
    );
};

export default MeetTheTeam;
