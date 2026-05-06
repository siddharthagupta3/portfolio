'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaArrowRight, FaPaperPlane, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Background is handled globally in layout.js

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com', color: '#ffffff' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', color: '#0077b5' },
    { icon: <FaTwitter />, url: 'https://twitter.com', color: '#1DA1F2' },
    { icon: <FaInstagram />, url: 'https://instagram.com', color: '#E1306C' },
    { icon: <FaEnvelope />, url: 'mailto:siddharthagupta617@gmail.com', color: '#EA4335' },
    { icon: <FaYoutube />, url: 'https://youtube.com/@YOUR_CHANNEL_HERE', color: '#FF0000' },
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

            <h3 className="text-xl font-semibold mb-6 pb-4 text-gradient border-b border-gray-700/50">Quick Links</h3>
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
                    <span className="text-gradient">{link.name}</span>
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
              <h3 className="text-xl font-semibold mb-6 pb-4 text-gradient border-b border-gray-700/50">Newsletter</h3>
              <p className="mb-6 text-gradient">
                Subscribe to receive updates and latest news direct to your inbox.
              </p>
              <div className="flex squared-xl overflow-hidden shadow-xl p-1 " style={{ backgroundColor: 'var(--primary)' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 w-full bg-background text-white-500 focus:outline-none"
                />
                <button 
                  className="px-5 py-3 text-white font-medium flex items-center gap-2 bg-gradient-to-tr from-primary to-secondary rounded-r-lg"
                >
                  <FaPaperPlane /> <span className="hidden sm:inline">Subscribe</span>
                </button>
              </div>

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
            © {currentYear}<Link href="#" className="hover:text-primary">
                           <span className="text-gradient font-medium" style={{ fontFamily: 'Lugrasimo'}} whilehover={{ scale: 1.05, y: -10 }}>Siddhartha.</span></Link> All rights reserved.
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
