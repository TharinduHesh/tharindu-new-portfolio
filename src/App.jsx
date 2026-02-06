import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';

function App() {
  const [showTransition, setShowTransition] = useState(false);
  const [transitionKey, setTransitionKey] = useState(0);

  const handleNavClick = () => {
    setShowTransition(true);
    setTransitionKey(prev => prev + 1);
    setTimeout(() => setShowTransition(false), 1500);
  };

  return (
    <Router>
      <LoadingScreen />
      <ScrollProgress />
      <BackToTop />
      <div className="relative">
        <Navbar onNavClick={handleNavClick} />
        <main>
          <AnimatePresence mode="wait">
            {showTransition && <PageTransition key={transitionKey} />}
          </AnimatePresence>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
