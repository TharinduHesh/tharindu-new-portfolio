import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaHome, FaUser, FaBriefcase, FaPhone, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { icon: FaHome, label: 'Home', href: '#home' },
    { icon: FaUser, label: 'About', href: '#about' },
    { icon: FaBriefcase, label: 'Projects', href: '#projects' },
    { icon: FaPhone, label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/TharinduHesh', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tharindu-ranasinghe-b75b01285/', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://web.facebook.com/profile.php?id=100083180202502', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/_tharin_du/', label: 'Instagram' }
  ];

  return (
    <footer className="bg-dark border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-primary p-3 rounded-lg">
                <span className="text-white text-xl font-bold">&lt;/&gt;</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Tharindu H Ranasinghe</h3>
                
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into secure digital experiences through innovative security practices and development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/20 p-2 rounded-lg">
                <FaBriefcase className="text-primary text-lg" />
              </div>
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="bg-dark border border-primary/20 p-2 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                      <link.icon className="text-sm" />
                    </div>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Me */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/20 p-2 rounded-lg">
                <FaEnvelope className="text-primary text-lg" />
              </div>
              <h3 className="text-xl font-bold text-white">Connect With Me</h3>
            </div>
            
            {/* Email */}
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-gradient-primary p-2.5 rounded-lg">
                <FaEnvelope className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase mb-1">EMAIL</p>
                <a href="mailto:tharindur477@gmail.com" className="text-white text-sm hover:text-primary transition-colors">
                  tharindur477@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-gradient-primary p-2.5 rounded-lg">
                <FaPhone className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase mb-1">PHONE</p>
                <a href="tel:+94762090122" className="text-white text-sm hover:text-primary transition-colors">
                  +94 76 2090 122
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 mb-6">
              <div className="bg-gradient-primary p-2.5 rounded-lg">
                <FaMapMarkerAlt className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase mb-1">LOCATION</p>
                <p className="text-white text-sm">Kandy, Sri Lanka</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-500 text-xs uppercase mb-3">FOLLOW ME:</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-dark border border-primary/20 p-3 rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  >
                    <social.icon className="text-gray-400 hover:text-primary transition-colors text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} <a href="https://tharinduhranasinghe.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-primary/80 transition-colors">Tharindu H Ranasinghe</a> • All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-sm">
                Privacy Policy
              </span>
              <span className="text-gray-500 text-sm">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
