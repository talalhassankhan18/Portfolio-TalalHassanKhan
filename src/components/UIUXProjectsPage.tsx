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
import { X, Search, Grid, List } from "lucide-react"; // Added Grid and List icons
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

const UIUXProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [limitToTen, setLimitToTen] = useState(false); // State for 10-item limit
  const [viewMode, setViewMode] = useState("cards"); // State for view mode: "cards" or "rows"

  const projects: Project[] = [
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
    {
      title: "Darryl Barnes Website",
      description:
        "Darryl Barnes is a website UI designed in Figma, highlighting his role as Maryland State Delegate, showcasing legislation, events, scholarships, and community initiatives while encouraging public involvement.",
      image: "/Project 13.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/iAnm1FUqMil1uwdvaCW4jE/Darryl-Barnes?t=AKNaPpknYFp08U2c-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=0-1",
      originalWebsiteLink: "https://darrylbarnes.net/",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "Baltimore Sports and Life Website",
      description:
        "Baltimore Sports and Life is a website UI designed in Figma, covering local sports news, forums, and events with dedicated sections for the Orioles, Ravens, and Terps, offering fans articles, highlights, and community discussions.",
      image: "/Project 17.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/iOtioGCimULhlaNn5L06Qa/Baltimore-Sports-and-Life?t=AKNaPpknYFp08U2c-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=10-181",
      originalWebsiteLink: "http://baltimoresportsandlife.com/",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "Buddy n Beast Website",
      description:
        "Buddy n Beast is a website UI designed in Figma, featuring premium pet products with a mission-driven approach where every purchase supports shelter animals, combining style, compassion, and community impact.",
      image: "/Project 21.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/nexmqdu7oQLkSgmIfgKTMV/Buddy-N-Beast?t=AKNaPpknYFp08U2c-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=5-5",
      originalWebsiteLink: "https://buddynbeast.com/",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "Cultural Enrichment Center",
      description:
        "Cultural Enrichment Center is a modern website UI designed in Figma, showcasing programs, events, and workshops while encouraging community involvement through arts and cultural diversity.",
      image: "/Project 8.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/8rs9Km5sU9uSityN1EKLhW/Cultural-Enrichment-Center?node-id=1-8&p=f&t=JncSdrtHrhX6j9Ai-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      originalWebsiteLink: "https://www.culturalenrichmentcenter.org/",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "Mecca Recovery Solutions Website",
      description:
        "Mecca Recovery Solutions is a website UI designed in Figma, presenting sober living programs with a focus on empathy, accountability, and community support to guide men on their recovery journey.",
      image: "/Project 12.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/gbYMtcuLVLvXLBeEepmCyj/MECCA-RECOVERY-SOLUTIONS?t=AKNaPpknYFp08U2c-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-8",
      originalWebsiteLink: "https://meccarecovery.com/",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "Md. Washington Minority Companies Association Website",
      description:
        "Md. Washington Minority Companies Association is a website UI designed in Figma, advocating for minority and women-owned businesses by connecting large and small companies, promoting collaboration, certifications, and growth opportunities.",
      image: "/Project 14.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/Tv9TahzynWmQQUlWWgN91H/Md.-Washington-Minority--Companies-Association?t=AKNaPpknYFp08U2c-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=2-656",
      originalWebsiteLink: "https://mwmca.org/home",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "Timely Partner Website",
      description:
        "Timely Partner is a website UI designed in Figma, offering complete event planning solutions with sections for services, gallery, testimonials, and easy consultation booking for clients.",
      image: "/Project 15.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/jARuKpRQN7Kkso0bB9laT0/Timely-Partner?node-id=3-8&p=f&t=AKNaPpknYFp08U2c-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      originalWebsiteLink: "https://www.timelypartner.com/",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "Mattingly Electric Inc. Website",
      description:
        "Mattingly Electric Inc. is a website UI designed in Figma, showcasing professional electrical services from residential repairs to industrial installations, with a focus on reliability, certification, and 24/7 emergency support.",
      image: "/Project 16.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/2rYg5hyRUwVe7fXY0k50n0/Mattingly-Electric-Inc.?t=AKNaPpknYFp08U2c-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=28-5",
      originalWebsiteLink: "https://www.mattinglyelectrical.com/",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "Destiny Unlimited International Website",
      description:
        "Destiny Unlimited International is a website UI designed in Figma, offering professional coaching, consulting, and training services focused on purpose-driven leadership, strategic faith, and transformative personal and business growth.",
      image: "/Project 18.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/ELX4EbzTqLh8PojAEj3NMU/Destiny-Unlimited-International?t=AKNaPpknYFp08U2c-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-2129",
      originalWebsiteLink: "http://www.destinyui.com/",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "The Bin Doctor Website",
      description:
        "The Bin Doctor is a website UI designed in Figma, promoting curbside bin cleaning and sanitization services with an eco-friendly process that kills 99.9% of bacteria, protects families, and supports local communities.",
      image: "/Project 19.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/gd8zKanYducoP9QOXDnrr0/The-Doctor-Bin?node-id=3-466&p=f&t=AKNaPpknYFp08U2c-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      originalWebsiteLink: "https://www.bindoctorusa.com/",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "Carbon Solutions America Website",
      description:
        "Carbon Solutions America is a website UI designed in Figma, showcasing sustainability consulting services that help organizations reduce emissions, cut costs, and enhance brand value with transparent, results-driven strategies.",
      image: "/Project 20.png",
      tech: [
        "Figma",
        "Web App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/xv1RV11wEIaV38MeXJYDHP/Carbon-Solutions-America?node-id=1-8&p=f&t=AKNaPpknYFp08U2c-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      originalWebsiteLink: "https://www.carbonsolutionsamerica.com/",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "SnapLeads",
      description:
        "SnapLeads is a modern and intuitive dashboard UI designed in Figma to manage agents, campaigns, leads, and performance metrics for lead generation platforms.",
      image: "/Project 3.png",
      tech: [
        "Figma",
        "Dashboard Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/cxajBYgpsCx3AUMnXMG52o/fiver-project?node-id=0-1&t=KQx1wyohf6vZCG92-1",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "Crypt2Call",
      description:
        "Crypt2Call is a secure mobile communication app UI designed in Figma, offering encrypted chats, voice & video calls, and community features — similar to WhatsApp.",
      image: "/Project 4.png",
      tech: [
        "Figma",
        "Mobile App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      prototypeLink:
        "https://www.figma.com/proto/ygPQD9V3Bs0GsU8EuTIvqH/Crypt2call?node-id=0-1&t=bF2NcWgja8mACNyA-1",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "QuickLift",
      description:
        "QuickLift is a ride-sharing mobile app UI designed in Figma, allowing users to book and share rides while enabling drivers to register and offer transportation services.",
      image: "/Project 5.png",
      tech: [
        "Figma",
        "Mobile App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      platformFocus: "Android & iOS (mobile-first design)",
      prototypeLink:
        "https://www.figma.com/proto/ElXVh6KctRApkVY3O2gk4i/QUICK-LIFT----RIDE-SHARING-APP?t=bF2NcWgja8mACNyA-1",
      webLink: null,
      featured: true,
      category: "uiux",
    },
    {
      title: "TaskFlow",
      description:
        "TaskFlow is a productivity-focused mobile and web app UI designed in Figma to help users efficiently manage, organize, and track their daily tasks.",
      image: "/Project 6.png",
      tech: [
        "Figma",
        "Mobile App Interface Designing",
        "Wireframing",
        "Prototyping",
      ],
      platformFocus: "Mobile & Web-compatible (responsive design)",
      prototypeLink:
        "https://www.figma.com/proto/6rRsnY5bnCMu1VarHPQ6bI/TaskFlow?t=bF2NcWgja8mACNyA-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&node-id=21-68&starting-point-node-id=4%3A483",
      webLink: null,
      featured: true,
      category: "uiux",
    },
  ];

  const uiUxProjects = projects.filter(
    (project) => project.category === "uiux"
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

  // Filter projects based on search term
  const filteredProjects = uiUxProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Limit to 10 items if toggle is active
  const displayedProjects = limitToTen
    ? filteredProjects.slice(0, 10)
    : filteredProjects;

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      <section id="uiux-projects" className="py-24 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23F2F2EB%22%20fill-opacity%3D%220.1%22%3E%3Cpolygon%20points%3D%2250%200%2060%2040%20100%2050%2060%2060%2050%20100%2040%2060%200%2050%2040%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-extrabold text-base-content mb-6 tracking-tight">
              UI/UX Designing Projects
            </h2>
            <div className="w-36 h-2 bg-gradient-to-r from-[#AB644B] to-[#72383D] mx-auto mb-8 rounded-lg"></div>
            <p className="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
              Explore all my UI/UX designing projects showcasing user-centered
              design and intuitive interfaces.
            </p>
            {/* Search and Filters */}
            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex gap-2">
                {/* <Button
                  variant={limitToTen ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLimitToTen(!limitToTen)}
                  className="rounded-full"
                >
                  {limitToTen ? "Show All" : "Show 10"}
                </Button> */}
                <Button
                  variant={viewMode === "cards" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("cards")}
                  className="rounded-full"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                {/* <Button
                  variant={viewMode === "rows" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("rows")}
                  className="rounded-full"
                >
                  <List className="h-4 w-4" />
                </Button> */}
              </div>
            </div>
          </div>

          {/* Web App Interface Designing Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-base-content mb-6">
              Web App Interface Designing
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter(
                  (project) =>
                    project.tech.includes("Web App Interface Designing") &&
                    !["Crypt2Call", "QuickLift", "TaskFlow"].includes(
                      project.title
                    )
                )
                .map((project) => (
                  <Card
                    key={project.title}
                    className="group border-0 shadow-md hover:shadow-lg overflow-hidden rounded-xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:scale-105"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                        onClick={() => handleImageClick(project)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#401B1B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl font-playfair text-base-content">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base-content/70 leading-relaxed">
                        {project.description}
                        {project.platformFocus && (
                          <span className="block text-sm text-gray-500 mt-1">
                            {project.platformFocus}
                          </span>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-secondary/80 text-white hover:bg-secondary hover:text-white transition-colors duration-300 text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.prototypeLink &&
                          project.tech.includes(
                            "Web App Interface Designing"
                          ) && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors duration-300 rounded-full"
                                onClick={() =>
                                  window.open(
                                    project.originalWebsiteLink,
                                    "_blank"
                                  )
                                }
                              >
                                View Original Website
                              </Button>
                              <Button
                                variant="default"
                                size="sm"
                                className="text-xs bg-primary text-white hover:bg-primary/90 transition-colors duration-300 rounded-full"
                                onClick={() =>
                                  window.open(project.prototypeLink, "_blank")
                                }
                              >
                                View My Redesign
                              </Button>
                            </>
                          )}
                        {project.prototypeLink &&
                          !project.tech.includes(
                            "Web App Interface Designing"
                          ) && (
                            <Button
                              variant="default"
                              size="sm"
                              className="text-xs bg-primary text-white hover:bg-primary/90 transition-colors duration-300 rounded-full"
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
          </div>

          {/* Mobile App Interface Designing Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-base-content mb-6">
              Mobile App Interface Designing
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter((project) =>
                  ["Crypt2Call", "QuickLift", "TaskFlow"].includes(
                    project.title
                  )
                )
                .map((project) => (
                  <Card
                    key={project.title}
                    className="group border-0 shadow-md hover:shadow-lg overflow-hidden rounded-xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:scale-105"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                        onClick={() => handleImageClick(project)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#401B1B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl font-playfair text-base-content">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base-content/70 leading-relaxed">
                        {project.description}
                        {project.platformFocus && (
                          <span className="block text-sm text-gray-500 mt-1">
                            {project.platformFocus}
                          </span>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-secondary/80 text-white hover:bg-secondary hover:text-white transition-colors duration-300 text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.prototypeLink &&
                          project.tech.includes(
                            "Web App Interface Designing"
                          ) && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors duration-300 rounded-full"
                                onClick={() =>
                                  window.open(
                                    project.originalWebsiteLink,
                                    "_blank"
                                  )
                                }
                              >
                                View Original Website
                              </Button>
                              <Button
                                variant="default"
                                size="sm"
                                className="text-xs bg-primary text-white hover:bg-primary/90 transition-colors duration-300 rounded-full"
                                onClick={() =>
                                  window.open(project.prototypeLink, "_blank")
                                }
                              >
                                View My Redesign
                              </Button>
                            </>
                          )}
                        {project.prototypeLink &&
                          !project.tech.includes(
                            "Web App Interface Designing"
                          ) && (
                            <Button
                              variant="default"
                              size="sm"
                              className="text-xs bg-primary text-white hover:bg-primary/90 transition-colors duration-300 rounded-full"
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
          </div>
        </div>

        {/* Modal for Post Design */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl p-0 rounded-xl">
            <div className="relative w-full h-[80vh]">
              <img
                src={selectedImage ?? ""}
                alt="Post Design"
                className="w-full h-full object-contain"
              />
              <Button
                variant="ghost"
                className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={24} />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </section>
      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UIUXProjectsPage;
