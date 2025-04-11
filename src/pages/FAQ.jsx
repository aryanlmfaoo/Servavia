import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-gray-600">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How does AI-assisted therapy work?",
      answer: "Our AI system analyzes your journal entries and chat interactions to provide personalized insights and support. It works alongside human therapists to offer 24/7 emotional support and track your progress over time."
    },
    {
      question: "Is my data private and secure?",
      answer: "Yes, we take your privacy seriously. No private data is shared, and you have complete control over your information. You can delete your data at any time, and we never share personal information without your explicit consent."
    },
    {
      question: "Can I switch therapists if needed?",
      answer: "Absolutely! You can switch therapists at any time while retaining all your progress and reports. Our AI matching system will help you find the best fit for your needs."
    },
    {
      question: "How do the AI-generated reports work?",
      answer: "Our AI analyzes your journal entries and chat interactions to create comprehensive reports about your emotional patterns and progress. These reports are shared with your therapist to provide better-informed care."
    }
  ];

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h1>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 