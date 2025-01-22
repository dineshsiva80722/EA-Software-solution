import React from 'react';
import { ArrowRight, MessageCircle, Users2, Lock, Instagram, Twitter, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Expertise from './components/Expertise';
import Services from './components/Services';
import PersonalLearning from './components/PersonalLearning';
import Values from './components/Values';
import Industries from './components/Industries';
import Milestones from './components/Milestones';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Expertise />
      <Services />
      <PersonalLearning />
      <Values />
      <Industries />
      <Milestones />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;