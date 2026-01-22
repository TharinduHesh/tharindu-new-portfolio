import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: new Date().toISOString()
      });
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending message:', err);
    } finally {
      setLoading(false);
    }
  };

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
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'tharindur477@gmail.com',
      link: 'mailto:tharindu@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+94 76 2090 122',
      link: 'tel:+94762090122'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Kandy, Sri Lanka',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-8 pt-4 relative overflow-hidden" ref={ref}>
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

      {/* Enhanced Background Elements with Animation */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
        animate={{
          x: [-40, 40, -40],
          y: [-20, 20, -20],
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 bg-grid-pattern"
        animate={{
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="section-container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Let's connect and create something amazing together!
              </p>
            </div>

            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                variants={itemVariants}
                whileHover={{ 
                  x: 10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 20 }
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-4 bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="bg-gradient-primary p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-2xl text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Map Placeholder */}
            <motion.div variants={itemVariants} className="relative h-64 rounded-xl overflow-hidden border border-primary/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.62280943992!2d79.69523989999999!3d6.927078699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-primary py-4 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
