import { motion } from 'framer-motion';

const ChatMessage = ({ message, isAI }) => (
  <motion.div
    initial={{ opacity: 0, x: isAI ? -20 : 20 }}
    animate={{ opacity: 1, x: 0 }}
    className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-4`}
  >
    <div
      className={`max-w-[80%] p-4 rounded-2xl ${
        isAI
          ? 'bg-white text-gray-800 rounded-tl-none'
          : 'bg-blue-500 text-white rounded-tr-none'
      }`}
    >
      {message}
    </div>
  </motion.div>
);

const ChatbotSection = () => {
  const chatMessages = [
    { message: "Hi there! How are you feeling today?", isAI: true },
    { message: "I've been feeling overwhelmed lately...", isAI: false },
    {
      message: "I understand. It's normal to feel overwhelmed sometimes. Would you like to talk about what's causing these feelings?",
      isAI: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              A Chatbot That Truly Listens
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our AI-powered chatbot recognizes stress, burnout, and even critical mental health patterns, providing real-time support when you need it most.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            >
              Try AI Chat Now
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-6 rounded-3xl shadow-xl"
          >
            <div className="bg-white rounded-2xl p-4 shadow-inner">
              <div className="border-b pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <ChatMessage {...msg} />
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection; 