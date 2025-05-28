import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "UI UX Internship",
      company: "HiSkyTech",
      duration: "Sep 2024 - Apr 2025 • 8 mos",
      location: "Pakistan - Remote",
      description: "Embarked on an exciting journey in UI/UX design, where I honed my skills in crafting user-centered interfaces. I collaborated with cross-functional teams to design intuitive layouts and enhance user satisfaction through iterative feedback and prototyping.",
      responsibilities: [
        "Designed and prototyped user interfaces for multiple projects using modern design tools",
        "Conducted user research and usability testing to refine design solutions",
        "Collaborated with developers to ensure seamless implementation of designs",
        "Created wireframes and high-fidelity mockups to present to stakeholders"
      ],
      technologies: ["UI/UX", "User Experience Design (UED)", "Figma", "Prototyping"]
    },
    {
      title: "Machine Learning Intern",
      company: "CodeXCue - Internship",
      duration: "Jul 2024 - Aug 2024 • 2 mos",
      location: "Pakistan - Remote",
      description: "As a Machine Learning Intern at CodeXCue Software Solutions, I have worked on several cutting-edge projects:",
      responsibilities: [
        "Built an intelligent model for predicting tips which assists the users in making decisions.",
        "Efficiently improved spam detection by combining hyperparameter tuning with other techniques, thereby increasing its accuracy.",
        "Developed a powerful and dynamic model to predict car prices based on key features providing valuable insights for users.",
        "Made an innovative tool to estimate laptop prices based on machine learning technology and ensure precise evaluations are offered."
      ],
      technologies: ["Machine Learning", "Streamlit", "Python"]
    },
    {
      title: "UI/UX Designing Services",
      company: "Fiverr",
      duration: "Jul 2023 - Jul 2024 • 1 yr",
      location: "Pakistan - Remote",
      description: "Provided freelance UI/UX design services on Fiverr, delivering custom solutions for clients worldwide. Focused on creating engaging and functional designs tailored to client needs, enhancing their digital presence.",
      responsibilities: [
        "Designed custom UI/UX solutions for over 20 client projects across various industries",
        "Developed interactive prototypes and wireframes using Figma",
        "Communicated with clients to gather requirements and deliver feedback-driven designs",
        "Optimized designs for usability and accessibility standards"
      ],
      technologies: ["UI/UX", "Figma", "Wireframing", "Prototyping"]
    },
    {
      title: "Video Editor",
      company: "Chicken Recipes YouTube Channel",
      duration: "Jan 2025 - Apr 2025 • 4 mos",
      location: "Pakistan - Remote",
      description: "Worked as a video editor for a Chicken Recipes YouTube channel, enhancing content quality through creative editing and post-production techniques to engage a growing audience.",
      responsibilities: [
        "Edited and produced 15+ video episodes with engaging transitions and effects",
        "Collaborated with content creators to align edits with brand vision",
        "Optimized video content for YouTube SEO and viewer retention",
        "Managed video rendering and export for high-quality uploads"
      ],
      technologies: ["Video Editing", "Adobe Premiere Pro", "After Effects", "YouTube SEO"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            My professional journey in software development, from junior developer to 
            leading complex projects and mentoring teams.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-base-100 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:scale-105">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <CardTitle className="text-xl font-playfair text-base-content">
                          {exp.title}
                        </CardTitle>
                        <Badge variant="outline" className="w-fit text-xs text-primary border-primary">
                          {exp.duration}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        <span className="font-semibold text-accent">{exp.company}</span> • {exp.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base-content/80 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-base-content mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-sm text-base-content/70 flex items-start">
                              <span className="text-primary mr-2 mt-1.5">•</span>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-base-content mb-2 text-sm">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary hover:text-white transition-colors duration-200">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;