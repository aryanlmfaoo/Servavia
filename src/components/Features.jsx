import { motion } from 'framer-motion';

const features = [
  {
    icon: "📝",
    title: "Journaling & AI Therapy",
    description: "AI-generated insights from your journals",
  },
  {
    icon: "🤖",
    title: "AI Chatbot Support",
    description: "A chatbot that understands emotions & detects suicidal patterns",
  },
  {
    icon: "🧑‍⚕️",
    title: "Find The Right Therapist",
    description: "AI symptom-matching to find specialists",
  },
  {
    icon: "💬",
    title: "Secure Chat & Reports",
    description: "Private chat with therapists, encrypted for safety",
  },
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Empowering Your Mental Health Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of mental health tools and support systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 