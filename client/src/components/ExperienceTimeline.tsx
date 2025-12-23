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
    id: 2,
    role: "Software Developer",
    company: "Sagarsoft (India) Limited",
    period: "2023, June - 2024, May",
    description: "Worked with Walmart on their internal Stride project, delivering high-quality code on time, effectively managing project timelines, and prioritizing tasks to ensure successful outcomes.\nMentored junior developers, providing guidance on best practices and coding techniques for improved productivity. Conducted webinars on Three.js, AR, and VR.\nLed a team of two in developing and launching the MVP of the Sagar Cements Android application, efficiently managing the entire project lifecycle from initial planning to deployment, and ensuring timely delivery and high-quality standards.",
    tech: ["JavaScript", "React", "React Native", "AWS", "Nginx", "Node.js", "Three.js"]
  },
  {
    id: 3,
    role: "Accessibility Developer",
    company: "Deque Systems, Inc",
    period: "2022, April - 2023, April",
    description: "Specialized in ReactJS and Accessibility. Expertise in delivering exceptional user experiences while adhering to WCAG guidelines. Recognized for showing a can-do attitude and delivering output.\nStrong understanding and application of accessibility on Deque products, to be accessible to everyone by using HTML, JavaScript, CSS, AJAX, and Jenkins\nContributed to Axe for Designers, a Deque product, by managing frontend and backend development, as well as overseeing the deployment process for smooth and efficient operations.",
    tech: ["ReactJS", "Node.js", "TypeScript", "Accessibility", "MongoDB", "AWS", "Cognito"]
  },
  {
    id: 4,
    role: "FrontEnd Developer",
    company: "PlugXR Inc.",
    period: "2019, October - 2022, March",
    description: "Managed development of WebAR module and was responsible for implementing market-ready features, using technologies including ReactJS, Redux, and ThreeJS, a Javascript 3D framework, and HTML, CSS, AJAX.\nMulti-tasked across multiple functions including deployment using Jenkins and roles to generate project results and meet deadlines and organizational expectations.\nIntegral part of team in setting development standards and scheduling sprints and product releases for the team in setting development standards and scheduling sprints and product releases for the product to stay ahead in the market.",
    tech: ["ReactJS", "Node.js", "TypeScript", "Accessibility", "MongoDB", "AWS", "Cognito"]
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
          
          <div className="text-muted-foreground mb-4 leading-relaxed">
            {exp.description.includes('\n') ? (
              <ul className="list-disc list-inside space-y-1">
                {exp.description.split('\n').map((line, idx) => (
                  <li key={idx}>{line.trim()}</li>
                ))}
              </ul>
            ) : (
              <p>{exp.description}</p>
            )}
          </div>
          
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