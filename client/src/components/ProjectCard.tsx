import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string | string[];
  tags: string[];
  link?: string;
  repo?: string;
}

export default function ProjectCard({ title, description, image, tags, link, repo }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm h-full flex flex-col group">
        <div className="relative aspect-video overflow-hidden">
          {Array.isArray(image) ? (
            <div className="flex w-full h-full">
              {image.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${title} ${index + 1}`} 
                  className="flex-1 h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ))}
            </div>
          ) : (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex gap-4 pt-0">
          {
            link &&
          <a href={link || "#"} className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
            <ExternalLink className="w-4 h-4 mr-2" />
            Link
          </a>
          }
          {
            repo && 
          <a href={repo || "#"} className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
            <Github className="w-4 h-4 mr-2" />
            Source
          </a>
          }
        </CardFooter>
      </Card>
    </motion.div>
  );
}