import * as React from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Instagram } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-base-100 to-base-300 pt-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1lbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCNDAwNEUiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      <div className="absolute top-10 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        {/* Profile Image - Left on desktop, Full width on mobile */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start animate-fade-in">
          <div className="w-full h-100 sm:h-64 md:h-full max-h-[60vh] md:max-h-[80vh] bg-transparent p-0 shadow-2xl transition-transform hover:scale-[1.02]">
            <img
              src="/pp.png"
              alt="Talal Hassan Khan"
              className="w-full h-full object-contain"
              onError={(e) => {
                console.error("Image failed to load:", e);
              }}
            />
          </div>
        </div>

        {/* Content - Right on desktop, Full width on mobile */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in-up">
          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-base-content mb-3 sm:mb-4 tracking-tight">
            Talal{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hassan Khan
            </span>
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-4 sm:mb-6 tracking-wider uppercase">
            UI/UX Designer
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-base-content/70 max-w-md sm:max-w-lg md:max-w-xl mb-6 sm:mb-8 leading-relaxed">
            Crafting seamless and engaging digital experiences with a passion
            for innovation and user-centric design.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="text-sm sm:text-base font-bold bg-primary text-white hover:bg-primary/80 hover:text-secondary hover:scale-105 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-full px-6 sm:px-8"
            >
              Connect With Me
            </Button>
            <Button
              variant="outline"
              onClick={scrollToProjects}
              size="lg"
              className="text-sm sm:text-base font-bold border-primary text-primary hover:bg-primary/10 hover:text-secondary hover:scale-105 hover:border-primary/80 transition-all duration-300 rounded-full px-6 sm:px-8"
            >
              Explore My Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 sm:gap-6 mb-8 sm:mb-10">
            <a
              href="https://www.linkedin.com/in/talalhassankhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-base-100 shadow-md flex items-center justify-center hover:shadow-lg hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                <Linkedin
                  size={20}
                  className="text-primary group-hover:text-secondary transition-colors"
                />
              </div>
            </a>
            <a
              href="https://github.com/talalhassankhan18"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-base-100 shadow-md flex items-center justify-center hover:shadow-lg hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                <Github
                  size={20}
                  className="text-primary group-hover:text-secondary transition-colors"
                />
              </div>
            </a>
            <a
              href="https://www.instagram.com/talalphotomural?igsh=MXN6dGw2aTB3azhxeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-base-100 shadow-md flex items-center justify-center hover:shadow-lg hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                <Instagram
                  size={20}
                  className="text-primary group-hover:text-secondary transition-colors"
                />
              </div>
            </a>
          </div>

          {/* Download Resume */}
          <div>
            <a
              href="/Resume UI UX Designer.pdf"
              download="Talal_Hassan_Khan_Resume.pdf"
            >
              <Button
                variant="ghost"
                className="text-sm sm:text-base text-base-content/70 hover:text-secondary bg-base-content/80 backdrop-blur-md hover:bg-base-100 hover:scale-105 border border-primary transition-all duration-300 rounded-full"
                size="lg"
              >
                <Download size={16} className="mr-2" />
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
