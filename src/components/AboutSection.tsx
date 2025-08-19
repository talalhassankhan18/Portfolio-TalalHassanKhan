import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Paintbrush,
  GitBranch,
  Video,
  Globe,
  Layout,
  Github,
  Figma,
  Palette,
  Server,
  BarChart,
  Users,
  Star,
  Briefcase,
} from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Next.js", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "React", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "TypeScript", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "Node.js", icon: <Server className="w-4 h-4 mr-2" /> },
    { name: "Python", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "MongoDB", icon: <Database className="w-4 h-4 mr-2" /> },
    { name: "Tailwind CSS", icon: <Paintbrush className="w-4 h-4 mr-2" /> },
    { name: "REST APIs", icon: <Globe className="w-4 h-4 mr-2" /> },
    { name: "PHP", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "Laravel", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "UI/UX Design", icon: <Layout className="w-4 h-4 mr-2" /> },
    { name: "Figma", icon: <Figma className="w-4 h-4 mr-2" /> },
    { name: "Git", icon: <GitBranch className="w-4 h-4 mr-2" /> },
    { name: "Graphic Designing", icon: <Palette className="w-4 h-4 mr-2" /> },
    { name: "Video Editing", icon: <Video className="w-4 h-4 mr-2" /> },
    { name: "HTML", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "CSS", icon: <Paintbrush className="w-4 h-4 mr-2" /> },
    { name: "JavaScript", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "Machine Learning", icon: <BarChart className="w-4 h-4 mr-2" /> },
    { name: "Data Science", icon: <BarChart className="w-4 h-4 mr-2" /> },
  ];

  const tools = [
    { name: "VS Code", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "MongoDB", icon: <Database className="w-4 h-4 mr-2" /> },
    { name: "MySQL", icon: <Database className="w-4 h-4 mr-2" /> },
    { name: "Vercel", icon: <Server className="w-4 h-4 mr-2" /> },
    { name: "GitHub", icon: <Github className="w-4 h-4 mr-2" /> },
    { name: "Figma", icon: <Figma className="w-4 h-4 mr-2" /> },
    { name: "Adobe Illustrator", icon: <Palette className="w-4 h-4 mr-2" /> },
    { name: "Adobe Photoshop", icon: <Palette className="w-4 h-4 mr-2" /> },
    { name: "Collab", icon: <Users className="w-4 h-4 mr-2" /> },
    { name: "Kaggle", icon: <BarChart className="w-4 h-4 mr-2" /> },
    { name: "Spider", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "Anaconda Navigator", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "Streamlit", icon: <Layout className="w-4 h-4 mr-2" /> },
  ];

  const stats = [
    {
      value: "50+",
      label: "Projects Completed",
      icon: <Briefcase className="w-6 h-6 mb-2 text-yellow-400" />,
    },
    {
      value: "2+",
      label: "Years of Experience",
      icon: <Star className="w-6 h-6 mb-2 text-yellow-400" />,
    },
    {
      value: "300+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6 mb-2 text-yellow-400" />,
    },
    {
      value: "400+",
      label: "Customer Reviews",
      icon: <Star className="w-6 h-6 mb-2 text-yellow-400" />,
    },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23F2F2EB%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2240%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-base-content mb-6"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-40 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            variants={itemVariants}
          ></motion.div>
          <motion.p
            className="text-lg sm:text-xl text-base-content/70 max-w-3xl mx-auto mt-6 leading-relaxed"
            variants={itemVariants}
          >
            Discover my journey as a passionate developer and designer, crafting
            solutions that blend innovation with user-centric design.
          </motion.p>
        </motion.div>

        {/* Bio and Skills Side by Side */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Bio Section */}
          <Card className="border-0 shadow-xl bg-base-100/90 backdrop-blur-sm h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-playfair font-semibold text-base-content">
                Hello! I'm Talal Hassan Khan
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-6 text-base-content/80 leading-relaxed text-base sm:text-lg">
              <motion.p variants={itemVariants}>
                I'm a passionate full-stack developer with over 3 years of
                experience creating digital solutions that blend beautiful
                design with robust functionality. My journey began with a
                Computer Science degree, but my real education happened through
                countless late nights building projects I was excited about.
              </motion.p>
              <motion.p variants={itemVariants}>
                I specialize in React/Next ecosystems and modern web
                technologies, but I'm equally comfortable diving into backend
                development, database design, and cloud architecture. What
                drives me is the intersection of technology and user experience
                – creating applications that not only work flawlessly but feel
                intuitive and delightful to use.
              </motion.p>
              <motion.p variants={itemVariants}>
                When I'm not coding, you'll find me exploring new design trends,
                contributing to open-source projects, or sharing knowledge
                through technical writing and mentoring. I believe in continuous
                learning and staying ahead of the ever-evolving tech landscape.
              </motion.p>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="border-0 shadow-xl bg-base-100/90 backdrop-blur-sm h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-playfair font-semibold text-base-content">
                Skills & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={itemVariants}
              >
                {skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    className="bg-primary text-white hover:bg-primary/80 hover:scale-105 transition-transform duration-200 text-sm py-2 px-4 flex items-center"
                  >
                    {skill.icon}
                    {skill.name}
                  </Badge>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-xl bg-base-100/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-playfair font-semibold text-base-content">
                Tools & Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={itemVariants}
              >
                {tools.map((tool) => (
                  <Badge
                    key={tool.name}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-200 text-sm py-2 px-4 flex items-center"
                  >
                    {tool.icon}
                    {tool.name}
                  </Badge>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Stats Section */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-base-content mb-6">
              Quick Stats
            </h2>
            <div className="w-40 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg p-6 text-center shadow-xl transition-all duration-300 hover:scale-105"
                variants={itemVariants}
              >
                <div className="flex justify-center">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2 mt-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-12 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
