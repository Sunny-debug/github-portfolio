
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: 'BMO Bank',
      location: 'Chicago, IL',
      position: 'Java Full Stack Developer ',
      duration: 'Sep 2023 -Present',
    achievements: [
  'Architected and developed a goal-driven investment management platform enabling real-time portfolio insights, increasing advisor-client engagement by 40%',
  'Built scalable microservices using Spring Boot, Node.js, and Express.js, reducing backend response latency by 45%',
  'Implemented intelligent asset allocation algorithms based on risk tolerance and market trends, improving investment accuracy and user satisfaction',
  'Enabled real-time communication between clients and advisors via WebSockets and Socket.IO, boosting interaction rate by 60%',
  'Developed secure, customizable dashboards with React and Redux, increasing user retention by 30%',
  'Optimized concurrent data processing using Java 11 parallel streams and multithreading, enhancing backend performance by 50%',
  'Integrated OAuth2 and Spring Security for secure client-server authentication and authorization, achieving 100% compliance with financial regulations',
  'Implemented CI/CD with Jenkins and Docker, reducing release cycle time by 40% and enhancing deployment reliability',
  'Deployed and managed applications on AWS (EC2, RDS, S3, CloudWatch), ensuring 99.95% uptime and scalable resource management',
  'Improved fault tolerance and service resilience with Spring Cloud Netflix (Zuul, Eureka, Ribbon, Hystrix) and RabbitMQ event-driven architecture',
  'Achieved 95%+ unit and integration test coverage using JUnit, Mockito, and Testcontainers, ensuring robust system behavior in production'
],
technologies: [
  'React', 'Redux', 'React Router', 'Bootstrap', 'HTML5', 'CSS3', 'Jest', 'Enzyme',
  'Java 11', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate',
  'Node.js', 'Express.js', 'Socket.IO', 'Spring Security', 'OAuth2',
  'MySQL', 'MongoDB', 'RabbitMQ', 'Feign Client',
  'Spring Cloud Netflix (Zuul, Eureka, Ribbon, Hystrix)', 'Kotlin',
  'AWS (EC2, S3, RDS, EBS, ELB, Auto Scaling, CloudWatch)',
  'Jenkins', 'Docker', 'Kubernetes', 'Git', 'JIRA', 'JUnit', 'Mockito', 'Testcontainers'
]

    },
    {
  company: 'The Home Depot',
  location: 'Atlanta, GA',
  position: 'Full Stack Developer',
  duration: 'Mar 2022 - Aug 2023',
  achievements: [
    'Developed Sidekick, an intelligent mobile assistant improving in-store operations, increasing associate productivity by 20% and reducing out-of-stock incidents by 15%',
    'Engineered performant mobile UIs for Zebra devices using React Native and Android Native, with efficient state handling via Redux and Context API',
    'Implemented real-time dashboards and notification systems using React, WebSockets, and Elasticsearch, enhancing associate responsiveness to live store data',
    'Built secure, event-driven microservices with Java Spring Boot, Node.js, and Kafka for real-time inventory and task management',
    'Integrated AWS SageMaker ML models for demand forecasting and Azure Data Lake with Databricks for large-scale analytics',
    'Orchestrated containerized services using Docker and Kubernetes on Azure AKS, ensuring scalable and resilient deployments',
    'Streamlined deployments using Jenkins and Git in CI/CD pipelines, reducing build and release time by 40%',
    'Established robust API security with Spring Security, OAuth2, and JWT; managed user auth via Firebase Auth on the frontend',
    'Enabled cross-platform data consistency by integrating POS and supply chain systems through secure RESTful APIs and Kafka pipelines',
    'Provisioned hybrid cloud infrastructure with AWS (Lambda, EC2, S3, Aurora) and Azure (IoT Hub, AKS), supporting a highly available microservices ecosystem'
  ],
  technologies: [
    'React.js', 'Redux', 'React Native', 'Android Native', 'WebSockets', 'Firebase Auth',
    'Tailwind CSS', 'styled-components', 'Cypress', 'Protractor', 'Selenium Grid',
    'Java 8', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'Spring Security', 'OAuth2',
    'Node.js', 'Kafka', 'Zuul API Gateway', 'Redis',
    'Oracle', 'Flyway', 'Cassandra', 'Aurora PostgreSQL',
    'Docker', 'Kubernetes', 'Jenkins', 'Git',
    'AWS (EC2, S3, ELB, AMI, Auto Scaling, SageMaker, Lambda)',
    'Azure (IoT Hub, AKS, Data Lake, Databricks)', 'Elasticsearch', 'ELK Stack'
  ]
},
    {
  company: 'Galen Healthcare',
  location: 'Louisville, KY',
  position: 'Software Developer',
  duration: 'Jan 2019 - Feb 2021',
  achievements: [
    'Led frontend development of a responsive Angular SPA for clinicians and staff, improving usability and reducing documentation time by 30%',
    'Developed scalable microservices with Java Spring Boot to support EHR modules such as clinical documentation, patient demographics, and lab integrations',
    'Ensured secure and standards-compliant data exchange by integrating HL7, FHIR, and OAuth2 protocols across EHR and third-party systems like Epic and Cerner',
    'Implemented asynchronous messaging between microservices using Kafka and RabbitMQ to efficiently handle clinical event processing',
    'Optimized SQL and PL/SQL queries with Hibernate for high-volume transactional operations, improving MySQL and PostgreSQL performance in AWS RDS',
    'Automated CI/CD pipelines for Angular and Java services using Azure DevOps, accelerating delivery cycles and improving release reliability',
    'Configured secure file storage using Azure Blob Storage and AWS S3 for HIPAA-compliant document handling',
    'Integrated real-time centralized logging and monitoring with AWS CloudWatch, Elasticsearch, and Azure Monitor, ensuring high availability and traceability',
    'Utilized Hadoop for compressing and managing large-scale clinical datasets, improving storage efficiency and retrieval times',
    'Applied Agile practices including TDD and pair programming to maintain high code quality and rapid iteration cycles'
  ],
  technologies: [
    'HTML5', 'CSS3', 'JavaScript', 'Angular', 'TypeScript', 'Angular CLI',
    'Spring MVC', 'Spring Boot', 'Spring Security', 'Spring Hibernate', 'Spring IOC',
    'OAuth2', 'Kafka', 'RabbitMQ', 'Hibernate ORM', 'MySQL', 'PostgreSQL', 'SQL', 'PL/SQL',
    'Hadoop', 'Azure DevOps', 'Azure Monitor', 'Application Insights', 'Azure Blob Storage',
    'Maven', 'JUnit', 'Mockito', 'AWS (RDS, S3, Lambda, CloudWatch)', 'Elasticsearch',
    'RESTful APIs', 'HL7', 'FHIR', 'HIPAA', 'SAML'
  ]
},
   {
  company: 'Knoah Solutions',
  location: 'Hyderabad, India',
  position: 'Java Developer',
  duration: '06/2017 to 12/2018',
  achievements: [
    'Enhanced high-volume Chat Support Services platform by optimizing routing logic and automating escalation flows, boosting CSAT scores and reducing abandonment rates',
    'Developed responsive agent-facing UI using HTML, CSS, JavaScript, and jQuery, improving interaction efficiency and reducing average handling time',
    'Implemented asynchronous communication with AJAX to enable real-time updates and chat synchronization for seamless user experience',
    'Improved backend performance by leveraging Java 8 Streams and Lambda expressions for efficient chat data processing',
    'Built and consumed RESTful web services using Spring REST, integrating seamlessly with CRM systems and agent dashboards',
    'Managed chat session data and transcripts using MySQL, writing complex SQL queries for analytics and reporting',
    'Ensured modularity and maintainability of backend logic with Spring Core and Spring Servlets',
    'Performed unit testing with JUnit to ensure system stability and minimize production issues in real-time support scenarios',
    'Utilized Git for source control and team collaboration, streamlining development workflows and code versioning'
  ],
  technologies: [
    'HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX',
    'Java 8', 'Streams', 'Lambda expressions',
    'Spring Core', 'Spring Servlets', 'Spring REST',
    'MySQL', 'JUnit', 'Git'
  ]
}

  ];

  return (
    <section id="experience" className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">My journey in software development and data science</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-600/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary">{exp.position}</CardTitle>
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                  <Badge variant="secondary" className="self-start md:self-center">
                    {exp.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
