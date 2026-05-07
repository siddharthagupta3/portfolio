'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft, FaCertificate, FaRegCalendarAlt, FaUniversity, FaCheckCircle, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { certificatesData } from '../../../data/certificatesData';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const CertificateDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  
  const certificate = certificatesData.find(c => c.id === id);

  if (!certificate) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Certificate Not Found</h1>
        <Link href="/#certificates" className="text-primary hover:underline flex items-center gap-2">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <button 
              onClick={() => router.back()}
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                <FaArrowLeft />
              </div>
              <span className="font-medium">Back to Portfolio</span>
            </button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Certificate Showcase */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative group">
                {/* Decorative Background Glow */}
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Image Container */}
                <div className="relative glass-card p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                  <div className="aspect-auto bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center min-h-[400px]">
                    <img 
                      src={certificate.image} 
                      alt={certificate.title} 
                      className="max-w-full max-h-[700px] object-contain shadow-2xl"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md border border-white/20 p-3 rounded-xl flex items-center gap-3 shadow-2xl">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-black">
                      <FaAward size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Verified</div>
                      <div className="text-xs font-bold text-white">Authentic Certificate</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Certificate Details */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="sticky top-32">
                <div className="mb-8">
                  <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    Official Certification
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-gradient">
                    {certificate.title}
                  </h1>
                  <p className="text-xl text-gray-400 font-medium">
                    {certificate.issuer}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-xl border border-white/5 bg-white/5">
                      <div className="flex items-center gap-3 text-primary mb-1">
                        <FaRegCalendarAlt size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Issue Date</span>
                      </div>
                      <div className="text-sm font-bold">{certificate.date}</div>
                    </div>
                    <div className="glass-card p-4 rounded-xl border border-white/5 bg-white/5">
                      <div className="flex items-center gap-3 text-primary mb-1">
                        <FaUniversity size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Issuer</span>
                      </div>
                      <div className="text-sm font-bold truncate">{certificate.issuer.split(' ')[0]}</div>
                    </div>
                  </div>

                  {/* Full Description */}
                  <div className="glass-card p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <FaCertificate className="text-primary" /> Certificate Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {certificate.fullDescription}
                    </p>
                  </div>

                  {/* Skills/Tags */}
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 px-2">Key Skills Validated</h3>
                    <div className="flex flex-wrap gap-2">
                      {(certificate.skills || certificate.tags).map((skill, i) => (
                        <div 
                          key={i} 
                          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
                        >
                          <FaCheckCircle className="text-primary text-[10px]" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  {certificate.link && (
                    <a 
                      href={certificate.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full py-4 rounded-xl bg-primary text-black font-black text-center text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Verify Credential Online <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Section: Impact/Details */}
          <motion.div 
            className="mt-20 border-t border-white/10 pt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-8 text-gradient">About this Achievement</h2>
              <div className="space-y-8">
                {certificate.score && (
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-black text-primary/30">01</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Academic Excellence</h4>
                      <p className="text-gray-400">Achieved a consolidated score of {certificate.score}, demonstrating mastery of the subject matter through rigorous proctored examinations and assignments.</p>
                    </div>
                  </div>
                )}
                <div className="flex gap-6 items-start">
                  <div className="text-5xl font-black text-primary/30">{certificate.score ? '02' : '01'}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Practical Application</h4>
                    <p className="text-gray-400">Successfully completed multiple hands-on projects and case studies, proving the ability to apply theoretical concepts to real-world scenarios in {certificate.title.split(' ')[0]}.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-5xl font-black text-primary/30">{certificate.score ? '03' : '02'}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Professional Growth</h4>
                    <p className="text-gray-400">This certification represents a commitment to lifelong learning and staying at the forefront of industry-standard technologies and methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CertificateDetails;
