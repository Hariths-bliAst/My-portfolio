import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Timeline />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
