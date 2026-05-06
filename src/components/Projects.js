'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaGithub, FaRegEye, FaStar } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [imageError, setImageError] = useState({});

  const projects = [
    {
      id: 1,
      title: 'Brain Tumor Detection App',
      description: 'A responsive application that helps users to scan their MRI images for brain tumors.',
      image: '/assets/Image/braintumorapp.jpg',
      fallbackImage: '/projects/placeholder.jpg', // Fallback image
      category: ['ML', 'DL', 'Data Science'],
      technologies: ['Python', 'CNN', 'Datasets', 'ML', 'DL', 'Data Science', 'Image Processing', 'NumPy', 'TensorFlow', 'Pandas'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 2,
      title: "Text to Video App",
      description: "A fully responsive web application that transforms text input into professional videos using the Google Gemini API. Features include customizable video templates, AI-driven animation, and seamless integration with content platforms for creators and marketers.",
      image: "/assets/Image/txttoimg.png",
      fallbackImage: '/projects/placeholder.jpg',
      category: ["web", "frontend", "AI"],
      technologies: ["React", "Next.js", "TailwindCSS", "Neon", "Clerk Auth", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "Business Management App",
      description: "A fully responsive web application for small to medium businesses, offering modular tools for CRM, invoicing, task management, and inventory tracking. Built with the Google Gemini API for AI-driven analytics and seamless integrations with third-party tools.",
      image: "/assets/Image/businessmanagement.jpg",
      fallbackImage: '/projects/placeholder.jpg',
      category: ["web", "frontend", "SaaS"],
      technologies: ["React", "Next.js", "TailwindCSS", "Stripe", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A creative portfolio website with smooth animations and a unique design to showcase projects and skills.',
      image: '/assets/Image/portfolio.png',
      fallbackImage: '/projects/placeholder.png',
      category: ['web', 'ui'],
      technologies: ['Javascript', 'Next.js', 'Node.js', 'Framer Motion', 'CSS', 'HTML'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Business Management App',
      description: 'A responsive application for managing business clients with features like invoicing, payment processing, and task management.',
      image: '/assets/Image/busmng.png',
      fallbackImage: '/projects/placeholder.jpg',
      category: ['web', 'api'],
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'An admin dashboard for managing social media accounts with analytics and scheduling features.',
      image: '/assets/Image/socialmedia.jpg',
      fallbackImage: '/projects/placeholder.jpg',
      category: ['web', 'ui'],
      technologies: ['React', 'Redux', 'Material UI', 'D3.js'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  // const filterOptions = [
  //   { value: 'all', label: 'All Projects' },
  //   { value: 'web', label: 'Web Development' },
  //   { value: 'frontend', label: 'Frontend' },
  //   { value: 'fullstack', label: 'Fullstack' },
  //   { value: 'ui', label: 'UI/UX' },
  //   { value: 'api', label: 'API Integration' },
  // ];

  // const handleFilterClick = (filter) => {
  //   setActiveFilter(filter);
  // };

  const handleImageError = (id) => {
    setImageError(prev => ({
      ...prev,
      [id]: true
    }));
    console.log(`Image failed to load for project ${id}`);
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container text-center relative mx-auto px-4">
        <motion.div
          className="text-center mb-20 sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <div className="section-badge mb-5">Projects</div>
          <div className="h-7"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff9400' }}>Technical Projects</h2>
          <div className="h-7"></div>
          <div className="mx-auto mt-8 text-clear flex justify-center items-center text-center" style={{ color: 'var(--primary)' }}>
            <p className="glass-card w-full max-w-2xl mx-auto text-l sm:text-l mt-8 text-clear flex justify-center items-center text-center" style={{ color: 'var(--primary)' }}>
              Feel free to reach out for collaborations, questions, or just to say hello! I&apos;ll do my best to get back to you.
            </p>
          </div>
        </motion.div>
        <div className="h-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card rounded-lg shadow-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1, duration: 0.6, type: "spring" }
                }
              }}
              whileHover={{ boxShadow: "10px 10px 10px rgba(254, 98, 0, 0.8)", y: -10 }}
            >
              <div className="h-48 relative group">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-accent text-dark py-1 px-3 rounded-full text-xs font-semibold flex items-center gap-1">
                    <FaStar /> Featured
                  </div>
                )}

                {/* Image with fallback */}
                <div className="w-full h-full relative">
                  {imageError[project.id] ? (
                    <div className="w-full h-full bg-gradient-to-r from-primary to-secondary animate-gradient flex items-center justify-center">
                      <span className="text-dark text-2xl font-bold text-clear" style={{ color: 'var(--primary)' }}>
                        {project.title}
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      onError={() => handleImageError(project.id)}
                      priority={index < 3} // Prioritize loading for first 3 images
                    />
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" style={{ fontFamily: 'Lugrasimo' }}>
                  <motion.button
                    className="btn btn-primary mx-2 flex items-center gap-2"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'var(--primary)',
                      color: 'white'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <FaRegEye /> View Details
                  </motion.button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-clear" style={{ color: 'var(--primary)' }}>{project.title}</h3>
                <p
                  className="mb-6 text-center"
                  style={{
                    color: 'var(--primary)',
                    fontSize: '0.95rem',
                    textAlign: 'justify', // Optional: spreads text evenly across the full width
                  }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-m mb-1"
                      style={{
                        // backgroundColor: 'var(--primary)',
                        color: 'var(--project-technology)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-6 mt-auto">
                  <motion.button
                    onClick={() => window.open(project.liveLink, '_blank')}
                    className="btn btn-secondary flex items-center justify-center gap-2 text-sm w-[120px]"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'var(--primary)',
                      color: 'white'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <FaLink className="text-xl" /> Live Demo
                  </motion.button>
                  <motion.button
                    onClick={() => window.open(project.githubLink, '_blank')}
                    className="btn btn-secondary flex items-center justify-center gap-2 text-sm w-[120px]"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'var(--secondary)',
                      color: 'white'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <FaGithub /> GitHub
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12 glass-card p-10 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-clear" style={{ color: 'var(--gray-700)' }}>
              No projects found for this category. Please check back later!
            </p>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <div className="h-30"></div>
          <motion.button
            className="btn btn-secondary"
            style={{ fontFamily: 'Lugrasimo' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'var(--secondary)',
              color: 'white'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            onClick={() => {
              window.location.href = '/connect';
            }}>

            Explore Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 