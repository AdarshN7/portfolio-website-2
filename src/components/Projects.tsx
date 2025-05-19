
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Link } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, shopping cart, and secure checkout.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHNlYXJjaHwxMHx8Y29kaW5nfGVufDB8fHx8MTcxNjI0OTgzM3ww&ixlib=rb-4.0.3&q=80&w=1080',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      tech: ['Vue', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHNlYXJjaHw5fHxkZXZlbG9wZXJ8ZW58MHx8fHwxNzE2MjQ5NzYzfDA&ixlib=rb-4.0.3&q=80&w=1080',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 3,
      title: 'Finance Dashboard',
      description: 'An analytics dashboard providing financial insights and visualizations for businesses.',
      tech: ['React', 'Express', 'MySQL', 'Recharts'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHNlYXJjaHw0fHxjb2RpbmclMjBtYWMlMjBib29rfGVufDB8fHx8MTcxNjI0OTg1OXww&ixlib=rb-4.0.3&q=80&w=1080',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium">My Work</p>
          <h2 className="text-3xl font-bold text-white mt-2">Featured Projects</h2>
          <div className="mx-auto border-b-2 border-primary w-16 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-muted rounded-full text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 flex space-x-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    <a href={project.github} target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>
                  <Button size="sm" className="flex items-center gap-2 bg-primary hover:bg-primary/90">
                    <Link size={16} />
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
