import './Portfolio.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Projects from '../Projects/Projects';
import TechStack from '../TechStack/TechStack';
import Certificates from '../Certificates/Certificates';
import 'aos/dist/aos.css';

function Portfolio() {
    const [ activeSection, setActiveSection ] = useState("Projects");

    return (
        <div className="portfoliocontainer" data-aos="fade-down">
            <section className="titlecontainer">
                <h2>Portfolio</h2>
                <p>My Full-Stack Development Journey</p>
            </section>
            <section className="mywork">
                <div className="tab-wrapper">
                    <motion.div
                        className="tab-highlight"
                        animate={{ x: activeSection === "Projects" ? "0%" : activeSection === "Certificates" ? "100%" : "200%" }}
                        transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    />
                    <section 
                        className={`workchoosecontainer`} 
                        onClick={() => setActiveSection('Projects')}
                    >
                        <h3>Projects</h3>
                    </section>
                    <section 
                        className={`workchoosecontainer`} 
                        onClick={() => setActiveSection('Certificates')}
                    >
                        <h3>Certificates</h3>
                    </section>
                    <section 
                        className={`workchoosecontainer`} 
                        onClick={() => setActiveSection('TechStack')}
                    >
                        <h3>Tech Stack</h3>
                    </section>
                </div>
            </section>

            <section className="showcasecontainer">
                {activeSection === "Projects" && <Projects/>}
                {activeSection === "Certificates" && <Certificates/>}
                {activeSection === "TechStack" && <TechStack/>}
            </section>
        </div>
    )
}

export default Portfolio;