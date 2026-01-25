
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      'React.js & React Native', 
      'Angular & TypeScript', 
      'Redux & Context API', 
      'HTML5, CSS3, Tailwind CSS', 
      'Responsive & Cross-Platform UI'
    ],
    color: 'bg-blue-500'
  },
  {
    category: 'Backend & Microservices',
    skills: [
      'Java (Spring Boot, Spring MVC, Spring Security)', 
      'Node.js & Express.js', 
      'RESTful API Design', 
      'Kafka & RabbitMQ Messaging', 
      'OAuth2, JWT & API Security'
    ],
    color: 'bg-purple-600'
  },
  {
    category: 'Databases & Storage',
    skills: [
      'MySQL & PostgreSQL (RDS, Aurora)', 
      'MongoDB & Cassandra', 
      'Hibernate & Spring Data JPA', 
      'SQL, PL/SQL', 
      'Azure Blob & AWS S3'
    ],
    color: 'bg-green-600'
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS (EC2, S3, Lambda, SageMaker)', 
      'Azure (AKS, IoT Hub, Data Lake)', 
      'Docker & Kubernetes', 
      'CI/CD (Jenkins, Azure DevOps)', 
      'Git & GitHub'
    ],
    color: 'bg-orange-500'
  },
  {
    category: 'Testing & Monitoring',
    skills: [
      'JUnit, Mockito, Cypress', 
      'Selenium Grid & Protractor', 
      'Testcontainers for Integration Tests', 
      'AWS CloudWatch, ELK Stack', 
      'Application Insights'
    ],
    color: 'bg-red-500'
  },
  {
    category: 'Enterprise & Interoperability',
    skills: [
      'HL7 & FHIR Standards', 
      'HIPAA Compliance', 
      'SAML Authentication', 
      'EPIC & Cerner Integration', 
      'System Architecture Design'
    ],
    color: 'bg-teal-500'
  }
];


  return (
    <section id="skills" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Professional Certifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>AWS Solutions Architect Associate (SAA-C03)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Core Python (Basics to Advanced) - ExcelR</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Master Data Science - ExcelR</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Master NLP Workshop - ExcelR</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-blue-600/5">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Notable Achievement</h4>
                <div className="space-y-3">
                  <h5 className="font-medium text-primary">Innovate Alabama Entrepreneurship Hackathon</h5>
                  <p className="text-muted-foreground">
                    Runner-up in the Alabama Entrepreneurship Hackathon powered by UAB Entrepreneurship 
                    and Alabama Power Company.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
