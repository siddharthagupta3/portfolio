'use client';

import { motion } from 'framer-motion';
import Footer from '../../components/Footer';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaSnapchat, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaDiscord, FaReddit, FaPinterest, FaTiktok, FaHackerrank, FaKaggle, FaArrowLeft, FaYoutube } from 'react-icons/fa';
import { SiGmail, SiLeetcode } from 'react-icons/si';
import Link from 'next/link';
// import ThreeBox from '/src/components/ThreeBox';
import dynamic from 'next/dynamic';
const ThreeBox = dynamic(() => import('../../components/ThreeBox'), {
  ssr: false,
});

// Background is handled globally in layout.js

const ConnectPage = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };



  const socialMediaLinks = [
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://instagram.com/satyamkumarsingh',
      color: '#e1306c',
      description: 'Follow me for behind-the-scenes and personal updates'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/satyamkumarsingh',
      color: '#0077b5',
      description: 'Connect with me professionally and see my work experience'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/satyamkumarsingh',
      color: '#ffffff',
      description: 'Check out my code repositories and contributions'
    },
    {
      icon: <SiLeetcode />,
      name: 'LeetCode',
      url: 'https://leetcode.com/satyamkumarsingh',
      color: '#ffa116',
      description: 'View my problem-solving skills and coding challenges'
    },
    {
      icon: <FaHackerrank />,
      name: 'HackerRank',
      url: 'https://hackerrank.com/satyamkumarsingh',
      color: '#00ea64',
      description: 'Check my coding skills and certifications'
    },
    {
      icon: <FaKaggle />,
      name: 'Kaggle',
      url: 'https://kaggle.com/satyamkumarsingh',
      color: '#20beff',
      description: 'Explore my data science projects and competitions'
    },
    {
      icon: <FaYoutube />,
      name: 'YouTube',
      url: 'https://youtube.com/@YOUR_CHANNEL_HERE',
      color: '#FF0000',
      description: 'Watch my videos and tutorials'
    },
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      url: 'https://facebook.com/satyamkumarsingh',
      color: '#1877f2',
      description: 'Connect with me on Facebook for updates and discussions'
    },
    {
      icon: <FaDiscord />,
      name: 'Discord',
      url: 'https://discord.gg/satyamkumarsingh',
      color: '#7289da',
      description: 'Join my Discord server for community discussions'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/satyamkumarsingh',
      color: '#1da1f2',
      description: 'Follow me for thoughts, updates, and tech discussions'
    },
    {
      icon: <FaReddit />,
      name: 'Reddit',
      url: 'https://reddit.com/user/satyamkumarsingh',
      color: '#ff4500',
      description: 'Check out my Reddit profile for community engagement'
    },
    {
      icon: <FaPinterest />,
      name: 'Pinterest',
      url: 'https://pinterest.com/satyamkumarsingh',
      color: '#e60023',
      description: 'Explore my Pinterest boards for inspiration and ideas'
    },
    {
      icon: <FaTiktok />,
      name: 'TikTok',
      url: 'https://tiktok.com/@satyamkumarsingh',
      color: '#FFC0CB',
      description: 'Follow me on TikTok for short-form content and trends'
    },
    {
      icon: <SiGmail />,
      name: 'Gmail',
      url: 'mailto:satyamkumarsingh@gmail.com',
      color: '#ea4335',
      description: 'Email me directly for inquiries and collaborations'
    },
    {
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      url: 'https://wa.me/919876543210',
      color: '#25d366',
      description: 'Chat with me directly for quick responses'
    },
    {
      icon: <FaSnapchat />,
      name: 'Snapchat',
      url: 'https://snapchat.com/add/satyamkumarsingh',
      color: '#fffc00',
      description: 'Connect with me on Snapchat for daily updates'
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'satyamkumarsingh@gmail.com',
      link: 'mailto:satyamkumarsingh@gmail.com',
      color: '#ea4335'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
      color: '#25d366'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'New Delhi, India',
      link: 'https://maps.google.com/?q=New+Delhi',
      color: '#4285f4'
    }
  ];

  return (

    <>
    <ThreeBox />

    <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Circular Back Arrow Button */}
      <Link href="/">
        <motion.button
          className="fixed top-28 left-8 z-20 w-10 h-10 rounded-full text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:scale-110 transition-all duration-200"
          aria-label="Back to Home"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft size={16} />
        </motion.button>
      </Link>

      {/* Background is handled globally in layout.js */}
      
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Connect</h1>
          <div className="flex justify-center mb-12">
            <div className="w-40 h-2 rounded animate-gradient" style={{ background: 'linear-gradient(to right, var(--primary), var(--secondary))' }}></div>
          </div>
          <p className="max-w-xl mx-auto mt-12 text-clear text-center" style={{ color: 'var(--gray-700)' }}>
            I&apos;m always open to new opportunities, collaborations, and connections. 
            Feel free to reach out through any of the platforms below.
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          className="mb-20 w-full max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          <h2 className="text-3xl font-semibold mb-12 text-center text-gradient">Social Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialMediaLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 rounded-2xl flex items-center gap-6 card-hover w-full h-32"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.5 }
                  }
                }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: `0 10px 25px ${social.color}40`
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ 
                    background: 'rgba(0,0,0,0.2)',
                    color: social.color
                  }}
                >
                  <span className="text-2xl">{social.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: social.color }}>{social.name}</h3>
                  <p className="text-sm text-clear" style={{ color: 'var(--gray-700)' }}>{social.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          className="mb-32 w-full max-w-5xl mx-auto"  // Increased margin-bottom from mb-20 to mb-32
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          <h2 className="text-3xl font-semibold mb-12 text-center text-gradient">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="glass-card p-8 rounded-2xl flex items-center gap-6 card-hover w-full h-32"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.5 }
                  }
                }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: `0 10px 25px ${info.color}40`
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ 
                    background: 'rgba(0,0,0,0.2)',
                    color: info.color
                  }}
                >
                  <span className="text-2xl">{info.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: info.color }}>{info.title}</h3>
                  <p className="text-sm text-clear" style={{ color: 'var(--gray-700)' }}>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* {/* Border above Footer */}
      <div className="w-full h-20"></div>
      
      {/* Footer Component */}
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
    </>
  );
};

export default ConnectPage;
