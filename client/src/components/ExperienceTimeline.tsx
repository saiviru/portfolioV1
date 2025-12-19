import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "TechNova Solutions",
    period: "2022 - Present",
    description: "Leading the frontend team in rebuilding the core product dashboard. Improved performance by 40% and implemented a new design system.",
    tech: ["React", "TypeScript", "Next.js", "Three.js"]
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Quantum Systems",
    period: "2019 - 2022",
    description: "Developed interactive data visualization tools for financial clients. Collaborated with UX designers to create intuitive interfaces.",
    tech: ["Vue.js", "D3.js", "Node.js", "AWS"]
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "Creative Web Agency",
    period: "2017 - 2019",
    description: "Built responsive websites for various clients. Maintained legacy codebases and implemented new features using modern JavaScript.",
    tech: ["JavaScript", "HTML/CSS", "jQuery", "PHP"]
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="relative border-l border-muted ml-3 md:ml-6 space-y-12">
      {experiences.map((exp, index) => (
        <motion.div 
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Dot */}
          <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
            <span className="inline-flex items-center text-sm text-muted-foreground font-mono mt-1 sm:mt-0">
              <Calendar className="w-3.5 h-3.5 mr-2" />
              {exp.period}
            </span>
          </div>
          
          <div className="flex items-center text-secondary font-medium mb-3">
            <Briefcase className="w-4 h-4 mr-2" />
            {exp.company}
          </div>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {exp.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span 
                key={t} 
                className="text-xs font-mono px-2 py-1 rounded bg-muted text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}