import { motion } from 'framer-motion';
import { FaShieldAlt, FaBug, FaLock, FaCode, FaTerminal } from 'react-icons/fa';

const Home = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      filter: "blur(10px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const glitchVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Matrix Rain Effect Background */}
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

        {/* Glowing Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

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

      <motion.div
        className="section-container z-10 text-center max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center">
          {/* Main Heading with Glitch Effect */}
          <motion.div 
            variants={glitchVariants} 
            className="mb-6 relative"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-normal mb-4 leading-tight text-center relative"
              animate={{
                textShadow: [
                  '0 0 10px rgba(6, 182, 212, 0.5)',
                  '0 0 20px rgba(6, 182, 212, 0.8)',
                  '0 0 10px rgba(6, 182, 212, 0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Glitch layers */}
              <span className="absolute inset-0 text-white opacity-70 blur-sm" 
                    style={{ transform: 'translate(-2px, -2px)' }}>
                Secure development for today's digital world
              </span>
              <span className="absolute inset-0 text-white opacity-70 blur-sm" 
                    style={{ transform: 'translate(2px, 2px)' }}>
                Secure development for today's digital world
              </span>
              <motion.span 
                className="relative text-white"
                animate={{
                  opacity: [1, 0.95, 1]
                }}
                transition={{
                  duration: 0.15,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Secure development for today's digital world
              </motion.span>
            </motion.h1>

            {/* Binary code decoration */}
            <motion.div 
              className="absolute -top-8 left-0 text-primary/30 font-mono text-xs"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              01001000 01000001 01000011 01001011
            </motion.div>
            <motion.div 
              className="absolute -bottom-8 right-0 text-primary/30 font-mono text-xs"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              01010011 01000101 01000011 01010101 01010010 01000101
            </motion.div>
          </motion.div>

          {/* Name with HUD Effect */}
          <motion.div 
            variants={itemVariants} 
            className="mb-10 relative"
          >
            {/* HUD corners */}
            <div className="absolute -left-4 -top-4 w-8 h-8 border-l-2 border-t-2 border-primary"></div>
            <div className="absolute -right-4 -top-4 w-8 h-8 border-r-2 border-t-2 border-primary"></div>
            <div className="absolute -left-4 -bottom-4 w-8 h-8 border-l-2 border-b-2 border-primary"></div>
            <div className="absolute -right-4 -bottom-4 w-8 h-8 border-r-2 border-b-2 border-primary"></div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-primary/30 px-8 py-4 relative">
              <motion.div 
                className="absolute inset-0 border border-primary/50"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.3em] text-gray-200 relative font-mono">
                <motion.span
                  animate={{
                    textShadow: [
                      '0 0 5px rgba(6, 182, 212, 0.5)',
                      '0 0 10px rgba(6, 182, 212, 0.8)',
                      '0 0 5px rgba(6, 182, 212, 0.5)'
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  THARINDU H RANASINGHE
                </motion.span>
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <motion.div 
                  className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{ scaleX: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <FaLock className="text-primary text-sm" />
                <motion.div 
                  className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{ scaleX: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </div>
            </div>
          </motion.div>

          {/* Expertise Areas with Cyber Theme */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            <motion.div 
              className="group relative px-6 py-5 bg-black/60 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(6, 182, 212, 0.8)',
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)'
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="flex items-center justify-center gap-3 relative z-10">
                <FaShieldAlt className="text-primary text-2xl group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="text-gray-200 font-semibold block">UI/UX Designing</span>
                  <span className="text-primary/60 text-xs font-mono">MODULE_01</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative px-6 py-5 bg-black/60 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(6, 182, 212, 0.8)',
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)'
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.3
                }}
              />
              <div className="flex items-center justify-center gap-3 relative z-10">
                <FaCode className="text-primary text-2xl group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="text-gray-200 font-semibold block">Creative Developer</span>
                  <span className="text-primary/60 text-xs font-mono">MODULE_02</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative px-6 py-5 bg-black/60 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(6, 182, 212, 0.8)',
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)'
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.6
                }}
              />
              <div className="flex items-center justify-center gap-3 relative z-10">
                <FaBug className="text-primary text-2xl group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="text-gray-200 font-semibold block">Cyber Security</span>
                  <span className="text-primary/60 text-xs font-mono">MODULE_03</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons with Hacker Style */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-16">
            <motion.a
              href="#contact"
              className="group relative px-10 py-4 bg-transparent border-2 border-primary font-bold rounded-lg overflow-hidden font-mono"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2 text-primary group-hover:text-dark transition-colors">
                <FaTerminal />
                Get In Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              {/* Corner brackets */}
              <span className="absolute top-1 left-1 text-primary text-xs">╔</span>
              <span className="absolute top-1 right-1 text-primary text-xs">╗</span>
              <span className="absolute bottom-1 left-1 text-primary text-xs">╚</span>
              <span className="absolute bottom-1 right-1 text-primary text-xs">╝</span>
            </motion.a>
            
            <motion.a
              href="#projects"
              className="group relative px-10 py-4 bg-primary/10 border-2 border-primary/50 font-bold rounded-lg overflow-hidden font-mono"
              whileHover={{ 
                scale: 1.05,
                borderColor: '#0ea5e9',
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundImage: [
                    'linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)',
                    'linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)'
                  ],
                  backgroundPosition: ['200% 0', '-200% 0']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="relative z-10 flex items-center gap-2 text-primary">
                <FaShieldAlt className="group-hover:rotate-12 transition-transform" />
                Explore Projects
                <span className="font-mono text-xs">_</span>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Cyber Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <div className="relative">
            {/* Animated hexagon */}
            <motion.div
              className="w-12 h-12 border-2 border-primary/50 flex items-center justify-center"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
              animate={{
                borderColor: ['rgba(6, 182, 212, 0.3)', 'rgba(6, 182, 212, 0.8)', 'rgba(6, 182, 212, 0.3)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-primary text-xl"
              >
                ↓
              </motion.div>
            </motion.div>
          </div>
          <span className="text-xs text-primary/70 tracking-widest font-mono">SCROLL</span>
          <motion.div
            className="flex gap-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-primary rounded-full"></div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
