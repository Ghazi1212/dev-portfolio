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

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      <section className="relative h-screen flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90" />
          <div className="absolute right-0 top-0 h-screen w-1/2">
            <img
              src={`${basePath}/IMG_3841 (1).png`}
              alt="Ghazi Rahman Shaik"
              className="object-cover w-full h-full opacity-80"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Ghazi Rahman Shaik
              </h1>
              <h2 className="text-3xl md:text-4xl font-light text-blue-400 mb-8">
                Data Engineer
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl">
                Specializing in high-throughput architectures with proven 60%
                cost reduction. Building fault-tolerant pipelines processing 1M+
                events/second using AWS/Azure.
              </p>
              <div className="flex gap-6 flex-wrap">
                <Link
                  href="#work"
                  className="group bg-blue-500 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-blue-600 transition-colors"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#contact"
                  className="px-8 py-4 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Work Experience Section */}
      <section
        id="work"
        className="py-32 bg-gradient-to-b from-slate-100 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Experience
            </h2>
            <div className="h-1 w-20 bg-blue-500" />
          </motion.div>

          <div className="space-y-20">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                  <div className="relative">
                    <div className="mb-6 w-28 h-28 relative rounded-lg overflow-hidden bg-white shadow-md">
                      <img
                        src={`${basePath}${job.logo}`}
                        alt={`${job.company} logo`}
                        className="object-contain p-2 w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                    <p className="text-slate-600">{job.location}</p>
                    <p className="text-slate-500">{job.period}</p>
                  </div>
                  <div>
                    {job.project && (
                      <h4 className="text-xl font-semibold text-slate-800 mb-4">
                        {job.project}
                      </h4>
                    )}
                    <ul className="space-y-4 text-slate-600">
                      {job.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-blue-500">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
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
              {skills.map((skill, index) => (
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
                      {/* Double the items to create seamless loop */}
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
