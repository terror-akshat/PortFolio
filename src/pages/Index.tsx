import { Navigation } from '@/components/portfolio/Navigation';
import { Hero } from '@/components/portfolio/Hero';
import { Summary } from '@/components/portfolio/Summary';
import { Projects } from '@/components/portfolio/Projects';
import { Skills } from '@/components/portfolio/Skills';
import { Achievements } from '@/components/portfolio/Achievements';
import { Education } from '@/components/portfolio/Education';
import { Certifications } from '@/components/portfolio/Certifications';
import { Experience } from '@/components/portfolio/Experience';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="summary">
          <Summary />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="achievements">
          <Achievements />
        </section>
        
        <section id="education">
          <Education />
        </section>

        <section id="experience">
          <Experience />
        </section>
        
        <section id="certifications">
          <Certifications />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
