import './TechStack.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TechStack() {
    return (
        <div className="skills-container">
            <section className="skills">
                <section className="skillstile" data-aos="flip-left" data-aos-duration="3500">
                    <i className="fa-brands fa-js"></i>
                    <p>JavaScript</p>
                </section>
                <section className="skillstile" data-aos="flip-left" data-aos-duration="4000">
                    <i className="fa-brands fa-react"></i>
                    <p>React</p>
                </section>
                <section className="skillstile" data-aos="flip-left" data-aos-duration="5000">
                    <i className="fa-brands fa-aws"></i>
                    <p>Amazon web service</p>
                </section>
                <section className="skillstile" data-aos="flip-left" data-aos-duration="6000">
                    <i className="fa-brands fa-html5"></i>
                    <p>HTML</p>
                </section>
                <section className="skillstile" data-aos="flip-right" data-aos-duration="6000">
                    <i className="fa-solid fa-database"></i>
                    <p>Database</p>
                </section>
                <section className="skillstile" data-aos="flip-right" data-aos-duration="5000">
                    <i className="fa-brands fa-css3"></i>
                    <p>CSS3</p>
                </section>
                <section className="skillstile" data-aos="flip-right" data-aos-duration="4000">
                    <i className="fa-brands fa-github"></i>
                    <p>Github</p>
                </section>
                <section className="skillstile" data-aos="flip-right" data-aos-duration="3500">
                    <i className="fa-brands fa-python"></i>
                    <p>Python</p>
                </section>
            </section>
        </div>
    )
}

export default TechStack;