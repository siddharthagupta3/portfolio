'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobileAlt, FaBrain, FaBolt, FaRocket, FaChartLine, FaRobot } from 'react-icons/fa';
import { LuBrainCircuit } from "react-icons/lu";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import Image from 'next/image';

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, type: "spring", stiffness: 100 }
    }
  };

  const services = [
    {
      icon: <LuBrainCircuit color="#7a73fa" />,
      title: "AI and Machine Learning",
      titleColor: "#7a73fa",
      description: "Creating AI and Machine Learning models with modern technologies, libraries and modules."
    },
    {
      icon: <FaCode color="#fc6f4c" />,
      title: "Web Development",
      titleColor: "#fc6f4c",
      description: "Creating beautiful, functional websites with modern technologies and best practices."
    },
    {
      icon: <TfiMicrosoftAlt color='#FFC107' />,
      title: "Software Development",
      titleColor: "#FFC107",
      description: "Building software that work flawlessly across all devices and platforms."
    },
    {
      icon: <FaMobileAlt color="#65e9f7" />,
      title: "Agentic AI Development",
      titleColor: "#65e9f7",
      description: "Building AI Agents and agentic workflow that work flawlessly across all devices."
    },
    {
      icon: <FaPalette color="#e36dc3" />,
      title: "UI/UX Design",
      titleColor: "#e36dc3",
      description: "Crafting intuitive interfaces with a focus on user experience and aesthetic appeal."
    },
    {
      icon: <FaBolt color="#f7656a" />,
      title: "Performance Optimization",
      titleColor: "#f7656a",
      description: "Ensuring websites load quickly and run smoothly for the best user experience."
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <section id="about" className="section relative overflow-hidden pt-20 pb-32">
        <div className="container mx-auto relative z-10">
          <motion.div
            className="flex flex-col items-center mb-12 md:mb-24 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="absolute -top-12 -left-20 md:-left-10 w-24 h-24 rounded-full bg-primary opacity-20 blur-lg"></div>
            <div className="absolute -bottom-12 -right-20 md:-right-10 w-32 h-32 rounded-full bg-secondary opacity-20 blur-lg"></div>

            <div className="section-badge mb-4 backdrop-blur-sm text-sm md:text-base">About Siddhartha Gupta</div>
          </motion.div>

          <div className="h-10 md:h-20"></div>

          {/* Grid container for image and glass card */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            {/* Image */}
            <motion.div
              className="w-full h-full flex justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
            >
              <div className="w-full max-w-[600px] h-80 md:h-108 rounded-3xl overflow-hidden">
                <Image
                  src="/assets/Image/aboutimg.png"
                  alt="Profile"
                  className="rounded-3xl"
                  width={600}
                  height={700}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </motion.div>

            {/* Glass card */}
            <motion.div
              className="relative z-10 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 1.0 }}
              whileHover={{ scale: 1.04, boxShadow: "10px 10px 10px rgba(254, 98, 0, 0.8)", y: -10 }}
            >
              <div className="glass-card p-4 md:p-8 rounded-2xl shadow-lg border-t border-l border-white/10 relative overflow-hidden w-full min-h-[400px]">
                {/* Gradient overlay */}
                <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
                <div className="absolute bottom-0 left-0 w-32 md:w-40 h-32 md:h-40 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

                <div className="w-full text-left">
                  <h3 className="text-base md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6" style={{ color: 'var(--primary)' }}>
                    An engineer with a passion for creating software. Specialized in AI and software development that
                    can meet your digital needs with a focus on quality, innovation, and user experience.
                  </h3>

                  <p className="mb-2 md:mb-4 text-lg md:text-xl lg:text-2xl text-clear leading-relaxed" style={{ color: 'var(--primary)', fontFamily: 'Allura' }}>
                    Education is not the amount of knowledge that is put into a person&apos;s mind, Education is all about the enlightenment it brings to the mind and soul.
                  </p>

                  <p className="mb-2 md:mb-4 text-lg md:text-xl lg:text-2xl text-clear leading-relaxed" style={{ color: 'var(--primary)', fontFamily: 'Allura' }}>
                    I believe that problem solving is a pretty art that helps in creating intuitive, enjoyable experiences for living beings.
                  </p>

                  <motion.button
                    className="btn btn-tertiary mt-4 md:mt-6 text-sm md:text-base"
                    style={{ fontFamily: 'Lugrasimo' }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'var(--secondary)',
                      color: 'white',
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    Download Resume
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="h-10 md:h-20"></div>

          {/* What can I do for you section */}
          <motion.div
            className="text-center mb-10 md:mb-20 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-gradient inline-block">
              What can I do for you?
            </h3>
            <div className="h-7"></div>
            <p className="glass-card text-l w-full mt-8 text-clear text-center" style={{ color: 'var(--primary)' }}>
              Specialized in software development and AI development that can meet your
              digital needs with a focus on quality, innovation, and user experience. My 
              expertise lies in building scalable applications, integrating machine learning 
              and deep learning algorithms, and optimizing user interfaces for enhanced engagement.
            </p>
            <div className="h-7"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8" style={{ color: 'var(--primary)' }}>
            {services.map((service, index) => (
              <motion.a
                key={index}
                href="#"
                className="glass-card rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border-t border-l border-white/10 h-full group block"
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.05, boxShadow: "10px 10px 10px rgba(254, 98, 0, 0.8)", y: -10 }}
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: index * 0.2, duration: 0.5 } 
                  }
                }}
              >
                <div className="h-16 md:h-24 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 transform group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="text-2xl md:text-4xl z-10" style={{ color: service.icon.props.color }}>
                      {React.cloneElement(service.icon, {
                        color: service.icon.props.color || '#ffffff'
                      })}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-8 md:h-16 bg-gradient-to-t from-background to-transparent z-0"></div>
                </div>

                <div className="p-4 md:p-8">
                  <h4 style={{ color: service.titleColor || "#ffffff" }} className="text-base md:text-lg font-semibold mb-2 md:mb-4 text-clear group-hover:text-gradient transition-colors duration-300">{service.title}</h4>
                  <p className="text-sm md:text-base text-clear" style={{ color: 'var(--primary)' }}>
                    {service.description}
                  </p>

                  <div className="mt-2 md:mt-6"></div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="h-10 md:h-20"></div>
          <div className="flex flex-col items-end mb-12 md:mb-24 relative h-full">
            <motion.div className="flex flex-col ml-0 relative h-1/2 md:h-3/4" style={{ fontFamily: 'Lugrasimo' }}
              initial="hidden"
              whileInView="visible"
            >
              <motion.button
                className="cursor-pointer text-base md:text-lg" style={{ color: 'var(--primary)' }}
                variants={itemVariants}
                whileHover={{ scale: 1.07, color: 'var(--primary)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = '/moreabout';
                }}
              >
                Know more about Siddhartha Gupta
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;