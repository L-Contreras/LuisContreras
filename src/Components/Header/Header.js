import './Header.css';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import Movie from './computer.json';

function Header() {
    return (
        <div className="headercontainer" data-aos="fade-left">
            <section className="info-container">
                <h1>Full Stack </h1>
                <h1>Developer</h1>
                <h2>Hello, I'm Luis Contreras</h2>
                <p className="location">📍Atlanta, Ga</p>
                <div className="contact-info">
                        <p>Contact: csxlouis@gmail.com</p>
                    </div>
                <section className="mylinks" data-aos="zoom-in">
                    <section className="Linksofme">
                        <a href="https://www.linkedin.com/in/luis-frontend/" target='_blank' rel="noopener noreferrer">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/L-Contreras" target='_blank' rel="noopener noreferrer">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="mailto:csxlouis@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-envelope gmail-icon"></i>
                        </a>
                    </section>
                    <section className="skillsyeah">
                        <button>React</button>
                        <button>JavaScript</button>
                        <button>Node.js</button>
                        <button>PostgreSQL</button>
                    </section>
                    <section className="projectscontact">
                        <a href="#portfolio"><button>Projects</button></a>
                        <button>Contact</button>
                    </section>
    
                </section>
            </section>
            <section className="info-container">
                    <Lottie animationData={Movie} loop={true} className="anime"/>
            </section>
        </div>
    )
}

export default Header;