import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Aboutme from './Components/Aboutme/Aboutme';
import Portfolio from './Components/Portfolio/Portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true
    });
    AOS.refresh();
  }, [])


  return (
    <>
      <Navbar/>
      <div className="App">
        <section className="app-section" id="home">
          <Header/>
        </section>
        <section className="app-section" id="aboutme">
          <Aboutme/>
        </section>
        <section className="app-section" id="portfolio">
          <Portfolio/>
        </section>
      </div>
    </>
  );
}

export default App;
