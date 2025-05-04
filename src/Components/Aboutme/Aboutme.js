import './Aboutme.css';
import 'aos/dist/aos.css';

function Aboutme() {
    return (
        <div className="aboutmecontainer" data-aos="fade-right">
            <h2>About Me</h2>
            <section className="aboutmeinfo">
                <section className="aboutmetextcontainer">
                    <p data-aos="zoom-in-down">I'm a former professional esports coach now fully focused on front-end development, with expertise in React, JavaScript, and modern web technologies. My experience coaching top teams like Evil Geniuses and Nouns Esports sharpened my leadership, strategic thinking, and problem-solving skills. Outside of tech, I still coach esports teams—bringing the same passion, discipline, and drive to both arenas.
                    </p>
                </section>
                <section className="resumecontainer">
                    <a 
                        href={`${process.env.PUBLIC_URL}/LuisContreras.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Download CV</button>
                    </a>
                    <a href="#portfolio">
                        <button>View Projects</button>
                    </a>
                </section>
                <section className="aboutmepogress">
                    <section className="containerinfo" data-aos="flip-up" data-aos-duration="1000">
                        <div className="bottominfo">
                            <p className="stat">3 Years</p>
                        </div>
                        <div className="bottominfo">
                            <p className="label">Experience</p>
                            <p className="subtext">Self-taught in React, Full-Stack Development, Python</p>
                        </div>
                    </section>
                    <section className="containerinfo" data-aos="flip-up" data-aos-duration="2000">
                        <div className="bottominfo">
                            <p className="stat">3</p>
                        </div>
                        <div className="bottominfo">
                            <p className="label">Certificates</p>
                            <p className="subtext">Frontend Engineeering, Python Data Structures</p>
                        </div>
                    </section>
                    <section className="containerinfo" data-aos="flip-up" data-aos-duration="3000">
                        <div className="bottominfo">
                            <p className="stat">4</p>
                        </div>
                        <div className="bottominfo">
                            <p className="label">Projects Completed</p>
                            <p className="subtext">React, AWS, PostgreSQL</p>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Aboutme;