import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Begin Your Journey to Better Mental Health Today
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join thousands who have found clarity, support, and healing through our AI-assisted therapy platform.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 text-xl font-semibold text-white rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 transform transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Link to='/UserRegister'>Start Your Healing Journey</Link>
            </motion.button>

            <p className="mt-6 text-sm text-gray-500">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 