import { Hero } from './components/Hero';
import { ProjectsGrid } from './components/ProjectsGrid';
import { projects } from './data/projects';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-solar-primary/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-solar-accent/5 blur-[150px]"></div>
      </div>
      
      {/* Main Content */}
      <main className="relative z-10 font-sans pb-24">
        {/* Navigation / Header simple */}
        <header className="p-6 flex justify-center md:justify-start">
          <div className="text-solar-accent font-serif font-bold text-xl tracking-widest uppercase">
            Portfolio
          </div>
        </header>

        <Hero 
          name="Simón" 
          summary="Un poco de mis proyectos personales." 
        />
        
        <ProjectsGrid projects={projects} />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-solar-primary/20 bg-solar-surface/30 backdrop-blur-sm py-8 text-center text-solar-light/60 text-sm">
        <p>© {new Date().getFullYear()} Simón. Cultivado con sabiduría y código.</p>
      </footer>
    </div>
  );
}

export default App;
