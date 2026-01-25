
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Linkedin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: '(919) 307-6456',
      href: 'tel:+19193076456',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'padmanabhdesai1524@gmail.com',
      href: 'mailto:padmanabhdesai1524@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/padmanabhprofile/',
      color: 'text-blue-700'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Apex, NC',
      href: '#',
      color: 'text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or just having a great conversation about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/5 to-blue-600/5 border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>Let's Connect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group">
                    <a 
                      href={method.href}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-background/50 transition-colors duration-200"
                    >
                      <div className="p-2 bg-background rounded-lg group-hover:shadow-sm transition-shadow">
                        <method.icon className={`h-5 w-5 ${method.color}`} />
                      </div>
                      <div>
                        <p className="font-medium">{method.label}</p>
                        <p className="text-sm text-muted-foreground">{method.value}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-muted/20 border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Currently Available For</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Full-time opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Contract positions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Technical discussions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col justify-center">
            <Card className="bg-gradient-to-br from-primary to-blue-600 text-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Send className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-black hover:bg-white/10"
                    onClick={() => window.location.href = 'mailto:padmanabhdesai1524@gmail.com'}
                  >
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-white text-black hover:bg-white/10"
                    onClick={() => window.location.href = 'tel:+19193076456'}
                  >
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              © 2024 Padmanabha Desai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
