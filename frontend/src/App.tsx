import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CommandPalette from './components/CommandPalette';
import StatsDashboard from './components/StatsDashboard';
import GithubActivity from './components/GithubActivity';
import Certificates from './components/Certificates';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <CommandPalette />
      <div className="tech-bg-container">
        <div className="tech-grid"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <StatsDashboard />
        <About />
        <Skills />
        <GithubActivity />
        <Experience />
        <Certificates />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
