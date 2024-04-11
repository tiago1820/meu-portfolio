import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import frontend from "./data/frontend.json";
import fullstack from "./data/fullstack.json";
import games from "./data/games.json";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <Projects projects={fullstack}/>
      <Projects projects={frontend}/>
      <Projects projects={games}/>
      <Contact/>
    </div>
  );
}

export default App;
