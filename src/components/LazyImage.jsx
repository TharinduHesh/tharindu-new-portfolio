import { useState } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-dark/50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
      <motion.img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
