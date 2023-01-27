import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiLaravel,
    DiJqueryLogo,
    DiUbuntu
} from 'react-icons/di'

import { FaPhp } from 'react-icons/fa'

import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: "php", name: "PHP", icon: <FaPhp /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "jquery", name: "Jquery", icon: <DiJqueryLogo /> },
    { id: "ubuntu", name: "Ubuntu", icon: <DiUbuntu /> },
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "laravel", name: "Laravel", icon: <DiLaravel /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "react", name: "React", icon: <DiReact /> },
];

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesContainer;