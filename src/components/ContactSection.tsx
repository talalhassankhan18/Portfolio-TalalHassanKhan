import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Mail, Linkedin, Github, Instagram } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+92-319-2590810",
      href: "https://wa.me/923192590810"
    },
    {
      icon: Mail,
      label: "Email",
      value: "talalhassankhan2003@gmail.com",
      href: "mailto:talalhassankhan2003@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/talalhassankhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/talalhassankhan18",
      color: "text-gray-800"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/talalphotomural?igsh=MXN6dGw2aTB3azhxeA==",
      color: "text-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Reach out to me directly to discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Get in touch Card */}
          <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-base-content text-center">Get in touch</CardTitle>
              <CardDescription className="text-base-content/70 text-center">
                Reach out directly to discuss your project ideas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-base-200 transition-all duration-200 group hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors duration-200" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-base-content/60">{item.label}</div>
                    <div className="text-base-content group-hover:text-primary transition-colors duration-200">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Follow me Card */}
          <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-xl font-playfair text-base-content text-center">Follow me & Get Started</CardTitle>
              <CardDescription className="text-base-content/70 text-center">
                Connect with me and start your project today.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-base-200 hover:bg-secondary hover:text-white transition-all duration-200 group hover:scale-110"
                  >
                    <social.icon className={`w-5 h-5 ${social.color}`} />
                  </a>
                ))}
              </div>
            </CardContent>
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-lg text-white h-full flex flex-col justify-center items-center">
                <h3 className="text-xl font-playfair font-semibold mb-2">Ready to start your project?</h3>
                <p className="text-white/90 mb-4">
                  Let's discuss your ideas and create something amazing together.
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-200"
                  onClick={() => window.open('https://wa.me/923192590810', '_blank')}
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;