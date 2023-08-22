import { BsDiscord as Discord, BsInstagram as Instagram, BsTwitter as Twitter } from 'react-icons/bs';
const footer = () => {
    return (
        <footer>
            <center>
                <p class="font-16">Contact Us: robotics@uark.edu</p>
                <p class="font-16">Ben Burdess (President): bhburdes@uark.edu</p>
                <p class="font-16">Nathaniel House (Vice President): nah007@uark.edu</p>
                <div class="socialMediaContainer">
                    <a class="socialMediaLink" href="https://discord.gg/5YRM3pQYev" target="_blank">
                        <Discord size={75} color="white" />
                        <strong class="socialMediaText">Join our Discord</strong>
                    </a>
                    <a class="socialMediaLink" href="https://www.instagram.com/riot_uark/" target="_blank">
                        <Instagram size={75} color="white" />
                        <strong class="socialMediaText">Follow us on Instagram</strong>
                    </a>
                    <a class="socialMediaLink" href="https://twitter.com/riot_uark" target="_blank">
                        <Twitter size={75} color="white" />
                        <strong class="socialMediaText">Follow us on Twitter</strong>
                    </a>
                </div>
                <p class="font-12">Powered by Supabase</p>
                <p class="font-12">Copyright(?) RIOT 2023, authored by Ben Fletcher</p>
            </center>
        </footer>
    );
};
export default footer;
