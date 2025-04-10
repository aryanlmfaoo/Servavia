import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';

const JournalPage = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [journalContent, setJournalContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [aiAnalysis, setAiAnalysis] = useState(null);

  // Mock data - replace with actual API calls
  const years = [2024, 2023, 2022];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const mockEntries = {
    '2024': {
      '0': [1, 3, 5, 8], // January entries
      '1': [2, 4, 6],    // February entries
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Add API integration here
      console.log('Saved:', {
        year: selectedYear,
        month: selectedMonth,
        day: selectedDay,
        content: journalContent
      });
    } catch (error) {
      console.error('Error saving journal:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const requestAiAnalysis = async () => {
    setIsLoading(true);
    try {
      // Mock AI analysis API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setAiAnalysis({
        mood: 'Positive',
        insights: 'Your writing shows signs of personal growth and resilience.',
        suggestions: 'Consider practicing mindfulness to enhance your self-awareness.'
      });
    } catch (error) {
      console.error('Error getting AI analysis:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <motion.div
            initial={{ x: sidebarOpen ? 0 : -280 }}
            animate={{ x: sidebarOpen ? 0 : -280 }}
            className="w-70 bg-white rounded-xl shadow-xl p-4 h-[calc(100vh-4rem)] flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Journal Entries
              </h2>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* Years */}
              <div className="space-y-4">
                {years.map(year => (
                  <div key={year} className="space-y-2">
                    <button
                      onClick={() => setSelectedYear(year)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedYear === year
                          ? 'bg-purple-100 text-purple-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      📚 {year}
                    </button>
                    
                    {/* Months */}
                    {selectedYear === year && (
                      <div className="ml-4 space-y-1">
                        {months.map((month, index) => (
                          <div key={month}>
                            <button
                              onClick={() => setSelectedMonth(index)}
                              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                selectedMonth === index
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              📖 {month}
                            </button>
                            
                            {/* Days */}
                            {selectedMonth === index && mockEntries[year]?.[index]?.map(day => (
                              <button
                                key={day}
                                onClick={() => setSelectedDay(day)}
                                className={`w-full text-left pl-8 py-2 text-sm rounded-lg transition-colors ${
                                  selectedDay === day
                                    ? 'bg-pink-100 text-pink-700'
                                    : 'hover:bg-gray-50'
                                }`}
                              >
                                📝 {format(new Date(year, index, day), 'MMMM d, yyyy')}
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="flex-1 bg-white rounded-xl shadow-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                {format(new Date(selectedYear, selectedMonth, selectedDay), 'MMMM d, yyyy')}
              </h1>
              <div className="space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSave}
                  disabled={isSaving}
                  className={`px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md hover:shadow-lg transition-all duration-200 ${
                    isSaving ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSaving ? 'Saving...' : 'Save Entry'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={requestAiAnalysis}
                  disabled={isLoading}
                  className={`px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md hover:shadow-lg transition-all duration-200 ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Analyzing...' : 'AI Analysis'}
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Journal Entry */}
              <div className="lg:col-span-2">
                <textarea
                  value={journalContent}
                  onChange={(e) => setJournalContent(e.target.value)}
                  placeholder="Write your thoughts here..."
                  className="w-full h-[calc(100vh-16rem)] p-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>

              {/* AI Analysis Panel */}
              <AnimatePresence>
                {aiAnalysis && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-gray-50 p-6 rounded-lg space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">AI Analysis</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-600">Mood</h4>
                        <p className="text-gray-800">{aiAnalysis.mood}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-600">Insights</h4>
                        <p className="text-gray-800">{aiAnalysis.insights}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-600">Suggestions</h4>
                        <p className="text-gray-800">{aiAnalysis.suggestions}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
