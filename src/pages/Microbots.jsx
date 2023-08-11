import supabase from '../config/supabaseClient';
import { useEffect, useState } from 'react';

import BattlebotCard from '../components/battlebotCard';

function GetEmail({ email, position }) {
    if (position === 'President') {
        return <p>Contact our president at {email}</p>;
    }
}

function ToggleSignup({ offSeason, formLink }) {
    if (offSeason) {
        return <h2 id="SignUpUnavailable">SIGN-UP UNAVAILABLE</h2>;
    } else {
        return (
            <h2>
                <a href={formLink} target="_blank" rel="noreferrer" id="SignUp">
                    SIGN UP TODAY
                </a>
            </h2>
        );
    }
}

function ThisSeason({ Battlebots, currentSemester }) {
    /* {fetchError && (<p>{fetchError}</p>)}
	{Battlebots && (
		if(currentSemester != "Spring 2023") {
			return(
				<p>No competitors have signed up yet. Stay tuned!</p>
			);
		}
		else {
			return(
				<div className = "battlebotCardContainer">
					{Battlebots.map(battlebot => (
						<BattlebotCard key={battlebot.id} battlebot={battlebot} currentSemester={currentSemester}/>
					))}
				</div>
			);
		}
	)} */
}

function PrevSemesterButtons() {
    const prevSemesters = ['Fall 2022', 'Spring 2023'];

    const list = prevSemesters.map((semester) => (
        <div key={semester}>
            <div className="battlebotSeasonCard">
                <h3>{semester}</h3>
            </div>
        </div>
    ));

    return <>{list}</>;
}

const Microbots = () => {
    const [fetchError, setFetchError] = useState(null);
    const [Battlebots, setBattlebots] = useState(null);
    const [Members, setMembers] = useState([]);

    ////////////////////////////////////////////////////
    //Manually change these as needed
    //Can't think of a good way to do it automatically
    const currentSemester = 'Fall 2023';
    const offSeason = true;
    const formLink = 'https://www.youtube.com/@Ayden3D';
    ////////////////////////////////////////////////////

    useEffect(() => {
        const fetchBattlebots = async () => {
            const { data, error } = await supabase.from('Battlebots').select();

            if (error) {
                setFetchError('Error: failed to fetch battlebot data');
                console.log(error);
                setBattlebots(null);
            }
            if (data) {
                setBattlebots(data);
                setFetchError(null);
            }
        };
        fetchBattlebots();

        const fetchMembers = async () => {
            const { data, error } = await supabase.from('Members').select();

            if (error) {
                setFetchError('Error: failed to fetch member data');
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
        <div className="page microbots">
            <div className="textBlurb">
                <h1>Microbots</h1>
                <p>
                    As part of RIOT's vision, every year, we host a microbots competition where students new to robotics
                    pilot small robots in a variety of different competitive events. We’ve hosted each previous semester
                    two separate battle bot tournaments where students build a plastic, 3D printed, remote controlled
                    battle bot in a competition to fight and survive against another designs. Our winners receive
                    special awards as the crowned champion of the microbots tournament each time a competition is
                    hosted. Each fall semester we host an internal competition where we set the fight in the University
                    of Arkansas Union for the student division to recruit additional interested students into the fold
                    of our organization. In the spring, we host a community event at the Fayetteville public library,
                    where students demonstrate their designs in front of a live audience and compete for trophies the
                    trophies of champion, best design, crowd favorite, and best driver.
                </p>
            </div>
            <center>
                <img
                    width="800px"
                    src="Spring 2023 Microbots group photo.jpg"
                    alt="Group photo from the Spring 2023 competition at Fayetteville Public Library"
                />
            </center>
            <div>
                <h2>Document</h2>
                <p>Test text</p>
            </div>
            <div>
                <center>
                    <ToggleSignup key={offSeason} offSeason={offSeason} formLink={formLink} />
                </center>
            </div>
            <center>
                <div>
                    <h2>How to Support</h2>
                    <p>
                        To support the microbots competition, or fund a specific student's robot, please contact us at
                        robotics@uark.edu
                    </p>
                </div>
                <div>
                    <h2>Questions?</h2>
                    {fetchError && <p>{fetchError}</p>}
                    {Members.map((member) => (
                        <GetEmail key={member.id} email={member.email} position={member.position} />
                    ))}
                </div>
            </center>

            <div>
                <center>
                    <h1>This Season</h1>
                    {/* <ThisSeason key={Battlebots.id} Battlebots={Battlebots} currentSemester={currentSemester}/> */}
                    {/* {fetchError && (<p>{fetchError}</p>)}
				{Battlebots && (
					<div className = "battlebotCardContainer">
						{Battlebots.map(battlebot => (
							<ThisSeason key={battlebot.id} battlebot={battlebot} currentSemester={currentSemester}/>
						))}
					</div>
				)} */}
                </center>
            </div>
            {/* <div id = "prevSemesters">
				<h1>Previous Seasons</h1>
				<div className = "battlebotSeasonCardContainer">
					<PrevSemesterButtons/>
				</div>
			</div> */}
        </div>
    );
};

export default Microbots;
