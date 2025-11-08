import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/branding-projects" element={<BrandingProjectsPage />} />
          <Route path="/uiux-projects" element={<UIUXProjectsPage />} />
          <Route path="/web-projects" element={<WebProjectsPage />} />
          <Route path="/posts-projects" element={<PostsProjectsPage />} />
          {/* Catch-all route must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
