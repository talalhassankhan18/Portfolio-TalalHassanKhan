import * as React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects: Project[] = [
    // Web Development Projects (unchanged)
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

    // UI/UX Projects (unchanged)
    {
      title: "Muckdogs Baseball Club Website",
      description:
        "Muckdogs Baseball Club is a modern website UI designed in Figma, showcasing training programs, academy facilities, coaching staff, and success stories while promoting tryouts and community involvement.",
      image: "/Project 10.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/qFSnAgVzpBXjae76RmiZfG/Muckdogs-Baseball-Club?node-id=0-9&p=f&t=IfxC7nzkFHgApdWY-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      originalWebsiteLink: "https://www.muckdogsbaseballclub.com/",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "Darlene Bullock & Associates LLC Website",
      description:
        "Darlene Bullock & Associates is a professional website UI designed in Figma, highlighting federal contracting services, training, and strategic guidance to help businesses succeed with expert-led solutions.",
      image: "/Project 11.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/bWhX0YdlE0JzG8ggsqqzOO/Darlene-Bullock---Associates-LLC?node-id=1-8&p=f&t=jXOfK2F35aafIsyP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      originalWebsiteLink: "https://darlenebullockassociates.com/",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "Cultural Enrichment Center Directory Website",
      description:
        "Cultural Enrichment Center Directory is a modern website UI designed in Figma, highlighting members, events, and partners while enabling users to browse programs, join the community, and support cultural initiatives.",
      image: "/Project 9.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/t8qHy8WQV1MEhvFMMkfHET/Cultural-Enrichment-Center-Directory?t=JncSdrtHrhX6j9Ai-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=2-8",
      originalWebsiteLink: "https://www.culturalenrichmentcenter.org/",
      webLink: null,
      featured: true,
      category: "uiux",
    },

    // Posts Projects (unchanged)
    {
      title: "Habib Jewellery Social Media Post",
      description:
        "A captivating social media post design for Habib Jewellery, showcasing elegant jewelry pieces with vibrant visuals and engaging copy to attract followers.",
      image: "/Post 2.jpg",
      tech: ["Graphic Design", "Adobe Photoshop", "Adobe Illustrator"],
      featured: true,
      category: "posts",
    },
    {
      title: "Muckdogs Web Redesign Showcase Post",
      description:
        "A before-and-after showcase post for the Muckdogs Baseball Club website redesign, highlighting the transformation from old to new design.",
      image: "/Post 1.png",
      tech: ["Graphic Design", "Figma", "Adobe Photoshop"],
      featured: true,
      category: "posts",
    },
  ];

  // Branding Projects - Only using 3 square images
  const brandingProjects = [
    { image: "/Branding1.jpg" },
    { image: "/Branding2.jpg" },
    { image: "/Branding3.png" },
  ];

  const uiUxProjects = projects.filter(
    (p) => p.category === "uiux" && p.featured
  );
  const webDevelopmentProjects = projects.filter(
    (p) => p.category === "web" && p.featured
  );
  const postsProjects = projects.filter(
    (p) => p.category === "posts" && p.featured
  );

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-base-200 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23F2F2EB%22%20fill-opacity%3D%220.05%22%3E%3Cpolygon%20points%3D%2250%200%2060%2040%20100%2050%2060%2060%2050%20100%2040%2060%200%2050%2040%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-base-content mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#AB644B] to-[#72383D] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in web
            development, design, and problem-solving.
          </p>
        </div>

        {/* === BRANDING & PRODUCT DESIGNING (UPDATED) === */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-semibold text-base-content mb-12 text-center">
            Branding and Product Designing
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingProjects.map((project, index) => (
              <div
                key={index}
                className="group aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={`Branding Project ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/branding-projects">
              <Button
                variant="outline"
                className="text-secondary border-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
              >
                View all Brandings <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* === UI/UX DESIGNING (Unchanged) === */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-semibold text-base-content mb-12 text-center">
            UI/UX Designing Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiUxProjects.slice(0, 3).map((project) => (
              <Card
                key={project.title}
                className="group hover:scale-105 transition-all duration-500 border-0 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    onClick={() =>
                      project.prototypeLink &&
                      window.open(project.prototypeLink, "_blank")
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#401B1B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-playfair">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-secondary leading-relaxed">
                    {project.description}
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
                    {project.prototypeLink &&
                      project.tech.includes("Web App Interface Designing") && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs border-secondary text-secondary hover:bg-secondary hover:text-white"
                            onClick={() =>
                              window.open(project.originalWebsiteLink, "_blank")
                            }
                          >
                            Original
                          </Button>
                          <Button
                            variant="default"
                            size="sm"
                            className="text-xs bg-primary text-white hover:bg-primary/80"
                            onClick={() =>
                              window.open(project.prototypeLink, "_blank")
                            }
                          >
                            My Redesign
                          </Button>
                        </>
                      )}
                    {project.prototypeLink &&
                      !project.tech.includes("Web App Interface Designing") && (
                        <Button
                          variant="default"
                          size="sm"
                          className="text-xs bg-primary text-white hover:bg-primary/80"
                          onClick={() =>
                            window.open(project.prototypeLink, "_blank")
                          }
                        >
                          View Prototype
                        </Button>
                      )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/uiux-projects">
              <Button
                variant="outline"
                className="text-secondary border-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
              >
                View all Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* === WEB DEVELOPMENT (Unchanged) === */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-semibold text-base-content mb-12 text-center">
            Web Designing & Development Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevelopmentProjects.slice(0, 3).map((project) => (
              <Card
                key={project.title}
                className="group hover:scale-105 transition-all duration-500 border-0 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    onClick={() =>
                      project.webLink && window.open(project.webLink, "_blank")
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#401B1B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-playfair">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-secondary leading-relaxed">
                    {project.description}
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
                      className="text-xs border-secondary text-secondary hover:bg-secondary hover:text-white"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      GitHub
                    </Button>
                    {project.webLink && (
                      <Button
                        variant="default"
                        size="sm"
                        className="text-xs bg-primary text-white hover:bg-primary/80"
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
          <div className="text-center mt-8">
            <Link to="/web-projects">
              <Button
                variant="outline"
                className="text-secondary border-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
              >
                View all Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* === POSTS DESIGNING (Unchanged) === */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-semibold text-base-content mb-12 text-center">
            Posts Designing Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsProjects.slice(0, 3).map((project) => (
              <Card
                key={project.title}
                className="group hover:scale-105 transition-all duration-500 border-0 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    onClick={() => openModal(project.image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#401B1B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-playfair">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-secondary leading-relaxed">
                    {project.description}
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
                      variant="default"
                      size="sm"
                      className="text-xs bg-primary text-white hover:bg-primary/80"
                      onClick={() => openModal(project.image)}
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/posts-projects">
              <Button
                variant="outline"
                className="text-secondary border-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
              >
                View all Designs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal for Post Design */}
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
    </section>
  );
};

export default ProjectsSection;
