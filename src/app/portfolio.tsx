"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

interface OrbitPosition {
  left: string;
  top: string;
}

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [orbitPositions, setOrbitPositions] = useState<OrbitPosition[]>([]);

  useEffect(() => {
    const positions: OrbitPosition[] = [...Array(6)].map((_, i) => ({
      left: `${50 + Math.round(45 * Math.cos((2 * Math.PI * i) / 6))}%`,
      top: `${50 + Math.round(45 * Math.sin((2 * Math.PI * i) / 6))}%`,
    }));
    setOrbitPositions(positions);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH
    ? `/${process.env.NEXT_PUBLIC_BASE_PATH}`
    : "";

  const projects = [
    {
      title: "AI-Powered Blog Platform",
      description:
        "High-performance data pipeline processing 100K+ blog posts with semantic search capabilities",
      category: "Featured Project",
      technologies: "Go, React, PostgreSQL, AWS EC2, Hugging Face, LangChain",
      image: "/Screenshot 2025-01-06 at 9.19.png",
    },
    {
      title: "Healthcare Data Integration Platform",
      description:
        "Unified platform integrating prescriber data for 9000+ Walgreens locations",
      category: "Professional Work",
      technologies: "AWS, Kafka, Airflow, Snowflake",
      image: "/Screenshot 2025-01-19 at 5.48.43 AM.png",
    },
    {
      title: "IoT Anomaly Detection System",
      description:
        "Real-time system for equipment failure prediction and maintenance",
      category: "Innovation",
      technologies: "Apache Kafka, Flink, TensorFlow, AWS Lambda",
      image: "/Screenshot 2025-01-19 at 5.48.20 AM.png",
    },
  ];

  const experience = [
    {
      title: "Data Engineer",
      company: "Cognizant Technology Solutions",
      location: "India",
      period: "2022 - 2024",
      logo: "/Cognizant-Logo-sq.png",
      project: "Prescriber Data Pipeline",
      details: [
        "Designed and implemented a scalable data pipeline for Walgreens.",
        "Optimized data processing to handle millions of records with a 40% reduction in runtime.",
        "Used AWS, Snowflake, and PySpark for efficient ETL operations.",
      ],
      technologies: ["AWS", "Snowflake", "PySpark", "Airflow", "Kafka"],
      achievements:
        "40% reduction in processing time | 99.9% pipeline reliability",
    },
    {
      title: "Data Analyst Intern",
      company: "Airports Authority of India",
      location: "India",
      period: "2021",
      logo: "/Airports_Authority_of_India_logo.svg.png",
      details: [
        "Analyzed flight and passenger data to improve airport operations.",
        "Developed dashboards for real-time insights using Power BI.",
        "Performed data cleaning and preprocessing to ensure data accuracy.",
      ],
      technologies: ["Power BI", "Python", "SQL", "Excel"],
      achievements: "15% improvement in operational efficiency",
    },
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", icon: "/Python.png" },
        { name: "Java", icon: "/Java.png" },
        { name: "JavaScript", icon: "/JavaScript.png" },
        { name: "Go", icon: "/go.png" },
      ],
    },
    {
      category: "Cloud Platforms",
      items: [
        { name: "AWS", icon: "/AWS.png" },
        { name: "Azure", icon: "/Azure.png" },
      ],
    },
    {
      category: "Data Engineering",
      items: [
        { name: "PySpark", icon: "/pyspark.png" },
        { name: "Airflow", icon: "/apache airflow.png" },
        { name: "Kafka", icon: "/apache kafka.png" },
        { name: "Snowflake", icon: "/snowflake.png" },
      ],
    },
    {
      category: "Web Development",
      items: [
        { name: "React", icon: "/React.png" },
        { name: "Golang", icon: "/go.png" },
        { name: "PostgreSQL", icon: "/PostgresSQL.png" },
      ],
    },
    {
      category: "Machine Learning",
      items: [
        { name: "Hugging Face", icon: "/huggingface.png" },
        { name: "TensorFlow", icon: "/tensorflow.png" },
      ],
    },
  ];

  const slideAnimation = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-900 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-white"
            >
              GRS
            </motion.h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {["Work", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 shadow-lg py-4">
              {["Work", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-6 py-2 text-white/80 hover:text-white hover:bg-slate-800"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute w-full h-full">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_#1e40af_1px,_transparent_1px)] bg-[length:24px_24px]"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 min-h-screen pb-20">
          <div className="min-h-screen grid lg:grid-cols-2 items-center gap-8 lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 pt-24 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {/* Name Tag */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block"
                >
                  <div className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium tracking-wide mb-4 border border-blue-500/20">
                    DATA ENGINEER
                  </div>
                </motion.div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  <span className="block">Ghazi Rahman</span>
                  <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Shaik
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
                  Building high-performance data pipelines and scalable
                  architectures. Specializing in real-time processing systems
                  with
                  <span className="text-blue-400"> 1M+ events/second</span> and
                  <span className="text-blue-400"> 60% cost optimization</span>.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8">
                  {[
                    { label: "Experience", value: "3+ Years" },
                    { label: "Projects", value: "15+" },
                    { label: "Technologies", value: "12+" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                    >
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16 sm:mb-24">
                  <Link
                    href="#work"
                    className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/25"
                  >
                    Explore Work
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#contact"
                    className="group px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 text-white flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/5"
                  >
                    Get in Touch
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Image & Decorative Elements */}
            <div className="relative order-1 lg:order-2 flex justify-center mt-20 sm:mt-24 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl" />

                {/* Main Image */}
                <div className="relative z-10 w-64 sm:w-80 lg:w-auto aspect-square rounded-full overflow-hidden border-4 border-white/10">
                  <img
                    src={`${basePath}/IMG_3841 (1).png`}
                    alt="Ghazi Rahman Shaik"
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Decorative Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border-4 border-dashed border-blue-500/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-8 border-4 border-dashed border-blue-500/10 rounded-full"
                />

                {/* Tech Icons Orbit */}
                <div className="hidden lg:block">
                  {orbitPositions.map((position, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center"
                      style={position}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    >
                      <div className="w-6 h-6 text-blue-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer hover:text-white/80 transition-colors"
          onClick={() =>
            document
              .getElementById("work")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Work Experience Section */}
      <section
        id="work"
        className="py-32 bg-gradient-to-b from-slate-100 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Professional Journey
            </h2>
            <div className="h-1 w-20 bg-blue-500" />
          </motion.div>

          <div className="space-y-24">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative">
                  {/* Timeline connector */}
                  {index !== experience.length - 1 && (
                    <div className="absolute left-[45px] top-28 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-transparent" />
                  )}

                  <div className="grid lg:grid-cols-[100px_1fr] gap-8">
                    {/* Timeline and logo */}
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-24 h-24 rounded-xl overflow-hidden bg-white shadow-lg ring-4 ring-white"
                      >
                        <img
                          src={job.logo}
                          alt={`${job.company} logo`}
                          className="w-full h-full object-contain p-2"
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
                        {/* Left column */}
                        <div>
                          <div className="flex flex-wrap items-baseline gap-3 mb-4">
                            <h3 className="text-2xl font-bold text-slate-900">
                              {job.title}
                            </h3>
                            <span className="text-blue-600 font-semibold">
                              {job.company}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 text-slate-600 mb-6">
                            <span>{job.location}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-400" />
                            <span>{job.period}</span>
                          </div>

                          {job.project && (
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-slate-800 mb-2">
                                Key Project
                              </h4>
                              <p className="text-blue-600">{job.project}</p>
                            </div>
                          )}

                          <div className="space-y-3">
                            {job.details.map((detail, idx) => (
                              <div key={idx} className="flex gap-3 items-start">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                <p className="text-slate-700">{detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right column */}
                        <div className="space-y-6">
                          {job.technologies && (
                            <div>
                              <h4 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {job.technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {job.achievements && (
                            <div>
                              <h4 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                                Key Achievements
                              </h4>
                              <div className="p-4 bg-green-50 rounded-lg">
                                <p className="text-green-700 text-sm">
                                  {job.achievements}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-blue-500" />
          </motion.div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div
                    className={`${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <span className="text-blue-400 font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold mt-2 mb-4 text-white">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-6">{project.description}</p>
                    <p className="text-sm text-slate-400 font-mono">
                      {project.technologies}
                    </p>
                  </div>
                  <div
                    className={`${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-800">
                      <img
                        src={`${basePath}${project.image}`}
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-32 bg-gradient-to-b from-blue-900 to-slate-900"
      >
        <div className="max-w-8xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-wide">
              Technical Skills
            </h2>
            <div className="h-1 w-20 bg-blue-500" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-center md:text-left"
            >
              <p className="text-xl text-slate-300 max-w-xl mx-auto md:mx-0">
                With expertise in data engineering and cloud technologies, I
                specialize in building scalable data platforms and real-time
                processing systems that drive business value while ensuring
                optimal performance and compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12 overflow-hidden"
            >
              {skills.map((skill) => (
                <div key={skill.category} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {skill.category}
                    </h3>
                  </div>

                  <div className="overflow-hidden relative">
                    <motion.div
                      className="flex gap-4 whitespace-nowrap"
                      variants={slideAnimation}
                      animate="animate"
                    >
                      {[...skill.items, ...skill.items].map(
                        (item, itemIndex) => (
                          <div
                            key={`${item.name}-${itemIndex}`}
                            className="px-11 py-3 bg-slate-300 rounded-full text-black text-sm 
                                 border border-blue-700/50 transform hover:scale-105 hover:bg-blue-800
                                 transition-all duration-300 ease-in-out inline-flex items-center gap-2"
                          >
                            <img
                              src={`${basePath}${item.icon}`}
                              alt={`${item.name} icon`}
                              className="w-9 h-9 object-contain"
                            />
                            {item.name}
                          </div>
                        )
                      )}
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Looking to build innovative data solutions? Let&apos;s discuss how
              we can work together.
            </p>
            <div className="flex justify-center gap-8">
              <Link
                href="mailto:ghazishaik5@gmail.com"
                className="bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-full text-white"
              >
                <Mail className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ghazi-rahman-shaik/"
                className="bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-full text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/Ghazi1212"
                className="bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-full text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>

            <div className="mt-12 inline-flex items-center gap-4 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>ghazishaik5@gmail.com</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">GRS</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400">Data Engineer</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-sm text-gray-500">
                © 2024 Ghazi Rahman Shaik. All rights reserved.
              </span>
              <span className="hidden md:block text-gray-500">|</span>
              <span className="text-sm text-gray-500">Los Angeles, CA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
