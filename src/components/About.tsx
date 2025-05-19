
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Image, Linkedin, Layout, User } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Code className="h-6 w-6 text-primary" />, description: 'React, Vue, Angular, HTML, CSS, JavaScript, TypeScript' },
    { name: 'Backend Development', icon: <Layout className="h-6 w-6 text-primary" />, description: 'Node.js, Express, Django, Laravel, PostgreSQL, MongoDB' },
    { name: 'UI/UX Design', icon: <Image className="h-6 w-6 text-primary" />, description: 'Figma, Adobe XD, Responsive Design, User Experience' },
    { name: 'DevOps & Deployment', icon: <Globe className="h-6 w-6 text-primary" />, description: 'AWS, Docker, CI/CD, Git, GitHub Actions' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 space-y-4">
            <p className="text-primary font-medium">About Me</p>
            <h2 className="text-3xl font-bold text-white">
              Passionate about creating exceptional digital experiences
            </h2>
            <div className="border-b-2 border-primary w-16"></div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-6">
            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize in building modern, responsive, and user-friendly applications. My journey began with a Computer Science degree, followed by roles at various tech companies where I honed my skills in both frontend and backend development.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating clean, efficient code that solves real problems. My approach combines technical expertise with a strong focus on user experience, ensuring that the applications I build are not only functional but also intuitive and enjoyable to use.
            </p>
            
            <div className="pt-8">
              <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card key={index} className="bg-accent border-none">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">{skill.icon}</div>
                        <div>
                          <h4 className="font-medium text-white">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
