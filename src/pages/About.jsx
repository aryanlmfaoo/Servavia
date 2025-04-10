import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
            About Nomads Neural
          </h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              At Nomads Neural, we're committed to making mental health support accessible, 
              personalized, and effective through the power of AI and human expertise.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              We believe everyone deserves access to quality mental health support. 
              Our platform combines artificial intelligence with human expertise to provide 
              personalized, accessible, and effective mental health care.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach</h2>
            <p className="text-gray-600 mb-8">
              By combining AI technology with traditional therapeutic approaches, 
              we create a comprehensive support system that's available 24/7, 
              adapts to your needs, and provides meaningful insights for both users 
              and therapists.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 