'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

// Background is handled globally in layout.js

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'siddharthagupta617@gmail.com',
      link: 'mailto:siddharthagupta617@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 98357 173XX',
      link: 'tel:+9198357173XX'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Bihar, India',
      link: 'https://maps.google.com/?q=Bihar+India'
    }
  ];

  const socialMediaLinks = [
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
    },
    {
      icon: <SiGmail />,
      name: 'Gmail',
      url: 'mailto:siddharthagupta617@gmail.com',
      color: '#ea4335'
    }
  ];

  return (
    <section id="contact" className="section relative overflow-hidden pt-20 sm:pt-10">
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-20 sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          {/* Removed orange "Contact Siddhartha Gupta" section heading as requested */}
          <div className="h-7"></div>
          <h2 className="text-3xl md:text-4xl sm:text-2xl font-bold mb-6 text-gradient">Get In Touch</h2>
          <div className="h-7"></div>
          <div className="mx-auto mt-8 text-clear flex justify-center items-center text-center" style={{ color: 'var(--primary)' }}>
            <p className="glass-card w-full max-w-2xl mx-auto text-l sm:text-l mt-8 text-clear flex justify-center items-center text-center" style={{ color: 'var(--primary)' }}>
              Feel free to reach out for collaborations, questions, or just to say hello! I&apos;ll do my best to get back to you.
            </p>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          className="mb-20 sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <div className="h-7"></div>
          <h3 className="text-2xl sm:text-xl font-semibold mb-8 text-center text-gradient">Connect with</h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-4">
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
          </div>
          
          <h3 className="text-2xl sm:text-xl font-semibold mb-8 text-center text-gradient">Contact with</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-6 mb-20 sm:mb-10" style={{ fontFamily: 'Lugrasimo' }}>
          {contactInfo.map((info, index) => (
            <motion.a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="glass-card p-10 sm:p-6 rounded-2xl text-center card-hover card-spacing"
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
              <div className="text-3xl sm:text-2xl mb-6 w-full flex justify-center">
                <div className="w-20 h-20 sm:w-16 sm:h-16 flex items-center justify-center">
                  <span style={{ 
                    color: info.icon.type === FaEnvelope ? '#D44638' :
                           info.icon.type === FaPhone ? '#38a169' :
                           info.icon.type === FaMapMarkerAlt ? '#e53e3e' : 'var(--primary)'
                  }}>
                    {info.icon}
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-lg font-semibold mb-4 text-gradient">{info.title}</h3>
              <p className="mb-6 text-clear text-base sm:text-sm" style={{ color: 'var(--primary)' }}>{info.value}</p>
            </motion.a>
          ))}
        </div>

        <h3 className="text-2xl sm:text-xl font-semibold mb-8 text-gradient">Message</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-6">
          <motion.div
            className="mt-24 sm:mt-10 glass-card p-12 sm:p-6 rounded-2xl border-gradient"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 1.0 }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(125, 211, 252, 0.2)", y: -5 }}
          >
            <div className="h-full w-full bg-gradient-to-br from-primary to-secondary p-0.5 rounded-2xl">
              <div className="rounded-2xl">
                <h3 className="text-2xl sm:text-xl font-semibold mb-8 text-gradient">Send Message</h3>

                {submitSuccess && (
                  <motion.div
                    className="p-5 sm:p-3 rounded-xl mb-8 flex items-center text-content z-2"
                    style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#10b981' }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="mr-3 text-xl sm:text-lg">✓</div>
                    <div className="text-base sm:text-sm">Your message has been sent successfully! I&apos;ll get back to you soon.</div>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    className="p-5 sm:p-3 rounded-xl mb-8 flex items-center text-content z-2"
                    style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#ef4444' }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="mr-3 text-xl sm:text-lg">✗</div>
                    <div className="text-base sm:text-sm">There was an error sending your message. Please try again later.</div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-6 py-5 sm:px-5 sm:py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all placeholder:text-gray-500"
                      style={{
                        backgroundColor: 'var(--glass-background)',
                        borderColor: 'var(--secondary)',
                        color: 'var(--foreground)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                      }}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-6 py-5 sm:px-5 sm:py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all placeholder:text-gray-500"
                      style={{
                        backgroundColor: 'var(--glass-background)',
                        borderColor: 'var(--primary)',
                        color: 'var(--foreground)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                      }}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full px-6 py-5 sm:px-5 sm:py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all placeholder:text-gray-500"
                      style={{
                        backgroundColor: 'var(--glass-background)',
                        borderColor: 'var(--primary)',
                        color: 'var(--foreground)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                      }}
                      required
                    />
                  </div>
                  <div className="mb-8">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="6"
                      className="w-full px-6 py-5 sm:px-5 sm:py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all placeholder:text-gray-500"
                      style={{
                        backgroundColor: 'var(--glass-background)',
                        borderColor: 'var(--primary)',
                        color: 'var(--foreground)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                      }}
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="btn btn-tertiary w-full sm:w-auto"
                    style={{ fontFamily: 'Lugrasimo' }}
                    disabled={isSubmitting}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'var(--secondary)',
                      color: 'white'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Removed 'I'd Love To Hear From You' panel as requested */}
        </div>
      </div>
    </section>
  );
};

export default Contact;