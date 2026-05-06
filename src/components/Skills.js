'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNode, FaDatabase, FaFigma, FaGitAlt,
  FaChartLine, FaRobot, FaPalette, FaBrain
} from 'react-icons/fa';
import {
  SiJavascript, SiReact, SiNextdotjs, SiNodedotjs,
  SiTailwindcss, SiTypescript, SiGraphql, SiPython,
  SiDjango, SiFlask, SiTensorflow, SiPytorch,SiMysql,SiMongodb
} from 'react-icons/si';

import { TbBrandCpp } from "react-icons/tb";
import { FcElectronics, FcElectricalSensor } from "react-icons/fc";


const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: '🎨',
      items: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3/SCSS', icon: <FaCss3Alt />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 85 },
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'Next.js', icon: null, level: 85 },
        { name: 'Tailwind CSS', icon: null, level: 88 },
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      items: [
        { name: 'Node.js', icon: <FaNode />, level: 80 },
        { name: 'Express', icon: null, level: 85 },
        { name: 'MongoDB', icon: <FaDatabase />, level: 75 },
        { name: 'PostgreSQL', icon: <FaDatabase />, level: 70 },
        { name: 'Firebase', icon: null, level: 80 },
        { name: 'REST APIs', icon: null, level: 85 },
      ]
    },
    {
      category: 'Tools',
      icon: '🔧',
      items: [
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'Figma', icon: <FaFigma />, level: 75 },
        { name: 'VS Code', icon: null, level: 90 },
        { name: 'Webpack', icon: null, level: 70 },
        { name: 'Jest', icon: null, level: 75 },
        { name: 'GitHub Actions', icon: null, level: 65 },
      ]
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="section relative overflow-hidden pt-20">
      <div className="container relative">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <div className="section-badge mb-5">Skills and Interests of Satyam Kumar Singh</div>
          <div className="h-7"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ff9400' }}>Technical Domain and Interests</h2>
          <div className="h-10"></div>
          <p className="glass-card text-l w-full mt-8 text-clear text-center" style={{ color: 'var(--primary)' }}>
            I have gone through a diverse set of skills throughout my journey as a keen learner. 
            My technical interests span a wide spectrum, from crafting intelligent software systems 
            and exploring the frontiers of artificial intelligence to building dynamic, user-centric applications.
            Here is a glimpse of my technical interest.
          </p>
        </motion.div>

        <div className="h-10"></div>

        <div className="mt-24 bg-grey p-12 rounded-2xl mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              // Data Science & AI
              { name: 'Python', icon: <SiPython className="text-6xl text-blue-400" /> },
              { name: 'Statistics', icon: <FaChartLine className="text-6xl text-purple-500" /> },
              { name: 'NumPy', icon: <SiPython className="text-6xl text-yellow-600" /> },
              { name: 'Pandas', icon: <SiPython className="text-6xl text-red-500" /> },
              // { name: 'Matplotlib', icon: <FaChartLine className="text-6xl text-blue-600" /> },
              // { name: 'Seaborn', icon: <FaChartLine className="text-6xl text-pink-500" /> },
              { name: 'SciPy', icon: <SiPython className="text-6xl text-blue-800" /> },
              { name: 'Scikit-learn', icon: <SiPython className="text-6xl text-orange-500" /> },
              { name: 'TensorFlow', icon: <SiTensorflow className="text-6xl text-orange-500" /> },
              { name: 'PyTorch', icon: <SiPytorch className="text-6xl text-red-500" /> },
              { name: 'MySQL', icon: <SiMysql className="text-6xl text-red-500" /> },
              { name: 'AI/ML', icon: <FaRobot className="text-6xl text-blue-500" /> },
              { name: 'Deep Learning', icon: <FaBrain className="text-6xl text-indigo-500" /> },
              // { name: 'AI', icon: <FaRobot className="text-6xl text-purple-500" /> },
              // { name: 'Generative AI', icon: <FaRobot className="text-6xl text-green-500" /> },
              { name: 'Git', icon: <FaGitAlt className="text-6xl text-green-500" /> },

              // Web Development
              { name: 'JavaScript', icon: <SiJavascript className="text-6xl text-yellow-500" /> },
              { name: 'React', icon: <SiReact className="text-6xl text-blue-500" /> },
              { name: 'Next.js', icon: <SiNextdotjs className="text-6xl text-black dark:text-white" /> },
              { name: 'Node.js', icon: <SiNodedotjs className="text-6xl text-green-500" /> },
              { name: 'Tailwind', icon: <SiTailwindcss className="text-6xl text-cyan-500" /> },
              // { name: 'TypeScript', icon: <SiTypescript className="text-6xl text-blue-600" /> },
              // { name: 'GraphQL', icon: <SiGraphql className="text-6xl text-pink-600" /> },
              { name: 'MongoDB', icon: <SiMongodb className="text-6xl text-pink-600" /> },
              { name: 'Django', icon: <SiDjango className="text-6xl text-emerald-700" /> },
              { name: 'Flask', icon: <SiFlask className="text-6xl text-gray-400" /> },
              { name: 'C++', icon: <TbBrandCpp className="text-6xl text-gray-400" /> },

              // Design
              { name: 'UI/UX', icon: <FaPalette className="text-6xl text-pink-500" /> },
              { name: 'Electronics', icon: <FcElectronics className="text-6xl text-pink-500" /> },
              { name: 'Signal System', icon: <FcElectricalSensor className="text-6xl text-pink-500" /> }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ scale: 1.2, boxShadow: "10px 10px 10px rgba(254, 98, 0, 0.8)", transition: { duration: 0.3, ease: "easeInOut" } }}
                style={{ perspective: 1000 }}
              >
                <div className="mb-2">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-center" style={{ color: 'var(--primary)' }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="h-10"></div>
        

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skills.map((skillGroup, groupIndex) => (
            <div key={groupIndex} className={groupIndex % 2 === 0 ? "pr-10 lg:pr-20" : "pl-10 lg:pl-20"}>
              <motion.div
                className="glass-card p-10 rounded-2xl relative overflow-hidden card-spacing"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: groupIndex * 0.2
                    }
                  }
                }}
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20"></div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{skillGroup.icon}</span>
                  <h3 className="text-xl font-semibold text-gradient">{skillGroup.category}</h3>
                </div>

                <div className="space-y-8">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="mb-6"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          {skill.icon && (
                            <span className="text-xl mr-2 text-gradient">
                              {skill.icon}
                            </span>
                          )}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="font-semibold text-gradient">{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden relative skill-bar-container"
                        style={{ backgroundColor: 'var(--gray-200)' }}>
                        <motion.div
                          className="h-full rounded-full animate-gradient skill-value"
                          style={{
                            background: 'linear-gradient(to right, var(--primary), var(--secondary))',
                            boxShadow: '0 0 10px rgba(255, 165, 0, 0.5)'
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute top-0 right-0 bg-dark w-2 h-full rounded-full animated-icon"
                            animate={{
                              boxShadow: ['0 0 5px rgba(0, 0, 0, 0.3)', '0 0 15px rgba(0, 0, 0, 0.7)', '0 0 5px rgba(0, 0, 0, 0.3)']
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div> */}
        <div className="h-10"></div>

        <motion.div
          className="mt-24 glass-card p-12 rounded-2xl border-gradient"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 1.0 }}
          whileHover={{ scale: 1.04, boxShadow: "10px 10px 10px rgba(254, 98, 0, 0.8)", y: -10 }}>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-content">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Let&apos;s Work Together!</h3>
              <p className="mb-8 text-clear" style={{ color: '#ff9400' }}>
                Looking for a developer to help with your project? I&apos;m currently available for freelance work and collaborations. Let&apos;s create something amazing together!
              </p>
              <motion.button 
                className="btn btn-tertiary"
                style={{ fontFamily: 'Lugrasimo'}}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'var(--secondary)',
                  color: 'white'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                onClick={() => {
                  window.location.href = '/connect';
                }}
              >
                Contact Information
              </motion.button>
            </div>
            <div className="relative">
              <div className="w-full h-64 rounded-xl bg-gradient-to-tr from-primary via-secondary to-accent animate-gradient flex items-center justify-center">
                <div className="text-dark text-xl md:text-2xl font-semibold max-w-xs text-center text-clear px-8" style={{ color: '#ff9400' }}>
                  &quot;Quality is not an act, it is a habit.&quot; - Aristotle
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
