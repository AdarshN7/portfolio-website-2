
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#121212] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background opacity-90"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <p className="text-primary font-medium">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              <span className="block">Adarsh</span>
              <span className="block mt-2">
                <span className="text-primary">Frontend</span> Developer
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg">
              I craft modern web applications with React and Next.js, focusing on responsive design, performance optimization, and exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-primary/20 flex items-center justify-center animate-fade-in">
              <div className="absolute w-full h-full rounded-full bg-primary/10 animate-ping"></div>
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-secondary p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-purple-700 overflow-hidden">
                  {/* This is where a profile image would go */}
                  <div className="w-full h-full flex items-center justify-center text-white text-4xl sm:text-5xl font-bold">
                    AD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
