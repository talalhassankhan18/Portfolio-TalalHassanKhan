import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  const skills = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB',
    'Tailwind CSS', 'REST APIs', 'PHP', 'Laravel', 'UI/UX Design', 'Figma', 'Git',
    'Graphic Designing', 'Video Editing', 'HTML', 'CSS', 'JavaScript', 'Machine Learning',
    'Data Science'
  ];

  const tools = [
    'VS Code', 'MongoDB', 'MySQL', 'Vercel', 'GitHub',
    'Figma', 'Adobe illustrator', 'Adobe Photoshop',
    'Collab', 'kaggle', 'Spider', 'Anaconda Navigator', 'Streamit'
  ];

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-playfair font-semibold text-base-content mb-6">
              Hello! I'm Talal Hassan Khan
            </h3>
            <div className="space-y-4 text-base-content/80 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience
                creating digital solutions that blend beautiful design with robust functionality.
                My journey began with a Computer Science degree, but my real education happened
                through countless late nights building projects I was excited about.
              </p>
              <p>
                I specialize in React/Next ecosystems and modern web technologies, but I'm equally
                comfortable diving into backend development, database design, and cloud architecture.
                What drives me is the intersection of technology and user experience – creating
                applications that not only work flawlessly but feel intuitive and delightful to use.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to
                open-source projects, or sharing knowledge through technical writing and mentoring.
                I believe in continuous learning and staying ahead of the ever-evolving tech landscape.
              </p>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-semibold text-base-content mb-4">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-200 text-lg py-2 px-4"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-base-content mb-4">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <Badge
                    key={tool}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-200 text-lg py-2 px-4"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-4">
              Quick Stats
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "2+", label: "Years of Experience" },
              { value: "300+", label: "Happy Clients" },
              { value: "400+", label: "Customer Reviews" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-primary text-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:bg-primary h-40 flex flex-col justify-center items-center transform hover:scale-105"
              >
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-sm font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;