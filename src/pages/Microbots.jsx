import { useEffect, useState } from 'react';
import { fetchBattlebots } from '../db/db';

import BattlebotCard from '../components/battlebotCard/battlebotCard';
import BattlebotSeasonCard from '../components/battlebotSeasonCard/battlebotSeasonCard';

function ToggleSignup({ offSeason, formLink }) {
    if (offSeason) {
        return <h2 id="SignUpUnavailable">SIGN-UP AVAILABLE FALL 2024</h2>;
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
    /*  {fetchError && (<p>{fetchError}</p>)}
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
    return (
        <div className="battlebotCardContainer">
            {Battlebots.map((battlebot) => (
                <BattlebotCard key={battlebot.id} battlebot={battlebot} currentSemester={currentSemester} />
            ))}
        </div>
    );
}

//This really doesn't need to be defined seperatley. Will try and integrate into main function
function ThisSemesterButtons() {
    const nextTime = ['RIOT will be back hosting Microbots next Semester'];

    const list = nextTime.map((nextTime) => (
        <div key={nextTime}>
            <div className="battlebotNextSeasonCard">
                <h3>{nextTime}</h3>
            </div>
        </div>
    ));

    return <>{list}</>;
}

const Microbots = () => {
    const [Battlebots, setBattlebots] = useState(null);
    const [openPopupId, setOpenPopupId] = useState(null); // State to track open popup ID
    const prevSemesters = ['Fall 2022', 'Spring 2023', 'Fall 2023']; //Temporary hardcoded array

    ////////////////////////////////////////////////////
    //Manually change these as needed
    //Can't think of a good way to do it automatically. Maybe config page in future?
    const currentSemester = 'Spring 2023';
    const offSeason = true;
    const formLink = 'https://www.youtube.com/@Ayden3D'; //Placeholder link, subscribe to Ayden though
    ////////////////////////////////////////////////////

    const currentSeasonBots = Battlebots && Battlebots.filter((battlebot) => battlebot.semester === currentSemester);

    useEffect(() => {
        const fetchBattlebotsData = async () => {
            const battlebots = await fetchBattlebots();
            setBattlebots(battlebots);
        };
        fetchBattlebotsData();
        //fetchBattlebots();
    }, []);

    // Function to toggle popup state and set open popup ID
    const handleTogglePopup = (semester) => {
        setOpenPopupId(openPopupId === semester ? null : semester);
    };

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
                    className="default-img"
                    src="Spring 2023 Microbots group photo.jpg"
                    alt="Group photo from the Spring 2023 competition at Fayetteville Public Library"
                />
            </center>
            <div>
                <center>
                    <ToggleSignup key={offSeason} offSeason={offSeason} formLink={formLink} />
                </center>
            </div>
            <center>
                <div>
                    <h2>Want to support us or have questions?</h2>
                    <p>Please contact robotics@uark.edu</p>
                </div>
            </center>

            <div id="nextSemesters">
                <h1>This Season</h1>

                <center>
                    <div className="battlebotNextSeasonCardContainer">
                        {/*<ThisSemesterButtons />*/}
                        {currentSeasonBots &&
                            currentSeasonBots.map((battlebot) => (
                                <BattlebotCard key={battlebot.id} 
                                battlebot={battlebot} />
                            ))}
                    </div>
                </center>
            </div>

            <div id="prevSemesters">
                <h1>Previous Seasons</h1>
                <center>
                    <div className="battlebotSeasonCardContainer">
                        {prevSemesters &&
                            prevSemesters.map((semester) => (
                                <BattlebotSeasonCard
                                    semester={semester}
                                    isOpen={openPopupId === semester} // Pass isOpen prop
                                    onTogglePopup={handleTogglePopup} // Pass onTogglePopup function
                                />
                            ))}
                    </div>
                </center>
            </div>
        </div>
    );
};

export default Microbots;
