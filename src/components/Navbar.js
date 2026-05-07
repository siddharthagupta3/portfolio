'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSmile } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const sidebarRef = useRef(null);
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // Handle outside clicks
    const handleOutsideClick = (e) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsOpen(false);
      }
      if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isOpen || isDropdownOpen || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, isDropdownOpen, isMobileMenuOpen]);

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Prevent body scroll when menus are open
    if (isMobileMenuOpen || isOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('body-no-scroll');
    };
  }, [isMobileMenuOpen, isOpen]);

  useEffect(() => {
    // Set CSS variable for header height
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [scrolled]);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Skills', href: 'skills' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3 backdrop-blur-md shadow-lg' : 'py-5'}`}
      ref={navRef}
      style={{
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 1)' : 'transparent',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(255, 165, 0, 0.15)' : 'none',
      }}
    >
      <div className="container flex items-center justify-between relative" style={{ fontFamily: 'Lugrasimo' }}>
        <Link href="/">
          <motion.div
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span style={{ fontSize: '1.5rem', color: '#ff6200' }}>
              Siddhartha
            </span>
            <span style={{ color: 'var(--accent)' }}>.</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          className="desktop-nav hidden md:flex items-center gap-8 relative h-full"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="relative" variants={itemVariants} ref={dropdownRef}>
            <motion.button
              className="btn btn-secondary outline-none"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: 'var(--secondary)', color: 'white' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Navigate
            </motion.button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="fixed rounded-xl backdrop-blur-lg bg-black/80 border border-white/20 shadow-lg z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    width: '280px',
                    top: '100%',
                    left: '0',
                    padding: '1.25rem',
                    position: 'absolute',
                  }}
                >
                  <div className="flex flex-col items-center gap-3">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={index}
                        href={`/#${item.href}`}
                        className={`text-lg font-medium w-full text-center py-2 px-3 rounded-md transition-colors ${
                          activeLink === item.href ? 'text-primary' : 'text-white'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsDropdownOpen(false);
                          document.getElementById(item.href)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: 'var(--primary-light)',
                          color: 'var(--dark)',
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                    <motion.div className="w-full">
                      <motion.div
                        whileHover={{ scale: 1.05, backgroundColor: 'var(--primary-light)' }}
                        transition={{ duration: 0.2 }}
                        className="w-full rounded-md overflow-hidden"
                      >
                        <Link
                          href="/click-me"
                          className="text-lg font-medium w-full text-center py-2 px-3 block text-white"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Click Me !!!
                        </Link>
                      </motion.div>
                    </motion.div>
                    <motion.div className="w-full">
                      <motion.div
                        whileHover={{ scale: 1.05, backgroundColor: 'var(--primary-light)' }}
                        transition={{ duration: 0.2 }}
                        className="w-full rounded-md overflow-hidden"
                      >
                        <Link
                          href="/polymaths"
                          className="text-lg font-medium w-full text-center py-2 px-3 block text-white"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Polymaths
                        </Link>
                      </motion.div>
                    </motion.div>
                    <motion.div className="w-full">
                      <motion.div
                        whileHover={{ scale: 1.05, backgroundColor: 'var(--primary-light)' }}
                        transition={{ duration: 0.2 }}
                        className="w-full rounded-md overflow-hidden"
                      >
                        <Link
                          href="/extra"
                          className="text-lg font-medium w-full text-center py-2 px-3 block text-white"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Extra
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.button
            className="btn btn-secondary outline-none ml-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: 'var(--secondary)', color: 'white' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = '/connect')}
          >
            Connect
          </motion.button>
        </motion.nav>

        {/* Smile Icon Toggle Button */}
        <motion.button
          ref={buttonRef}
          className="smile-toggle text-2xl z-50 cursor-pointer mr-12 -mt-6 md:mr-0 md:mt-0"
          style={{
            color: '#ff6200',
            right: 'calc(4px + var(--scrollbar-width, 0px))',
          }}
          whileHover={{ scale: 1.1 }}
          onClick={toggleMenu}
        >
          {isMobileMenuOpen || isOpen ? <FaTimes style={{ color: '#ff6200' }} /> : <FaSmile />}
        </motion.button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              className="mobile-dropdown"
              initial={{ transform: 'translateX(100%)' }}
              animate={{ transform: 'translateX(0)' }}
              exit={{ transform: 'translateX(100%)' }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 120, damping: 20 }}
            >
              {/* Redundant close button removed */}
              <motion.a
                href="/#home"
                className="text-lg"
                onClick={() => {
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
              >
                Home
              </motion.a>

              <button
                className="text-lg"
                onClick={() => {
                  window.location.href = '/connect';
                  setIsMobileMenuOpen(false);
                }}
              >
                Connect
              </button>

              <motion.a
                href="/#about"
                className="text-lg"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
              >
                About
              </motion.a>

              <motion.a
                href="/#skills"
                className="text-lg"
                onClick={() => {
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
              >
                Skills
              </motion.a>
              <motion.a
                href="/#projects"
                className="text-lg"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
              >
                Projects
              </motion.a>
              <motion.a
                href="/#contact"
                className="text-lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
              >
                Contact
              </motion.a>
              <Link href="/click-me" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Click Me !!!
              </Link>
              <Link href="/polymaths" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Polymaths
              </Link>
              <Link href="/extra" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Extra
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sidebar Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={sidebarRef}
              className="fixed top-0 right-0 h-full w-80 bg-gray-900 bg-opacity-95 backdrop-blur-md z-40 flex flex-col items-start justify-start gap-5 p-8 pt-20 pb-32 shadow-2xl overflow-y-auto"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#ff6200' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 120, damping: 20 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-10 right-1 text-2xl hover:text-white cursor-pointer"
              >
                <FaTimes />
              </button>
              <div className="border-t border-gray-700 w-full my-4"></div>
              <h3 className="text-xl font-semibold mb-4 w-full text-center" style={{ color: '#ff9400' }}>
                Navigation & More
              </h3>
              {[
                { name: 'Night/Day Mode', action: () => console.log('Toggle Theme') },
                { name: 'Settings', action: () => console.log('Open Settings') },
                { name: 'Study Notes', action: () => window.open('/study-notes', '_blank') },
                { name: 'AI/ML', action: () => window.open('/ai-ml', '_blank') },
                { name: 'Mathematics', action: () => window.open('/mathematics', '_blank') },
                { name: 'Statistics', action: () => window.open('/statistics', '_blank') },
                { name: 'Neuroscience', action: () => window.open('/neuroscience', '_blank') },
                { name: 'Astrophysics', action: () => window.open('/astrophysics', '_blank') },
                { name: 'Chemistry', action: () => window.open('/chemistry', '_blank') },
                { name: 'Physics', action: () => window.open('/physics', '_blank') },
                { name: 'Psychology', action: () => window.open('/psychology', '_blank') },
                { name: 'Astronomy', action: () => window.open('/astronomy', '_blank') },
                { name: 'Generative Biology', action: () => window.open('/generative-biology', '_blank') },
              ].map((item, index) => (
                <motion.div
                  key={`tool-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05, type: 'spring', stiffness: 100 }}
                >
                  <button
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                    className="text-lg text-[#ff6200] hover:text-primary text-left w-full"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
              <div className="h-50 w-full flex flex-col items-center justify-center">
                <div className="border-t border-gray-700 w-full mt-10 py-10"></div>
                <motion.div
                  className="text-lg text-[#ff6200] w-full text-center px-4 italianno-regular"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
                  style={{ fontWeight: 400, fontStyle: 'normal' }}
                >
                  Do you have any Queries?
                </motion.div>
                <motion.button
                  className="btn btn-tertiary w-40 text-center mb-20 text-[#ff6200]"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'var(--secondary)',
                    color: 'white',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  onClick={() => {
                    window.location.href = '/connect';
                    setIsOpen(false);
                  }}
                >
                  Connect
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;