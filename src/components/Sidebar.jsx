import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/me.jpg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Jhoni Costa" />
            <p className="title">Desenvolvedor Fullstack</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="https://drive.google.com/file/d/1G8y06aorVuYLrHzDrE_ipCjYTwtEeWB6/view?usp=share_link" className="btn">
                Download do Curriculo
            </a>
        </aside>
    );
}

export default Sidebar;