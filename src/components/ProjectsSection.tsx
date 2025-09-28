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

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
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

  const featuredProjects = projects.filter((project) => project.featured);
  const uiUxProjects = featuredProjects.filter(
    (project) => project.category === "uiux"
  );
  const postsProjects = featuredProjects.filter(
    (project) => project.category === "posts"
  );
  const webDevelopmentProjects = featuredProjects.filter(
    (project) => project.category === "web"
  );

  const handleImageClick = (project) => {
    const link = project.webLink || project.prototypeLink;
    if (link) {
      window.open(link, "_blank");
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-base-200 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23F2F2EB%22%20fill-opacity%3D%220.05%22%3E%3Cpolygon%20points%3D%2250%200%2060%2040%20100%2050%2060%2060%2050%20100%2040%2060%200%2050%2040%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* UI/UX Designing Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-semibold text-base-content mb-12 text-center">
            UI/UX Designing Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiUxProjects.map((project) => (
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
                    {project.prototypeLink &&
                      project.tech.includes("Web App Interface Designing") && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
                            onClick={() =>
                              window.open(project.originalWebsiteLink, "_blank")
                            }
                          >
                            View Original Website
                          </Button>
                          <Button
                            variant="default"
                            size="sm"
                            className="text-xs bg-primary text-white hover:bg-primary/80 transition-colors duration-300"
                            onClick={() =>
                              window.open(project.prototypeLink, "_blank")
                            }
                          >
                            View My Redesign
                          </Button>
                        </>
                      )}
                    {project.prototypeLink &&
                      !project.tech.includes("Web App Interface Designing") && (
                        <Button
                          variant="default"
                          size="sm"
                          className="text-xs bg-primary text-white hover:bg-primary/80 transition-colors duration-300"
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

        {/* Posts Designing Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-semibold text-base-content mb-12 text-center">
            Posts Designing Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsProjects.map((project) => (
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
                      className="text-xs bg-primary text-white hover:bg-primary/80 transition-colors duration-300"
                      onClick={() => openModal(project.image)}
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Web Designing and Development Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-semibold text-base-content mb-12 text-center">
            Web Designing & Development Projects
          </h3>
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

        {/* Other Projects */}
        {projects.filter((project) => !project.featured).length > 0 && (
          <div>
            <h3 className="text-3xl font-playfair font-semibold text-base-content mb-12 text-center">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => !project.featured)
                .map((project) => (
                  <Card
                    key={project.title}
                    className="hover:scale-105 transition-all duration-300 border-0"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-white">
                        {project.title}
                      </CardTitle>
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

      {/* Modal for Post Design */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md p-0">
          <div className="relative w-full h-full">
            <img
              src={selectedImage}
              alt="Post Design"
              className="w-full h-full object-contain"
            />
          </div>
          <Button
            variant="ghost"
            className="absolute top-[-50px] right-[-60px] text-white hover:text-gray-300"
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
