'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const socialMediaLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/siddharthagupta3',
      color: '#ffffff'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/siddharthagupta3',
      color: '#0077b5'
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://instagram.com/siddharthagupta3',
      color: '#e1306c'
    }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-transparent text-white pt-60 lg:pt-80">
        <div className="container mx-auto px-4 text-center relative z-10 translate-y-20 lg:translate-y-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative inline-block"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(255,98,0,0.3)] mx-auto relative z-10">
              <Image
                src="/assets/Image/siddhartha.jpg"
                alt="Siddhartha Gupta"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl z-0 animate-pulse"></div>
          </motion.div>

          <motion.h1
            className="text-8xl md:text-12xl font-bold mb-6"
            style={{ 
              background: 'linear-gradient(135deg, #ff4500, #ff8c00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Luxurious Script',
              filter: 'drop-shadow(0 0 15px rgba(255, 69, 0, 0.6))',
              letterSpacing: '2px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Siddhartha Gupta
          </motion.h1>
          <motion.p
            className="glass-card text-xl md:text-xl mb-8 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.04, boxShadow: "10px 10px 10px rgba(254, 98, 0, 0.8)", y: -10 }}
          >
           Polymaths • Artificial General Intelligence
          </motion.p>
          <div className="h-10"></div>
          <motion.div
            className="flex flex-wrap justify-center gap-8 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialMediaLinks.map((social, index) => (
              <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary"
              style={{ 
                background: 'rgba(0,0,0,1)',
                color: social.color
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: `0 5px 15px ${social.color}40`
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-2xl sm:text-xl">{social.icon}</span>
            </motion.a>
            ))}
          </motion.div>
          <div className="h-10"></div>
          <motion.a
            href="#about"
            onClick={scrollToAbout}
            className="text-2xl animate-pulse text-primary flex items-center justify-center hover:text-opacity-80 transition-colors"
          >
            <FaChevronDown />
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Hero;