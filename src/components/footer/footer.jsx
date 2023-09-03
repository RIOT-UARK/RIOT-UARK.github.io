import { BsDiscord as Discord, BsInstagram as Instagram, BsTwitter as Twitter } from 'react-icons/bs';
const footer = () => {
    return (
        <footer>
            <center>
                <p className="font-16">Contact Us: robotics@uark.edu</p>
                <p className="font-16">Nathaniel House (President): nah007@uark.edu</p>
                <p className="font-16">Grace Harding (Vice President): gharding@uark.edu</p>
                <div className="socialMediaContainer">
                    <a className="socialMediaLink" href="https://discord.gg/5YRM3pQYev">
                        <Discord size={75} color="white" />
                        <strong className="socialMediaText">Join our Discord</strong>
                    </a>
                    <a className="socialMediaLink" href="https://www.instagram.com/riot_uark/">
                        <Instagram size={75} color="white" />
                        <strong className="socialMediaText">Follow us on Instagram</strong>
                    </a>
                    <a className="socialMediaLink" href="https://twitter.com/riot_uark">
                        <Twitter size={75} color="white" />
                        <strong className="socialMediaText">Follow us on Twitter</strong>
                    </a>
                </div>
                <p className="font-12">Powered by Supabase</p>
                <p className="font-12">RIOT 2023, authored by Ben Fletcher and Jackson Baker</p>
            </center>
        </footer>
    );
};
export default footer;
