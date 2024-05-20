import { useEffect, useState } from 'react';
import { fetchMembers } from '../../utils/fetchMembers';
import {
    BsDiscord as Discord,
    BsInstagram as Instagram,
    BsTwitter as Twitter,
    BsLinkedin as LinkedIn,
} from 'react-icons/bs';

const Footer = () => {
    const [members, setMembers] = useState(null);

    useEffect(() => {
        const fetchMembersData = async () => {
            const members = await fetchMembers();
            setMembers(members);
        };
        fetchMembersData();
    }, []);

    const president = members && members.filter((member) => member.position === 'President');
    const vicePresident = members && members.filter((member) => member.position === 'Vice President');

    return (
        <footer>
            <div>
                <strong>Contact Us:</strong> robotics@uark.edu
            </div>
            <div style={{ margin: '10px 0' }}>
                {president &&
                    president.map((president) => (
                        <span key={president.id}>
                            {president.first_name} {president.last_name} (President): {president.email} |{' '}
                        </span>
                    ))}
                {vicePresident &&
                    vicePresident.map((vicePresident) => (
                        <span key={vicePresident.id}>
                            {vicePresident.first_name} {vicePresident.last_name} (Vice President): {vicePresident.email}
                        </span>
                    ))}
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
                    <a
                        href="https://www.linkedin.com/company/robotics-interdisciplinary-organization-of-teams/"
                        title="Follow us on LinkedIn"
                    >
                        <LinkedIn size={40} color={'#ecf3fe'} />
                    </a>
                </div>
            </center>

            <div style={{ fontSize: '12px', marginTop: '10px' }}>
                <p>Powered by Supabase</p>
                <p>&copy; RIOT Website Team 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
