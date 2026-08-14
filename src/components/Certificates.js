'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaAward, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { certificatesData } from '../data/certificatesData';

const Certificates = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <section id="certificates" className="section relative overflow-hidden !pt-0 pb-32">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="h-7"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            <FaAward className="inline-block mr-3 mb-1" />
            Certifications & Achievements
          </h2>
          <div className="h-7"></div>
          <p className="glass-card text-l w-full mt-8 text-clear text-center" style={{ color: 'var(--primary)' }}>
            A showcase of my certifications, achievements, and community contributions. 
            Click on any certificate to view full details.
          </p>
        </div>

        <div className="h-10"></div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group relative"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div
                className="glass-card rounded-2xl overflow-hidden border border-white/10 relative h-full flex flex-col"
                style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                }}
              >
                {/* Certificate Image Container */}
                <div
                  className="relative w-full bg-white/5 flex items-center justify-center p-4"
                  style={{ height: '350px' }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain shadow-2xl rounded-sm transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  
                  {/* Overlay for Click */}
                  <Link 
                    href={`/certificates/${cert.id}`}
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"
                  >
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 bg-primary/90 text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      View Details <FaExternalLinkAlt size={14} />
                    </motion.div>
                  </Link>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  {/* Title & Issuer */}
                  <h3
                    className="text-xl md:text-2xl font-bold mb-2 text-gradient"
                  >
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <FaCertificate className="text-primary" style={{ fontSize: '0.9rem' }} />
                    <span className="text-sm font-medium text-primary-light">
                      {cert.issuer}
                    </span>
                    <span className="text-sm text-gray-500">
                      • {cert.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm md:text-base leading-relaxed mb-6 text-gray-300 line-clamp-3"
                  >
                    {cert.description}
                  </p>

                  {/* Footer - Tags and Button */}
                  <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {cert.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-white/5 text-gray-400 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/certificates/${cert.id}`}
                      className="text-primary text-sm font-bold hover:underline flex items-center gap-1"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="h-10 md:h-20"></div>
      </div>
    </section>
  );
};

export default Certificates;
