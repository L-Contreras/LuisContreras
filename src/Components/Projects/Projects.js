import '../Portfolio/display.css';
import AntiStrike from '../../Images/AntiStrike.jpg';
import Jamming from '../../Images/Jamming.png';
import NoCredit from '../../Images/redditclone.jpg';

function Projects() {
    return (
        <div className="tiles-container">
            <a
                href="https://github.com/L-Contreras/AntiStrike"
                target="_blank"
                rel="noopener noreferrer"
            >
                <section className="tiles">
                    <h3>AntiStrike</h3>
                    <img src={AntiStrike} alt="Antistrike website"/>
                </section>
            </a>
            <a 
                href="https://github.com/L-Contreras/RedditClone"
                target="_blank"
                rel="noopener noreferrer"
            >
                <section className="tiles">
                    <h3>Reddit Clone</h3>
                    <img src={NoCredit} alt="Reddit Clone"/>
                </section>
            </a>
            <a 
                href="https://github.com/L-Contreras/Jamming"
                target="_blank"
                rel="noopener noreferrer"
            >
                <section className="tiles">
                    <h3>Spotify Playlist Maker-Jamming</h3>
                    <img src={Jamming} alt="spotify playlist maker"/>
                </section>
            </a>
        </div>
    )
}

export default Projects;