import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BrandingProjectsPage from "@/components/BrandingProjectsPage";
import UIUXProjectsPage from "@/components/UIUXProjectsPage";
import WebProjectsPage from "@/components/WebProjectsPage";
import PostsProjectsPage from "@/components/PostsProjectsPage";

const HomePage = () => {
  console.log("Rendering HomePage"); // Debugging log
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/branding-projects" element={<BrandingProjectsPage />} />
        <Route path="/uiux-projects" element={<UIUXProjectsPage />} />
        <Route path="/web-projects" element={<WebProjectsPage />} />
        <Route path="/posts-projects" element={<PostsProjectsPage />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />{" "}
        {/* Fallback route */}
      </Routes>
    </Router>
  );
};

export default Index;
