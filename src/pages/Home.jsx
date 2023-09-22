import supabase from '../config/supabaseClient';
import { useEffect, useState } from 'react';

import images from '../components/projectCarousel/images';
import ProjectCarousel from '../components/projectCarousel/projectCarousel';
import LogoSpin from '../components/logoSpin/logoSpin';
import linkedinFeed from '../components/linkedinFeed/linkedinFeed';

const Home = () => {
    const [fetchError, setFetchError] = useState(null);
    const [Projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase.from('Projects').select();

            if (error) {
                setFetchError('Error: failed to fetch data');
                console.log(error);
                setProjects(null);
            }
            if (data) {
                setProjects(data);
                setFetchError(null);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="page home">
            <div className="logoBanner">
                <center>
                    <LogoSpin />
                    <h1>Robotics Interdisciplinary Organization of Teams</h1>
                </center>
            </div>
            <div id="DiscordWidget">
                <center>
                    <h2>Join the Discord for Membership</h2>
                    <iframe
                        title="Discord Widget"
                        src="https://discord.com/widget?id=910649533275471903&theme=dark"
                        width="350"
                        height="500"
                        allowtransparency="true"
                        frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    ></iframe>
                </center>
            </div>
            <div id="AboutUs">
                <h1>About Us</h1>
                <p>
                    RIOT is an engineering Registered Student Organization, soon to be nonprofit organization, that
                    seeks to benefit mechatronics through robotics at the scale of campus and our larger community and
                    make Northwest Arkansas the Robotics and Mechatronics capital of the nation.{' '}
                </p>
                <iframe
                    src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/190264"
                    frameborder="0"
                    width="100%"
                    height="500"
                ></iframe>
            </div>

            <center id="Projects">
                <h1>Projects</h1>
                {fetchError && <p>{fetchError}</p>}
                {Projects && (
                    <div className="slideshow-container fade">
                        <ProjectCarousel images={images} />
                    </div>
                )}
            </center>

            <div className="sponsorship">
                <h1>Sponsorship</h1>
                <div className="sponsorimgs">
                    <img className="sponsor" src="JMP Solutions Logo.png" alt="JMP Solutions" />
                    <img
                        className="sponsor"
                        src="Fayetteville Public Library logo.png"
                        alt="Fayetteville Public Library"
                    />
                </div>
            </div>
            <br></br>
            <br></br>
            <div>
                <h1>Meeting Times & Important Dates</h1>
                <img src="" alt="Weekly Schedule"></img>
                <ul>
                    <li>11/16/23: Microbots Competition @ Union Flag Room</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
