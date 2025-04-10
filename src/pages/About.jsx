import { motion } from 'framer-motion';
import AhnisImage from '../assets/Ahnis.jpg'
import SehajImage from '../assets/SehajImage.jpg'
import Piya from '../assets/Piya.jpg'


const stats = [
  { number: '24/7', label: 'AI Support' },
  { number: '98%', label: 'User Satisfaction' },
  { number: '50k+', label: 'Active Users' },
  { number: '200+', label: 'Licensed Therapists' },
];

const values = [
  {
    icon: '🎯',
    title: 'Accessibility',
    description: 'Making mental health support available to everyone, anywhere, anytime.'
  },
  {
    icon: '🔒',
    title: 'Privacy',
    description: 'Your data is encrypted and protected with the highest security standards.'
  },
  {
    icon: '🤝',
    title: 'Empathy',
    description: 'Understanding and supporting your unique mental health journey.'
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Combining cutting-edge AI with proven therapeutic approaches.'
  },
];

const team = [
  {
    name: 'Ahnis Singh Aneja',
    role: 'Lead Engineer',
    image: AhnisImage,
    description: 'Pioneering innovative solutions for mental health technology.'
  },
  {
    name: 'Sehaj Kaur',
    role: 'UI/UX Designer',
    image: SehajImage,
    description: 'Pioneering our AI therapeutic models and research.'
  },
  {
    name: 'Piya Kapoor',
    role: 'Head of Therapy',
    image: Piya,
    description: 'Ensuring the highest quality of therapeutic care.'
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Revolutionizing Mental Health Care
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              At Seravia, we're committed to making mental health support accessible, 
              personalized, and effective through the power of AI and human expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white bg-opacity-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              We believe everyone deserves access to quality mental health support. 
              Our platform combines artificial intelligence with human expertise to provide 
              personalized, accessible, and effective mental health care that adapts to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white bg-opacity-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <div className="text-purple-600 mb-2">{member.role}</div>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Ready to Start Your Mental Health Journey?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            >
              Get Started Today
            </motion.button>
            <p className="mt-4 text-gray-600">
              Join thousands of others who have transformed their lives with Seravia
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 