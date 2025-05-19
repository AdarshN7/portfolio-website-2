
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Layout, Server } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Code className="h-6 w-6 text-primary" />, description: 'React, Next.js, TypeScript, Tailwind CSS, Material UI' },
    { name: 'UI/UX Design', icon: <Layout className="h-6 w-6 text-primary" />, description: 'Responsive Design, Component Libraries, Figma, User Experience' },
    { name: 'Backend Integration', icon: <Server className="h-6 w-6 text-primary" />, description: 'RESTful APIs, GraphQL, Authentication, State Management' },
    { name: 'Deployment & CI/CD', icon: <Globe className="h-6 w-6 text-primary" />, description: 'Vercel, Netlify, GitHub Actions, Docker' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 space-y-4">
            <p className="text-primary font-medium">About Me</p>
            <h2 className="text-3xl font-bold text-white">
              Passionate frontend developer with React & Next.js expertise
            </h2>
            <div className="border-b-2 border-primary w-16"></div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-6">
            <p className="text-muted-foreground">
              With 3 years of experience in frontend development, I specialize in building modern, responsive web applications using React and Next.js. I'm passionate about creating clean, efficient code that delivers exceptional user experiences and solves real business problems.
            </p>
            <p className="text-muted-foreground">
              My approach combines technical expertise with an eye for design, ensuring the applications I build are not only functional and performant but also intuitive and visually appealing. I enjoy working in collaborative environments where I can contribute my skills to create impactful digital solutions.
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
