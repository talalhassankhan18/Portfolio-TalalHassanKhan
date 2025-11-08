import * as React from "react";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const BrandingProjectsPage = () => {
  const brandingImages = ["/Branding1.jpg", "/Branding2.jpg", "/Branding3.png"];

  return (
    <section
      id="branding-projects"
      className="py-16 bg-gradient-to-b from-base-200 to-white relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23F2F2EB%22%20fill-opacity%3D%220.05%22%3E%3Cpolygon%20points%3D%2250%200%2060%2040%20100%2050%2060%2060%2050%20100%2040%2060%200%2050%2040%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-base-content mb-4">
            Branding Projects
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#AB644B] to-[#72383D] mx-auto rounded-full"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandingImages.map((src, index) => (
            <div
              key={index}
              className="group aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <img
                src={src}
                alt={`Branding Project ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default BrandingProjectsPage;
