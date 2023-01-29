import "../styles/information.css";

import AboutMe from "./AboutMe";
import Footer from "./Footer";
import ProjectsList from "./ProjectsList";

export default function Information() {
  return (
    <section className="Information">
      <div className="container">
        <div className="text-container">
          <p>
            <div id="aboutme">
              <AboutMe />
            </div>
            <h1 id="projects">Mis proyectos</h1>
              <ProjectsList />
            <h1 id="contact">Contáctame</h1>
            <Footer/>
          </p>
        </div>
      </div>
      <div className="big-rocket-container">
        <img src="https://media.giphy.com/media/gPCTgwz1ywGGwR8Qu7/giphy.gif" alt="" />
      </div>
    </section>
  );
}
