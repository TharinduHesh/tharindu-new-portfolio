import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTerminal } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [text, setText] = useState('');
  const [terminalLines, setTerminalLines] = useState([]);
  const fullText = 'INITIALIZING SECURE ENVIRONMENT...';
  
  useEffect(() => {
    let index = 0;
    let isActive = true;
    const typingInterval = setInterval(() => {
      if (!isActive) return;
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        // Add terminal boot sequence
        const bootSequence = [
          '> Loading security protocols...',
          '> Establishing secure connection...',
          '> Access granted ✓'
        ];
        
        let lineIndex = 0;
        const bootInterval = setInterval(() => {
          if (!isActive || lineIndex >= bootSequence.length) {
            clearInterval(bootInterval);
            return;
          }
          setTerminalLines(prev => {
            if (prev.length < bootSequence.length) {
              return [...prev, bootSequence[lineIndex]];
            }
            return prev;
          });
          lineIndex++;
        }, 300);
      }
    }, 50);
    
    return () => {
      isActive = false;
      clearInterval(typingInterval);
    };
  }, []);

  const projects = [
    {
      title: 'Cryptography Toolkit',
      description: 'A GUI-based cryptographic toolkit built with Python and Tkinter. Combines secure messaging, file encryption, hash cracking, digital signatures, and steganography into a single educational application for hands-on learning of real-world cryptography.',
      technologies: ['Python', 'Tkinter', 'Cryptography', 'Pillow'],
      image: '/assets/images/crypto.png',
      github: 'https://github.com/TharinduHesh/Crypto_toolkit',
      demo: '#', 
      color: '#ADD8E6'
    },
    {
      title: 'Secure Web Application for Information Security Policy Management',
      description: 'Developed and demonstrated a secure policy-awareness web application with AUP, compliance tracking, and secure coding practices for an organizational information security use case.',
      technologies: ['React.js','Node.js', 'Express.js', 'Firebase', 'JWT+MFA'],
      image: '/assets/images/web.png',
      github: 'https://github.com/TharinduHesh/Secure-Mind--DynamicBiz',
      demo: '#',
      color: ' #FFFF00'
    },
    {
      title: 'TaskFlow – Smart Task & To-Do Manager',
      description: 'Designed and developed a modern productivity application that enables users to create, organize, and track daily tasks using priority levels, due dates, reminders, productivity insights, and customizable dark and light modes.',
      technologies: ['JavaScript', 'React.js', 'Node.js', 'LocalStorage', 'CSS'],
      image: '/assets/images/task.png',
      github: 'https://github.com/TharinduHesh/Todo-manager-app',
      demo: '#',
      color: '#FF69B4'
    },
    {
      title: 'Timelesslx.lk – Fully Functional E-Commerce Platform',
      description: 'A production-ready e-commerce website with product listings, shopping cart, WhatsApp checkout, and customer support features. Optimized for performance and responsiveness, and built collaboratively with Shamith Samaraweera and Bhanuka Rathnayake.',
      technologies: ['React.js', 'JavaScript', 'CSS', 'Firebase'],
      image: '/assets/images/ecommerce.jpg',
      github: 'https://github.com/ranchanakamith/timeless',
      demo: 'https://www.timelesslx.lk',
      color: '#4CAF50'
    },

    {
      title: 'ISO 27001:2022 ISMS Toolkit Development & Implementation',
      description: 'Designed and developed a comprehensive ISO 27001:2022 ISMS toolkit including risk assessment templates, Statement of Applicability (SoA), and access control checklists. The project focused on strengthening information security governance and compliance readiness using industry best practices.',
      technologies: ['ISO 27001:2022', 'Risk Assessment Methodologies', 'Security Policies', 'Documentation Tools'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
      github: 'https://github.com/TharinduHesh/iso27001-information-security-toolkit',
      color: '#0F172A'
    },

    {
       title: 'Donor Web – Blood Donation Management System',
       description: 'A role-based web platform designed to streamline blood donation and management processes, enabling donors, hospitals, blood banks, and volunteers to coordinate blood requests, donation campaigns, fund contributions, and administrative reporting efficiently across Sri Lanka.',
       technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
       image: '/assets/images/blood.png',
       github: 'https://github.com/TharinduHesh/Blood-Donation-System',
       color: '#DC2626'
    },
    {
       title: 'Cable.lk – Electronics E-Commerce Platform',
       description: 'A modern e-commerce platform for electronic accessories including power banks, cables, adapters, speakers, and earbuds. Built collaboratively with Bhanuka H. Rathnayake using Next.js and Firebase, featuring secure checkout, user accounts, real-time updates, and a fully responsive design.',
       technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Stripe'],
       image: '/assets/images/cablelk.jpg',
       github: 'https://github.com/BhanukaHR/cablelk',
       color: '#0EA5E9',
       demo: 'https://www.cable.lk'
    }


  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen w-full py-8 sm:py-12 pt-20 sm:pt-24 pb-8 sm:pb-12 relative overflow-hidden bg-[#000810]" ref={ref}>
      {/* Cyber Background Effects */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#000810] via-[#001018] to-[#000810]">
        {/* Scanline Effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,255,255,0.03) 0px, transparent 1px, transparent 2px, rgba(0,255,255,0.03) 3px)',
            backgroundSize: '100% 4px'
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Digital Rain */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`rain-${i}`}
            className="absolute text-primary/40 font-mono text-xs hidden sm:block"
            style={{
              left: `${i * 7}%`,
              top: -100
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {Array.from({ length: 20 }, () => 
              String.fromCharCode(33 + Math.random() * 94)
            ).join('\n')}
          </motion.div>
        ))}

        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-10 hidden md:block">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`hex-${i}`}
              className="absolute border border-cyan-400/40"
              style={{
                width: '80px',
                height: '80px',
                left: `${(i % 5) * 20}%`,
                top: `${Math.floor(i / 5) * 25}%`,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        {/* Floating Code Symbols */}
        {['{ }', '< />', '[ ]', '$ _', '0x', '::'].map((symbol, i) => (
          <motion.div
            key={`symbol-${i}`}
            className="absolute text-primary/30 font-mono text-2xl font-bold"
            style={{
              left: `${15 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.8
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-8 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Here are some of my cybersecurity projects showcasing my skills in network security,
            penetration testing, and secure application development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
