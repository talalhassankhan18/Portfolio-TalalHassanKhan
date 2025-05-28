import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Instagram } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-100 via-base-200 to-base-300 pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCNDAwNEUiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-10">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1.5 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-inner">
                <img
                  src="/profile.png"
                  alt="Talal Hassan Khan"
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-base-content mb-6 leading-tight">
            Talal <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Hassan Khan</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl font-medium text-primary mb-8 tracking-wide">
            UI/UX Designer
          </h2>
          
          <p className="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            I create intuitive and visually stunning digital experiences. 
            Passionate about designing solutions that enhance user engagement and satisfaction.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToProjects}
              size="lg"
              className="text-lg font-semibold border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mb-12">
            <a
              href="https://www.linkedin.com/in/talalhassankhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Linkedin size={28} className="text-primary group-hover:text-accent transition-colors" />
              </div>
            </a>
            <a
              href="https://github.com/talalhassankhan18"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Github size={28} className="text-primary group-hover:text-accent transition-colors" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/talalphotomural?igsh=MXN6dGw2aTB3azhxeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Instagram size={28} className="text-primary group-hover:text-accent transition-colors" />
              </div>
            </a>
          </div>

          {/* Download Resume */}
          <div className="mt-8">
            <a href="/Resume.pdf" download="Talal_Hassan_Khan_Resume.pdf">
              <Button 
                variant="ghost" 
                className="text-base-content/60 hover:text-primary bg-white/50 backdrop-blur-sm hover:bg-white/80 border border-gray-200/50 transition-all duration-300"
                size="lg"
              >
                <Download size={20} className="mr-3" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;