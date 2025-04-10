import { motion } from 'framer-motion';
// Method 1: Import image directly
import logoExample from '../assets/images/logo.png'; // You'll add this image later

const ImageExample = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Different Ways to Add Images in React</h2>
      
      {/* Method 1: Using imported image */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">1. Import and Use</h3>
        <img 
          src={logoExample} 
          alt="Logo" 
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Method 2: Using public folder */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">2. From Public Folder</h3>
        <img 
          src="/images/example.jpg" 
          alt="Example" 
          className="w-32 h-32 object-cover"
        />
      </div>

      {/* Method 3: Using external URL */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">3. External URL</h3>
        <img 
          src="https://example.com/image.jpg" 
          alt="External" 
          className="w-32 h-32 object-cover"
        />
      </div>

      {/* Method 4: Background Image */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">4. CSS Background Image</h3>
        <div 
          className="w-32 h-32 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: 'url(/images/background.jpg)' }}
        />
      </div>

      {/* Method 5: Responsive Image */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">5. Responsive Image</h3>
        <picture>
          <source media="(min-width: 800px)" srcSet="/images/large.jpg" />
          <source media="(min-width: 400px)" srcSet="/images/medium.jpg" />
          <img 
            src="/images/small.jpg" 
            alt="Responsive" 
            className="w-full max-w-lg object-cover"
          />
        </picture>
      </div>
    </div>
  );
};

export default ImageExample; 