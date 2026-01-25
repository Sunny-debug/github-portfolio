
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Alabama At Birmingham',
      location: 'Birmingham, US',
      duration: 'Jan 2023 - Dec 2024',
      gpa: '3.6 GPA',
      type: 'Masters'
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'TKR College of Engineering and Technology',
      location: 'Hyderabad, India',
      duration: 'Graduated June 2018',
      gpa: '8.13 GPA',
      type: 'Bachelors'
    }
  ];

  const project = {
    title: 'Decentralized Procurement System on Ethereum',
    description: 'Designed and engineered a robust, blockchain-enabled procurement system focused on enhancing security and operational oversight. My contributions included developing the core logic for maintaining the complete supply chain state on the Ethereum blockchain, ensuring that all procurement order details and associated transactions from vendors are immutably stored and accessible. This project delivered a highly resilient and transparent platform for managing critical supply chain data.',
    technologies: ['Blockchain', 'Ethereum', 'Smart Contracts', 'Supply Chain Management']
  };

  return (
    <section id="education" className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">Academic background and achievements</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-600/5">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">
                      {edu.type}
                    </Badge>
                    <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary">{edu.institution}</h3>
                  <p className="text-muted-foreground">{edu.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{edu.duration}</span>
                    <Badge variant="outline" className="font-semibold">
                      GPA: {edu.gpa}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Project */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Academic Project</h3>
          <Card className="bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <Badge variant="secondary" className="mt-2">Major Project</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
