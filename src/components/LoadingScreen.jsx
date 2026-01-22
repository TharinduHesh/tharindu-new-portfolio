import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.2,
          filter: "blur(10px)"
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-[200] bg-darker flex items-center justify-center overflow-hidden"
      >
        {/* Holographic Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          
          {/* Rotating Rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 border border-primary/30 rounded-full"
              style={{
                width: `${300 + i * 150}px`,
                height: `${300 + i * 150}px`,
                marginLeft: `-${150 + i * 75}px`,
                marginTop: `-${150 + i * 75}px`
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                rotate: {
                  duration: 20 - i * 5,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                },
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }
              }}
            />
          ))}

          {/* Particle Effects */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <div className="text-center relative z-10 px-4">
          {/* Logo with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="mb-12"
          >
            <motion.div
              className="flex items-center justify-center text-5xl md:text-7xl font-bold"
              animate={{
                textShadow: [
                  "0 0 20px rgba(14, 165, 233, 0.5)",
                  "0 0 40px rgba(14, 165, 233, 0.8)",
                  "0 0 20px rgba(14, 165, 233, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span
                className="text-primary"
                animate={{ x: [-2, 2, -2], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 0.3, repeat: Infinity }}
              >
                &lt;
              </motion.span>
              <motion.span
                className="text-gradient bg-gradient-to-r from-cyan-400 via-primary to-blue-500 bg-clip-text text-transparent mx-3"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Tharindu
              </motion.span>
              <motion.span
                className="text-primary"
                animate={{ x: [-2, 2, -2], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 0.3, repeat: Infinity, delay: 0.15 }}
              >
                /&gt;
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Holographic Text */}
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <motion.p
                  className="text-xl md:text-2xl font-mono text-primary"
                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  Initializing Portfolio Systems...
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Futuristic Progress Bar */}
          <div className="w-full max-w-md mx-auto mb-6">
            <div className="relative h-3 bg-gray-800/50 backdrop-blur-sm rounded-full overflow-hidden border border-primary/30">
              <motion.div
                className="absolute h-full bg-gradient-to-r from-cyan-400 via-primary to-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${progress}%`,
                  boxShadow: [
                    "0 0 10px rgba(14, 165, 233, 0.5)",
                    "0 0 20px rgba(14, 165, 233, 0.8)",
                    "0 0 10px rgba(14, 165, 233, 0.5)"
                  ]
                }}
                transition={{ 
                  width: { duration: 0.1 },
                  boxShadow: { duration: 1, repeat: Infinity }
                }}
              />
              {/* Progress Indicator */}
              <motion.div
                className="absolute top-0 right-0 w-2 h-full bg-white"
                style={{ left: `${progress}%` }}
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity
                }}
              />
            </div>
            <motion.p
              className="text-primary text-sm font-mono mt-2 text-center"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              [{progress}%] LOADING ASSETS
            </motion.p>
          </div>

          {/* Binary Data Stream Effect */}
          <motion.div
            className="flex justify-center gap-1 text-xs font-mono text-primary/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.span
                key={i}
                animate={{
                  opacity: [0.2, 1, 0.2]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.05
                }}
              >
                {Math.round(Math.random())}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
