import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp} from "react-icons/fa"

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin />, link: "http://www.linkedin.com/in/jhonicosta" },
    { name: "github", icon: <FaGithub />, link: "http://www.github.com/jhoni-costa" },
    { name: "whatsapp", icon: <FaWhatsapp />, link: "https://api.whatsapp.com/send?phone=5541999440442" },
    { name: "instagram", icon: <FaInstagram />, link: "http://www.instagram.com/jrscdev" },
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} className="social-btn" id={network.name} key={network.name} target='_blank'>
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SocialNetworks;