import supabase from '../config/supabaseClient';
import { useEffect, useState } from 'react';

import images from '../components/images';
import ProjectCarousel from '../components/projectCarousel';
import LogoSpin from '../components/logoSpin';

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
                    RIOT is an engineering Registered Student Organization, soon
                    to be nonprofit organization, that seeks to benefit
                    mechatronics through robotics at the scale of campus and our
                    larger community and make Northwest Arkansas the Robotics
                    and Mechatronics capital of the nation.{' '}
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin gravida cursus mi, eu faucibus erat mollis et. Nunc
                    fermentum, velit eget vestibulum euismod, massa velit cursus
                    justo, et vestibulum elit metus eget ipsum. Vivamus
                    sollicitudin purus id dui congue, at tempus orci fermentum.
                    Vestibulum interdum commodo nunc, id dictum lacus
                    pellentesque ut. Nam et mauris ut risus pellentesque posuere
                    eu quis urna. Donec a ligula a urna malesuada scelerisque.
                    Cras hendrerit mattis diam, ac tristique ante interdum quis.
                    Aenean lacinia sollicitudin ex. Suspendisse potenti. Vivamus
                    ullamcorper, lacus id blandit varius, arcu ex egestas eros,
                    eu sollicitudin massa ligula at erat. Mauris eget dictum
                    nisi. Maecenas neque leo, lacinia at libero eget,
                    condimentum posuere mi. Pellentesque tellus nisi, posuere
                    quis commodo eget, congue sit amet tortor.
                </p>
                <p>

                    Donec nec ornare orci, viverra facilisis purus. Donec
                    posuere faucibus risus quis consequat. Praesent pretium,
                    risus vel imperdiet imperdiet, quam magna feugiat mi, in
                    facilisis arcu ante a nisi. Cras nunc nisi, consequat at
                    malesuada vel, lobortis ornare leo. Integer at dolor neque.
                    Vestibulum a vehicula tortor, porttitor dictum nisi. Nunc at
                    sapien tempus, ultrices sem non, vestibulum nisi. Ut
                    tristique mollis sapien, ut laoreet nunc sagittis ut. Mauris
                    hendrerit, libero nec faucibus sagittis, velit metus iaculis
                    augue, id porttitor dui enim dictum velit. Duis eget eros
                    magna. In ante metus, consequat at libero vel, dignissim
                    iaculis nisl.
                </p>
                <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Vivamus vitae libero
                    scelerisque, luctus nisl sed, tincidunt odio. Nulla
                    facilisi. Nullam auctor, nunc id ultrices consequat, dolor
                    nisl luctus lorem, sed luctus lectus elit at elit. Nullam
                    eget purus euismod, luctus nunc sit amet, ultricies odio.
                    Nullam auctor, nunc id ultrices consequat, dolor nisl luctus
                    lorem, sed luctus lectus elit at elit. Nullam eget purus
                    euismod, luctus nunc sit amet, ultricies odio.
                </p>
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

            <div>
                <center>
                    <h1>Sponsorship</h1>
                    <h2 className="sponsor">JMP Solutions</h2>
                    <h2 className="sponsor">Fayetteville Public Library</h2>
                </center>
            </div>
            <br></br>
            <br></br>
            <div>
                <h1>Meeting Times & Important Dates</h1>
                <img src="" alt="Weekly Schedule"></img>
                <ul>
                    <li>X-XX-23: RIOT Election</li>
                    <li>11/16/23: Microbots Competition @ Union Flag Room</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
