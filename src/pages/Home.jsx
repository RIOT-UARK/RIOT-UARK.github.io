import ProjectCarousel from '../components/projectCarousel/projectCarousel';
import LogoSpin from '../components/logoSpin/logoSpin';
import linkedinFeed from '../components/linkedinFeed/linkedinFeed';

const Home = () => {
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
                <div className="slideshow-container fade">
                    <ProjectCarousel />
                </div>
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
                <center>
                    <h3>Meetings @ ELEG Lounge Sundays at 2:00pm</h3>
                    <h3>X/X/2024: Microbots Competition</h3>
                </center>
            </div>
        </div>
    );
};

export default Home;
