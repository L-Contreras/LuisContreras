import '../Portfolio/display.css';
import FrontEnd from '../../Images/FrontEnd.jpg';
import Python from '../../Images/Python.jpg';
import DataStructures from '../../Images/DataStructures.jpg';
import 'aos/dist/aos.css';

function Certificates() {
    return (
        <div className="tiles-container" data-aos="fade-down">
            <a
                href="/LuisContrerasFront-end.pdf" 
                target="_blank"
                rel="noopener noreferrer"
            >
                <section className="tiles" >
                    <img src={FrontEnd} alt="Frontend Certificate"></img>
                </section>
            </a>
            <a
                href="/LuisContrerasDatastructures.pdf" 
                target="_blank"
                rel="noopener noreferrer"
            >
                <section className="tiles" >
                    <img src={DataStructures} alt="DataStructures Certificate"></img>
                </section>
            </a>
            <a
                href="/LuisContrerasPython.pdf" 
                target="_blank"
                rel="noopener noreferrer"
            >
                <section className="tiles">
                    <img src={Python} alt="Python Certificate"></img>
                </section>

            </a>    
        </div>
    )
}

export default Certificates;