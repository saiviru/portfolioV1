import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, Phone, Code2, Database, Layers, Cpu, Globe, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import ThreeBackground from "@/components/ThreeBackground";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCard from "@/components/ProjectCard";

// Import generated assets
import avatarImg from "@assets/generated_images/developer_avatar.png";
import project1Img from "@assets/generated_images/dashboard_project.png";
import project2Img1 from "@assets/generated_images/koovi_1.png";
import project2Img2 from "@assets/generated_images/koovi_2.png";
import project2Img3 from "@assets/generated_images/koovi_3.png";
import project3Img from "@assets/generated_images/webgl_project.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <ThreeBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-mono text-xl font-bold tracking-tighter">
              <span className="text-primary">&lt;</span>
              Saiviru
              <span className="text-primary">/&gt;</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <a href="/SaiKiran_Boga_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <Button size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                Resume
              </Button>
            </a>
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                Senior Software Developer
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Experiences</span> that scale.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                I'm a Full Stack Developer with 7 years of experience crafting high-performance web applications using React, TypeScript, Node.js, and Three.js.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#work" className="cursor-pointer">
                  <Button size="lg" className="bg-primary text-background hover:bg-primary/90 hover:scale-105 transition-all duration-200 font-bold cursor-pointer">
                    View My Work
                  </Button>
                </a>
                <a href="#contact" className="cursor-pointer">
                  <Button size="lg" variant="outline" className="border-muted-foreground/30 hover:bg-muted/50 hover:scale-105 hover:border-primary transition-all duration-200 cursor-pointer">
                    Contact Me
                  </Button>
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6 text-muted-foreground">
                <a href="https://github.com/saiviru" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/saiviru/" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="mailto:saikiran@saiviru.in" className="hover:text-primary transition-colors"><Mail className="w-6 h-6" /></a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <div className="text-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_40px_-10px_var(--primary)] ring-4 ring-background/50 mx-auto">
                   <img src={avatarImg} alt="Developer Avatar" className="w-full h-full object-cover" />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-foreground">Sai Kiran Boga</h2>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee (Static Grid for simplicity) */}
      <section className="py-20 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-sm font-mono text-muted-foreground mb-12 uppercase tracking-widest">Technologies & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 justify-items-center opacity-80">
             {/* Simple Icons/Text Placeholders */}
             <div className="flex flex-col items-center gap-2"><Code2 className="w-8 h-8 text-primary" /><span className="font-mono text-sm">React</span></div>
             <div className="flex flex-col items-center gap-2"><Code2 className="w-8 h-8 text-secondary" /><span className="font-mono text-sm">TypeScript</span></div>
             <div className="flex flex-col items-center gap-2"><Layers className="w-8 h-8 text-primary" /><span className="font-mono text-sm">Three.js</span></div>
             <div className="flex flex-col items-center gap-2"><Database className="w-8 h-8 text-secondary" /><span className="font-mono text-sm">Node.js</span></div>
             <div className="flex flex-col items-center gap-2"><Globe className="w-8 h-8 text-primary" /><span className="font-mono text-sm">Next.js</span></div>
             <div className="flex flex-col items-center gap-2"><Cpu className="w-8 h-8 text-secondary" /><span className="font-mono text-sm">Python</span></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Work History</h2>
              <p className="text-muted-foreground leading-relaxed">
                My professional journey across different companies and roles, focusing on solving complex problems and delivering value.
              </p>
            </div>
            <div className="md:w-2/3">
              <ExperienceTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that demonstrate my technical capabilities and design sensibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="OrderIt Web App" 
              description="Real-time order app for restaurants"
              image={project1Img}
              tags={["React", "Node", "Mongo"]}
              repo="https://github.com/saiviru/OrderIt-FrontEnd"
            />
            <ProjectCard 
              title="Koovi Mobile App" 
              description="Cross-platform mobile application for personal you."
              image={[project2Img1, project2Img2, project2Img3]}
              tags={["React Native", "Redux", "Firebase"]}
              link="https://koovi.app/"
            />
            <ProjectCard 
              title="WebGL Visualizer" 
              description="Interactive 3D audio visualizer built for a music streaming service."
              image={project3Img}
              tags={["Three.js", "WebGL", "GLSL"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center bg-card/50 backdrop-blur-xl border border-border p-12 rounded-2xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Let's work together</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm open to new full-time opportunities.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              <a href="mailto:saikiran@saiviru.in" className="flex items-center justify-center gap-3 px-6 py-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors border border-border">
                <Mail className="w-5 h-5 text-primary" />
                <span>saikiran@saiviru.in</span>
              </a>
              <a href="tel:+917416343790" className="flex items-center justify-center gap-3 px-6 py-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors border border-border">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+91 7416 343 790</span>
              </a>
            </div>

            <a href="/SaiKiran_Boga_Resume.pdf" download="SaiKiran_Boga_Resume.pdf" className="cursor-pointer group">
              <Button size="lg" className="w-full md:w-auto font-bold gap-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                <FileDown className="w-4 h-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10" />
      </section>

      <footer className="py-8 border-t border-border/50 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://www.linkedin.com/in/saiviru/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/saiviru/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/saiviru" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p>© {new Date().getFullYear()} by Saiviru</p>
        </div>
      </footer>
    </div>
  );
}