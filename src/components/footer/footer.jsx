import { BsDiscord as Discord, BsInstagram as Instagram, BsTwitter as Twitter, BsLinkedin as LinkedIn } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div>
                <strong>Contact Us:</strong> robotics@uark.edu
            </div>
            <div style={{ margin: '10px 0' }}>
                <span>Nathaniel House (President): nah007@uark.edu | </span>
                <span>Grace Harding (Vice President): gharding@uark.edu</span>
            </div>
            <center>
                <div className="socialMediaContainer">
                    <a href="https://discord.gg/5YRM3pQYev" title="Join our Discord">
                        <Discord size={40} color={'#ecf3fe'} />
                    </a>
                    <a href="https://www.instagram.com/riot_uark/" title="Follow us on Instagram">
                        <Instagram size={40} color={'#ecf3fe'} />
                    </a>
                    <a href="https://twitter.com/riot_uark" title="Follow us on Twitter">
                        <Twitter size={40} color={'#ecf3fe'} />
                    </a>
                    <a href="https://www.linkedin.com/company/robotics-interdisciplinary-organization-of-teams/" title="Follow us on LinkedIn">
                        <LinkedIn size={40} color={'#ecf3fe'} />
                    </a>
                </div>
            </center>

            <div style={{ fontSize: '12px', marginTop: '10px' }}>
                <p>Powered by Supabase</p>
                <p>RIOT 2023, authored by Ben Fletcher and Jackson Baker</p>
            </div>
        </footer>
    );
};

export default Footer;
