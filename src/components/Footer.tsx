import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/talalhassankhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/talalhassankhan18",
      label: "GitHub"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/talalphotomural?igsh=MXN6dGw2aTB3azhxeA==",
      label: "Instagram"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-white py-12 border-t border-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <button
              onClick={scrollToTop}
              className="text-2xl font-playfair font-bold hover:text-primary transition-colors duration-200"
            >
              Talal Hassan Khan
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <a href="#about" className="hover:text-primary transition-colors duration-200">About</a>
            <a href="#projects" className="hover:text-primary transition-colors duration-200">Projects</a>
            <a href="#experience" className="hover:text-primary transition-colors duration-200">Experience</a>
            <a href="#testimonials" className="hover:text-primary transition-colors duration-200">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors duration-200">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-10">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-White hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-white pt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm text-white">
              <span>© {currentYear} Talal Hassan Khan. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;