
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app you would handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium">Get In Touch</p>
          <h2 className="text-3xl font-bold text-white mt-2">Contact Me</h2>
          <div className="mx-auto border-b-2 border-primary w-16 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Let's Talk</h3>
            <p className="text-muted-foreground">
              I'm currently open to new opportunities and collaborations in frontend development, particularly with React and Next.js projects. Feel free to reach out if you're looking for a developer who can deliver clean code and exceptional user experiences.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary h-5 w-5" />
                <a href="mailto:adarsh@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  adarsh@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary h-5 w-5" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="text-primary h-5 w-5" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  linkedin.com/in/adarsh
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="text-primary h-5 w-5" />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  github.com/adarsh
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-accent rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm text-white">
                  Name
                </label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="mt-1 bg-muted text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm text-white">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="mt-1 bg-muted text-white"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="text-sm text-white">
                  Subject
                </label>
                <Input 
                  id="subject"
                  type="text" 
                  placeholder="Subject" 
                  required 
                  className="mt-1 bg-muted text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm text-white">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Your Message" 
                  required 
                  className="mt-1 min-h-[120px] bg-muted text-white"
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
