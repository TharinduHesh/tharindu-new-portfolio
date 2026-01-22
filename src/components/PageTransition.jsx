import { motion } from 'framer-motion';

const PageTransition = () => {
  return (
    <>
      {/* Glitch Overlay */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 origin-left"
        style={{
          background: 'linear-gradient(90deg, rgba(0, 8, 16, 0.98) 0%, rgba(0, 16, 24, 0.98) 100%)'
        }}
      >
        {/* Scanlines */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.5) 2px, rgba(0, 0, 0, 0.5) 4px)',
            backgroundSize: '100% 4px'
          }}
        />

        {/* Digital Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        {/* Terminal Loading Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/70 backdrop-blur-sm border border-white/30 rounded-lg p-6 font-mono">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="overflow-hidden whitespace-nowrap"
              >
                <span className="text-green-400">&gt; ACCESS GRANTED</span>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="overflow-hidden whitespace-nowrap"
              >
                <span className="text-cyan-400">&gt; LOADING MODULE...</span>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="overflow-hidden whitespace-nowrap"
              >
                <span className="text-white">&gt; INITIALIZING</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="text-white"
                >
                  _
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Matrix Rain Effect */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/60 font-mono text-xs"
            style={{
              left: `${i * 5}%`,
              top: -100
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 1 + Math.random() * 0.5,
              ease: "linear"
            }}
          >
            {Array.from({ length: 15 }, () => 
              String.fromCharCode(33 + Math.random() * 94)
            ).join('\n')}
          </motion.div>
        ))}

        {/* Hexagon Corners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-8 left-8"
        >
          <div 
            className="w-16 h-16 border-2 border-white/50"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-8 right-8"
        >
          <div 
            className="w-16 h-16 border-2 border-white/50"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-8 left-8"
        >
          <div 
            className="w-16 h-16 border-2 border-white/50"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-8 right-8"
        >
          <div 
            className="w-16 h-16 border-2 border-white/50"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          />
        </motion.div>
      </motion.div>

      {/* Glitch Effect Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0, 1, 0],
          x: [0, -5, 5, -5, 0]
        }}
        transition={{ 
          duration: 0.5,
          times: [0, 0.1, 0.2, 0.3, 0.4],
          repeat: 2
        }}
        className="fixed inset-0 z-[51] pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(255, 0, 0, 0.1) 0px, transparent 2px, rgba(0, 255, 0, 0.1) 4px, transparent 6px, rgba(0, 0, 255, 0.1) 8px, transparent 10px)',
          mixBlendMode: 'difference'
        }}
      />
    </>
  );
};

export default PageTransition;
