import { useState, useEffect } from 'react'
import { fetchMembers } from '../utils/fetchMembers'

import BattlebotCard from '../components/battlebotCard/battlebotCard';

const Microbots = () => {
    
    const currentSemester = 'Fall 2023';
    const offSeason = true;
    const formLink = 'https://www.youtube.com/@Ayden3D';


    return (
        <div className="page microbots">
            <div className="textBlurb">
                <h1>Microbots</h1>
                <p>
                    As part of RIOT's vision, every year, we host a microbots competition where students new to robotics
                    pilot small robots in a variety of different competitive events. We've hosted each previous semester
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
                    {/*<ToggleSignup key={offSeason} offSeason={offSeason} formLink={formLink} />*/}
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
                </div>
            </center>
        </div>
    );
};

export default Microbots;
