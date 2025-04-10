import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Anxiety Management",
    content: "The AI journaling insights have been eye-opening. It's like having a therapist available 24/7 to help me understand my thoughts better.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "James R.",
    role: "Depression Recovery",
    content: "Finding the right therapist through Nomads Neural was seamless. The AI matching really understood my needs and concerns.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Emily K.",
    role: "Stress Management",
    content: "The chatbot has been incredibly helpful during late-night anxiety episodes. It's comforting to know support is always available.",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic">{testimonial.content}</p>
    <div className="mt-4 flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section class="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Stories of Healing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read how Nomads Neural has helped others on their mental health journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 