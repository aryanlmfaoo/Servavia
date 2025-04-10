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

  const years = [2024, 2023, 2022];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const mockEntries = {
    '2024': {
      '0': [1, 3, 5, 8],
      '1': [2, 4, 6],
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100">
      <div className="container mx-auto px-4 py-10">
        <div className="flex gap-6">
          {/* Sidebar */}
          <motion.div
            initial={{ x: sidebarOpen ? 0 : -280 }}
            animate={{ x: sidebarOpen ? 0 : -280 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-72 bg-white rounded-2xl shadow-2xl p-5 h-[calc(100vh-5rem)] flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Journal Entries
              </h2>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="space-y-4">
                {years.map(year => (
                  <div key={year} className="space-y-2">
                    <button
                      onClick={() => setSelectedYear(year)}
                      className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedYear === year
                          ? 'bg-purple-100 text-purple-700'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      📚 {year}
                    </button>

                    {selectedYear === year && (
                      <div className="ml-4 space-y-1">
                        {months.map((month, index) => (
                          <div key={month}>
                            <button
                              onClick={() => setSelectedMonth(index)}
                              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                selectedMonth === index
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'hover:bg-gray-50 text-gray-600'
                              }`}
                            >
                              📖 {month}
                            </button>

                            {selectedMonth === index && mockEntries[year]?.[index]?.map(day => (
                              <button
                                key={day}
                                onClick={() => setSelectedDay(day)}
                                className={`w-full text-left pl-8 py-2 text-sm rounded-lg transition-colors ${
                                  selectedDay === day
                                    ? 'bg-pink-100 text-pink-700 font-semibold'
                                    : 'hover:bg-gray-50 text-gray-600'
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
            className="flex-1 bg-white rounded-2xl shadow-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
                {format(new Date(selectedYear, selectedMonth, selectedDay), 'MMMM d, yyyy')}
              </h1>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSave}
                  disabled={isSaving}
                  className={`px-5 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-200 ${
                    isSaving ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  {isSaving ? 'Saving...' : 'Save Entry'}
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
                  className="w-full h-[calc(100vh-17rem)] p-4 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none shadow-md transition-all duration-300 hover:shadow-xl text-gray-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
