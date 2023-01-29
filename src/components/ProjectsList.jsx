import Projects from "./Projects";
import '../styles/projects.css'
export default function ProjectsList() {
  return (
    <>
      <div id="projects-container">
        <Projects
          name="Generador pokémon"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Pokemongenerator.png/180px-Pokemongenerator.png"
          url="https://arturonunez-pokemongenerator.netlify.app/"
          description="Pulsando un botón se muestra en pantalla información acerca de un pokémon aleatorio de primera generación, incluye también buscador por id."
          tecnologies="HTML - CSS - JAVASCRIPT"
          github="https://github.com/ArtuNu/pokemon_generator"
        />
        <Projects
          name="Calculadora"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Reactcalculator.png/800px-Reactcalculator.png?20230128012701"
          url="https://arturonunez-calculator.netlify.app/"
          description="Una calculadora simple hecha en react, utilizando math.js."
          tecnologies="REACT"
          github="https://github.com/ArtuNu/react-calculator"
        />
        <Projects
          name="Lista de tareas"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Tasklist2.png/180px-Tasklist2.png"
          url="https://arturonunez-tasklist.netlify.app//"
          description="Un manejador de tareas que permite añadir, marcar y eliminar tareas."
          tecnologies="REACT"
          github="https://github.com/ArtuNu/task-list"
        />
      </div>
    </>
  );
}
