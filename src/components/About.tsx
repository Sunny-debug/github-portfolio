import React, { useState } from 'react'; // Import useState
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Linkedin, X } from 'lucide-react'; // Import X icon for close button

const About = () => {
  const [showWorkPopup, setShowWorkPopup] = useState(false); // State to control pop-up visibility

  const contactInfo = [
    { icon: MapPin, text: 'Apex, NC' },
    { icon: Phone, text: '(919) 307-6456' },
    { icon: Mail, text: 'padmanabhdesai1524@gmail.com' },
    { icon: Linkedin, text: 'LinkedIn Profile' },
  ];

  return (
    <section id="about" className="pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Padmanabha Desai
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Sr Software Developer | Full Stack Developer | Java Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about creating innovative solutions through code. I specialize in building
              Enterprise grade applications in the Java ecosystem, Web architecture and cloud native applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90"
                onClick={() => setShowWorkPopup(true)} // Set showWorkPopup to true on click
              >
                View My Work Here
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="lg:pl-8">
            <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Summary Section */}
<div className="mt-16">
  <Card className="p-8 bg-gradient-to-r from-background to-muted/30 border-0 shadow-lg">
    <h3 className="text-2xl font-semibold mb-6 text-center">Professional Summary</h3>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-lg font-semibold mb-3 text-primary">Frontend & Mobile Development</h4>
        <p className="text-muted-foreground leading-relaxed">
          Extensive experience developing dynamic and responsive user interfaces using React.js, Angular, React Native, and Android Native. 
          Skilled in implementing complex form logic, real-time dashboards, and interactive components using Redux, Context API, Tailwind CSS, and styled-components. 
          Proven ability to deliver seamless cross-platform experiences, optimizing performance with techniques like lazy loading and code splitting.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3 text-primary">Backend Development & Cloud Architecture</h4>
        <p className="text-muted-foreground leading-relaxed">
          Proficient in developing scalable, event-driven backend systems using Java (Spring Boot), Node.js, and microservices architecture. 
          Expertise in secure API design with OAuth2, JWT, and Spring Security, and asynchronous messaging using Kafka and RabbitMQ. 
          Hands-on experience with AWS and Azure platforms, including Lambda, S3, RDS, AKS, and SageMaker for cloud-native deployments and machine learning integration.
        </p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-8 mt-8">
      <div>
        <h4 className="text-lg font-semibold mb-3 text-primary">Database & System Integration</h4>
        <p className="text-muted-foreground leading-relaxed">
          Strong command over relational and NoSQL databases including MySQL, PostgreSQL, Oracle, Cassandra, and Hadoop for large-scale data handling.
          Integrated third-party systems (e.g., Epic, Cerner, POS) using REST/SOAP APIs and ensured standards compliance with HL7, FHIR, HIPAA, and SAML.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3 text-primary">DevOps & Testing</h4>
        <p className="text-muted-foreground leading-relaxed">
          Experience building and maintaining CI/CD pipelines using Jenkins, Azure DevOps, Git, and Docker. 
          Emphasizes code quality with rigorous testing practices including unit, integration, and E2E testing using JUnit, Mockito, Cypress, Selenium, and Testcontainers.
          Adept at monitoring and logging with AWS CloudWatch, ELK Stack, and Azure Monitor to ensure high availability and performance.
        </p>
      </div>
    </div>
  </Card>
</div>
      </div>

      {/* Work Experience Pop-up Card */}
{showWorkPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
    <Card className="relative p-8 max-w-md w-full bg-background shadow-2xl rounded-lg">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
        onClick={() => setShowWorkPopup(false)}
      >
        <X className="h-5 w-5" />
      </Button>
      <h3 className="text-2xl font-semibold mb-4 text-center text-primary">Professional Experience Overview</h3>
      <div className="max-h-60 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-primary/50 scrollbar-track-muted/20">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Over the course of my career, I have contributed to the design and development of high-impact software systems across healthcare, finance, retail, and customer service domains. I have built full-stack applications with modern frameworks like React, Angular, and React Native, delivering user-centric interfaces for both web and mobile platforms. On the backend, I have engineered scalable microservices and real-time data systems using Java, Spring Boot, Node.js, and Kafka—focusing on performance, modularity, and security.
          <br /><br />
          My work includes developing intelligent mobile assistants for retail associates, enterprise-grade EHR systems for clinicians, real-time chat support platforms, and digital investment tools—all hosted on robust cloud infrastructures (AWS & Azure). I’ve ensured system reliability through thorough testing, CI/CD automation, and implemented industry-standard protocols like OAuth2, HL7, and HIPAA for secure and compliant applications. This diverse experience reflects my strength in building enterprise solutions that are performant, maintainable, and aligned with user and business needs.
        </p>
      </div>
    </Card>
  </div>
)}

    </section>
  );
};

export default About;