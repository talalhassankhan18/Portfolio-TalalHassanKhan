import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "SalonSphere",
      description: "SalonSphere is an AI-powered platform that connects users with salons and beauty products, offering seamless booking, personalized recommendations, and vendor management.",
      image: "public/Project 1.jpg",
      tech: [
        "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB", "Mongoose",
        "NextAuth.js", "Cloudinary", "Python", "scikit-learn", "Vercel"
      ],
      webLink: "https://salonsphere.vercel.app/",
      featured: true
    },
    {
      title: "TrendyLivings",
      description: "TrendyLivings is a Laravel-based platform that connects contractors, construction material providers, home décor experts, and clients to streamline home and corporate space development.",
      image: "public/Project 2.jpeg",
      tech: [
        "HTML5", "CSS3", "JavaScript", "Bootstrap", "Laravel", "PHP", "Node.js", "phpMyAdmin"
      ],
      webLink: null,
      featured: true
    },
    {
      title: "SnapLeads",
      description: "SnapLeads is a modern and intuitive dashboard UI designed in Figma to manage agents, campaigns, leads, and performance metrics for lead generation platforms.",
      image: "public/Project 3.png",
      tech: ["Figma"],
      prototypeLink: "https://www.figma.com/proto/cxajBYgpsCx3AUMnXMG52o/fiver-project?node-id=0-1&t=KQx1wyohf6vZCG92-1",
      webLink: null,
      featured: true
    },
    {
      title: "Crypt2Call",
      description: "Crypt2Call is a secure mobile communication app UI designed in Figma, offering encrypted chats, voice & video calls, and community features — similar to WhatsApp.",
      image: "public/Project 4.png",
      tech: ["Figma"],
      prototypeLink: "https://www.figma.com/proto/ygPQD9V3Bs0GsU8EuTIvqH/Crypt2call?node-id=0-1&t=bF2NcWgja8mACNyA-1",
      webLink: null,
      featured: true
    },
    {
      title: "QuickLift",
      description: "QuickLift is a ride-sharing mobile app UI designed in Figma, allowing users to book and share rides while enabling drivers to register and offer transportation services.",
      image: "public/Project 5.png",
      tech: ["Figma"],
      platformFocus: "Android & iOS (mobile-first design)",
      prototypeLink: "https://www.figma.com/proto/ElXVh6KctRApkVY3O2gk4i/QUICK-LIFT----RIDE-SHARING-APP?t=bF2NcWgja8mACNyA-1",
      webLink: null,
      featured: true
    },
    {
      title: "TaskFlow",
      description: "TaskFlow is a productivity-focused mobile and web app UI designed in Figma to help users efficiently manage, organize, and track their daily tasks.",
      image: "public/Project 6.png", // Assuming a new image, adjust path as needed
      tech: ["Figma"],
      platformFocus: "Mobile & Web-compatible (responsive design)",
      prototypeLink: "https://www.figma.com/proto/6rRsnY5bnCMu1VarHPQ6bI/TaskFlow?t=bF2NcWgja8mACNyA-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&node-id=21-68&starting-point-node-id=4%3A483",
      webLink: null,
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const handleImageClick = (project) => {
    const link = project.webLink || project.prototypeLink;
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-base-200 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23F2F2EB%22%20fill-opacity%3D%220.05%22%3E%3Cpolygon%20points%3D%2250%200%2060%2040%20100%2050%2060%2060%2050%20100%2040%2060%200%2050%2040%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-base-content mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#AB644B] to-[#72383D] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in web development, 
            design, and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <Card key={project.title} className="group hover:scale-105 transition-all duration-500 border-0 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                  onClick={() => handleImageClick(project)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#401B1B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-playfair">{project.title}</CardTitle>
                <CardDescription className="text-secondary leading-relaxed">
                  {project.description}
                  {project.platformFocus && <span className="block text-sm text-gray-400 mt-1">{project.platformFocus}</span>}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary text-white hover:bg-white hover:text-secondary transition-colors duration-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-3xl font-playfair font-semibold text-base-content mb-12 text-center">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <Card key={project.title} className="hover:scale-105 transition-all duration-300 border-0">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-300 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-secondary text-white hover:bg-white hover:text-secondary transition-colors duration-300 text-xs border-secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge
                          variant="outline"
                          className="bg-secondary text-white hover:bg-white hover:text-secondary transition-colors duration-300 text-xs border-secondary"
                        >
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;