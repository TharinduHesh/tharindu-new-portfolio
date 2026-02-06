import { motion } from 'framer-motion';
import { FaShieldAlt, FaCode, FaLock, FaServer, FaBug, FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPalette, FaLaptopCode, FaLightbulb, FaRocket, FaClipboardCheck } from 'react-icons/fa';
import LazyImage from './LazyImage';

const About = () => {
  const skills = [
    { 
      name: 'Web Development', 
      icon: FaLaptopCode,
      description: 'Creating responsive, modern websites tailored to your needs with cutting-edge technologies.',
      gradient: 'from-cyan-500 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&auto=format&fit=crop'
    },
    { 
      name: 'UI/UX Design', 
      icon: FaPalette,
      description: 'Designing user-friendly, engaging, and visually appealing interfaces that enhance user experience.',
      gradient: 'from-cyan-500 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop'
    },
    { 
      name: 'Cyber Security', 
      icon: FaShieldAlt,
      description: 'Protecting digital assets through advanced security practices, vulnerability assessment, and threat detection.',
      gradient: 'from-cyan-500 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop'
    }
  ];

  const strengths = [
    { name: 'Web Development', icon: FaCode, description: 'Building fast, responsive, and scalable websites.', color: 'text-cyan-400' },
    { name: 'Creative Designs', icon: FaPalette, description: 'Designing engaging and user-friendly interfaces.', color: 'text-amber-400' },
    { name: 'Problem Solving', icon: FaLightbulb, description: 'Finding innovative solutions to complex challenges.', color: 'text-emerald-400' },
    { name: 'Coding', icon: FaLaptopCode, description: 'Designing intuitive and user-friendly software architectures.', color: 'text-sky-400' },
    { name: 'Fast Learner', icon: FaRocket, description: 'Adapting to new technologies and tools with ease.', color: 'text-rose-400' },
    { name: 'Planning', icon: FaClipboardCheck, description: 'Organizing tasks efficiently to meet deadlines and goals.', color: 'text-violet-400' }
  ];

  return (
    <section id="about" className="min-h-screen py-20 pt-24 bg-darker relative overflow-hidden">
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
            className="absolute text-primary/40 font-mono text-xs"
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
        <div className="absolute inset-0 opacity-10">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src="/assets/images/Tharindu123.png"
                alt="Tharindu Ranasinghe"
                className="relative rounded-full w-full shadow-2xl border-4 border-primary/30"
              />
            </div>
          </div>

          {/* Personal Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Tharindu Ranasinghe</h3>
            <p className="text-xl text-primary mb-6">Cybersecurity Undergraduate at SLIIT</p>
            <p className="text-gray-300 leading-relaxed text-justify mb-6">
              I specialize in network security, ethical hacking, and vulnerability assessment, with practical experience in identifying, analyzing, and mitigating security threats. I actively participate in CTFs, security labs, and real-world assessments, continuously sharpening my offensive and defensive security skills.
              <br /><br />
              My goal is to apply industry best practices and security frameworks to protect systems, data, and users building a safer digital ecosystem through proactive security.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              <a 
                href="https://github.com/TharinduHesh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors duration-300 text-2xl"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/tharindu-ranasinghe-b75b01285" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors duration-300 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:tharindur477@gmail.com" 
                className="text-gray-400 hover:text-primary transition-colors duration-300 text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* CV Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="/assets/documents/Tharindu Ranasinghe - Resume v2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-primary px-6 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                <FaDownload /> View CV
              </a>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* BSc - SLIIT */}
            <div className="bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg flex-shrink-0">
                  <img 
                    src="/assets/images/sliit.png" 
                    alt="SLIIT Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-primary mb-2">BSc (Hons) in Information Technology Specializing in Cyber Security</h4>
                  <p className="text-gray-300 font-medium mb-1">SLIIT - Sri Lanka Institute of Information Technology</p>
                  <p className="text-gray-400 text-sm">2023 - Present</p>
                </div>
              </div>
            </div>

            {/* A/L - Dharmaraja College */}
            <div className="bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg flex-shrink-0">
                  <img 
                    src="/assets/images/dharmaraja.jpg" 
                    alt="Dharmaraja College Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-primary mb-2">G.C.E Advanced Level</h4>
                  <p className="text-gray-300 font-medium mb-1">Dharmaraja College - Kandy</p>
                  <p className="text-gray-400 text-sm"></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Work Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Work Experience</h3>
          <div className="bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg flex-shrink-0">
                <img 
                  src="/assets/images/boc.png" 
                  alt="Bank of Ceylon Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-primary mb-2">Cyber Security Intern – Bank Of Ceylon</h4>
                <p className="text-gray-400 text-sm mb-4">Aug 2025 – Feb 2026</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Monitored and analyzed security events using SIEM and NDR platforms as part of SOC operations.</li>
                  <li>Assisted in incident investigation, alert triage, and escalation following SOC procedures.</li>
                  <li>Supported Data Lakehouse (DLH) project security by implementing access controls and data protection measures.</li>
                  <li>Collaborated with IT Security team to improve threat detection and response efficiency.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-20`}></div>
                  <LazyImage 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-gradient-to-br ${skill.gradient} p-3 rounded-lg`}>
                      <skill.icon className="text-2xl text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">{skill.name}</h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strengths Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">What I Bring</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className={`${strength.color} text-5xl group-hover:scale-110 transition-transform duration-300`}>
                    <strength.icon />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{strength.name}</h4>
                <p className="text-gray-400 leading-relaxed">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-xl">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">3+</div>
              <div className="text-base text-gray-300 uppercase tracking-wider">Years Learning</div>
            </div>
            <div className="text-center p-8 bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-xl">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">10+</div>
              <div className="text-base text-gray-300 uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center p-8 bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-xl">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">100%</div>
              <div className="text-base text-gray-300 uppercase tracking-wider">Dedicated</div>
            </div>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gradient">My Journey in Cybersecurity</h3>
            <p className="text-gray-300 leading-relaxed text-justify mb-4">
              I am a Cybersecurity Undergraduate at SLIIT, passionate about transforming ideas into secure, user-centered digital experiences. My work sits at the intersection of software development, UI/UX design, and cybersecurity, allowing me to build applications that are not only visually engaging but also resilient, reliable, and secure by design. With a strong foundation in frontend and backend development, I enjoy crafting clean interfaces, intuitive user journeys, and responsive designs that enhance usability and accessibility, ensuring that every product I create is both functional and meaningful from the user's perspective.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify mb-4">
              Alongside development, I specialize in cybersecurity with hands-on experience in SOC operations, vulnerability assessment, ethical hacking, and security governance. I have worked with industry tools and frameworks, actively participated in Capture The Flag (CTF) competitions, and gained real-world exposure through my Cybersecurity Internship at the Bank of Ceylon, where I supported threat monitoring, incident analysis, and security improvements that strengthened the organization's security posture.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              As an undergraduate specializing in Cyber Security, I am continuously learning and experimenting with modern technologies, secure coding practices, and industry standards such as ISO 27001. I believe that great digital products are built when design, development, and security work together not as separate steps, but as one integrated process. Driven by curiosity, creativity, and a strong commitment to excellence, I strive to build secure, scalable, and user-focused digital solutions that make a real-world impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
