import * as React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  webLink?: string | null;
  githubLink?: string;
  prototypeLink?: string;
  originalWebsiteLink?: string;
  platformFocus?: string;
  featured: boolean;
  category: string;
}

const WebProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "Lawyer Case Diary",
      description:
        "Lawyer’s Diary is a case management platform that helps lawyers organize cases, track hearings, manage clients, handle fees, and stay updated with tasks and notifications.",
      image: "/Project 7.png",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT Authentication",
        "Cloudinary",
        "Vercel",
      ],
      webLink: null,
      githubLink: "https://github.com/talalhassankhan18/lawyercasediary",
      featured: true,
      category: "web",
    },
    {
      title: "SalonSphere",
      description:
        "SalonSphere is an AI-powered platform that connects users with salons and beauty products, offering seamless booking, personalized recommendations, and vendor management.",
      image: "/Project 1.jpg",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "NextAuth.js",
        "Cloudinary",
        "Python",
        "scikit-learn",
        "Vercel",
      ],
      webLink: "https://salonsphere.vercel.app/",
      githubLink: "https://github.com/talalhassankhan18/Salonsphere",
      featured: true,
      category: "web",
    },
    {
      title: "TrendyLivings",
      description:
        "TrendyLivings is a Laravel-based platform that connects contractors, construction material providers, home décor experts, and clients to streamline home and corporate space development.",
      image: "/Project 2.jpeg",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Laravel",
        "PHP",
        "Node.js",
        "phpMyAdmin",
      ],
      webLink: null,
      githubLink: "https://github.com/talalhassankhan18/trendylivings",
      featured: true,
      category: "web",
    },
  ];

  const webDevelopmentProjects = projects.filter(
    (project) => project.category === "web"
  );

  const handleImageClick = (project: Project) => {
    const link = project.webLink || project.prototypeLink;
    if (link) {
      window.open(link, "_blank");
    }
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <section
      id="web-projects"
      className="py-24 bg-gradient-to-b from-base-200 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23F2F2EB%22%20fill-opacity%3D%220.05%22%3E%3Cpolygon%20points%3D%2250%200%2060%2040%20100%2050%2060%2060%2050%20100%2040%2060%200%2050%2040%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-base-content mb-6">
            Web Designing & Development Projects
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#AB644B] to-[#72383D] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Explore all my web designing and development projects showcasing
            robust and scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDevelopmentProjects.map((project) => (
            <Card
              key={project.title}
              className="group hover:scale-105 transition-all duration-500 border-0 overflow-hidden"
            >
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
                <CardTitle className="text-xl font-playfair">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-secondary leading-relaxed">
                  {project.description}
                  {project.platformFocus && (
                    <span className="block text-sm text-gray-400 mt-1">
                      {project.platformFocus}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
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
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    GitHub
                  </Button>
                  {project.webLink && (
                    <Button
                      variant="default"
                      size="sm"
                      className="text-xs bg-primary text-white hover:bg-primary/80 transition-colors duration-300"
                      onClick={() => window.open(project.webLink, "_blank")}
                    >
                      Live Preview
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md p-0">
          <div className="relative w-full h-full">
            <img
              src={selectedImage ?? ""}
              alt="Post Design"
              className="w-full h-full object-contain"
            />
          </div>
          <Button
            variant="ghost"
            className="absolute top-[-50px] right-0 text-white hover:text-gray-300"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={24} />
          </Button>
        </DialogContent>
      </Dialog>
      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default WebProjectsPage;
