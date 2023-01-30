import "../styles/introduction.css";
import React from "react";

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classIntroduction: "Introduction",
      classComet: "big-comet-container",
      classExplosion: "big-explosion-container",
      classPlanet: "big-planet-container",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        classIntroduction: "drop",
      });
    }, 8000);
    setTimeout(() => {
      this.setState({
        classComet: "drop",
      });
    }, 9600);
    setTimeout(() => {
      this.setState({
        classExplosion: "drop",
      });
    }, 11300);
    setTimeout(() => {
      this.setState({
        classPlanet: "drop",
      });
    }, 10000);
  }

  render() {
    return (
      <>
        <div className={`${this.state.classIntroduction} opacity-off`}>
          <div className="introduction-container">
            <div>
              <span className="visible-1">
                <p className="welcome-text-1">Hola</p>
              </span>
            </div>
            <div>
              <span className="visible-2">
                <p className="welcome-text-2">Mi nombre es Arturo Nuñez</p>
              </span>
            </div>
            <div>
              <span className="visible-3">
                <p className="welcome-text-3">¡Bienvenido!</p>
              </span>
            </div>
          </div>
        </div>
        <div className={`${this.state.classComet}`}>
          <div className="comet-cotainer">
            <img src="https://media3.giphy.com/media/kvHMtGlTj6U5ZQhIlg/200w.webp" alt="" />
          </div>
        </div>
        <div className={`${this.state.classPlanet}`}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Planet_pixel.webp/600px-Planet_pixel.webp.png?20230130214818" id="planet"/>
        </div>
        <div className={`${this.state.classExplosion}`}>
            <img src="https://media0.giphy.com/media/wzmY8woxRLjcfZg7UD/giphy.gif" alt="" id="explosion"/>
        </div>
      </>
    );
  }
}

export default Introduction;

