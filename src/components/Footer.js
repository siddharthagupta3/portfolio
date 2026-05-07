'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaArrowRight, FaPaperPlane, FaYoutube, FaCheck } from 'react-icons/fa';

// Newsletter Form Component
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex flex-col sm:flex-row rounded-xl overflow-hidden border border-gray-700 bg-black/50 backdrop-blur-md p-1 group focus-within:border-[#ff6200] focus-within:shadow-[0_0_15px_rgba(255,98,0,0.2)] transition-all duration-300">
        <div className="flex items-center w-full px-4 text-gray-400">
          <FaEnvelope className="mr-3" />
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com" 
            className="py-3 w-full bg-transparent text-white focus:outline-none placeholder:text-gray-600 text-sm tracking-wide"
            required
          />
        </div>
        <button 
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-[#ff6200] text-white font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all duration-300 rounded-lg sm:rounded-none sm:rounded-r-lg disabled:opacity-50 mt-2 sm:mt-0"
        >
          {status === 'loading' ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : status === 'success' ? (
            <FaCheck />
          ) : (
            <><FaPaperPlane /> <span>Subscribe</span></>
          )}
        </button>
      </div>
      {status === 'success' && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-6 left-0 text-xs text-emerald-400 font-medium"
        >
          Thank you for subscribing!
        </motion.p>
      )}
    </form>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/siddharthagupta3', color: '#ffffff' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/siddharthagupta3', color: '#0077b5' },
    { icon: <FaTwitter />, url: 'https://twitter.com/siddharthagupta3', color: '#1DA1F2' },
    { icon: <FaInstagram />, url: 'https://instagram.com/siddharthagupta3', color: '#E1306C' },
    { icon: <FaEnvelope />, url: 'mailto:siddharthagupta617@gmail.com', color: '#EA4335' },
    { icon: <FaYoutube />, url: 'https://youtube.com', color: '#FF0000' },
  ];

  const footerLinks = [
    { name: 'Home', url: '/#home' },
    { name: 'About', url: '/#about' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Skills', url: '/#skills' },
    { name: 'Contact', url: '/#contact' },
  ];

  return (
    <footer className="py-20 relative overflow-hidden">
      {/* Background is handled globally in layout.js */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Logo & Description */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-3xl font-bold mb-6 inline-block text-gradient"style={{ fontFamily: 'Lugrasimo' }}>
              Siddhartha<span className="text-accent">.</span>
            </Link>
            <p className="mb-8 max-w-md " style={{ fontFamily: 'Allura', fontSize: '1.7rem', color: 'var(--primary)' }}>
              I am a passionate developer focused on creating beautiful and functional software. 
              I combine technical skills with creative problem-solving to deliver exceptional digital experiences.
            </p>
            <div className="flex space-x-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full text-2xl hover:scale-110 transition-transform"
                  style={{ color: social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >

            <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-gray-700/50" style={{ color: '#ff6200' }}>Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="flex items-center w-10 text-gradient-400 hover:text-primary transition-all duration-300 group"
                  >
                    <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaArrowRight />
                    </span>
                    <span className="text-white">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Newsletter & Contact Info */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="">
              <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-gray-700/50" style={{ color: '#ff6200' }}>Newsletter</h3>
              <p className="mb-6 text-white">
                Subscribe to receive updates and latest news direct to your inbox.
              </p>
              <NewsletterForm />

              {/* Contact Info */}
              {/* <div className="mt-8 p-5">
                <h4 className="font-semibold mb-4 text-gradient">Contact Info</h4>
                <ul className="space-y-3 text-sm" style={{ color: 'var(--primary)' }}>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10">📍</span>
                    <span>New York, USA</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10">📧</span>
                    <span>contact@example.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10">📞</span>
                    <span>+1 (123) 456-7890</span>
                  </li>
                </ul>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <motion.div 
          className="pt-8 mt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-500 text-center md:text-left">
            © {currentYear} <Link href="#" className="hover:text-primary">
                           <span className="font-medium" style={{ fontFamily: 'Lugrasimo', color: '#ff6200' }} whilehover={{ scale: 1.05, y: -10 }}>Siddhartha.</span></Link> All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-primary">Cookies Settings</Link>
          </div>
        </motion.div>
        
        <div className="h-8"></div>

        <div className="text-center mt-8 text-xs text-gray-300 opacity-70">
          <span className="text-accent animate-pulse mx-1">Designed by Siddhartha Gupta</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
