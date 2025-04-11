import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DocumentTextIcon, CalendarIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import api from '../utils/api';

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        // Mock data for now - replace with actual API call
        const mockReports = [
          {
            reportId: "report_123456",
            reportDate: "2025-04-11T10:00:00Z",
            moodSummary: "You felt a rollercoaster of emotions today, but you handled it like a pro.",
            keyEmotions: {
              joy: "You felt joyful after your morning workout.",
              anxiety: "You experienced anxiety before your exam.",
              relief: "You felt relieved after submitting your project."
            },
            insights: [
              "Physical activity improves your morning mood.",
              "Deadlines trigger anxiety, but you manage them well.",
              "Talking to friends helps you relax."
            ],
            recommendations: [
              "Keep exercising in the morning.",
              "Try breathing exercises before stressful events.",
              "Schedule regular check-ins with close friends."
            ],
            quote: "You are not a drop in the ocean. You are the entire ocean in a drop. – Rumi",
            createdAt: "2025-04-11T10:05:00Z"
          },
          {
            reportId: "report_789012",
            reportDate: "2025-04-10T15:30:00Z",
            moodSummary: "A day of steady progress and positive energy.",
            keyEmotions: {
              contentment: "You felt satisfied with your work progress.",
              motivation: "You were inspired by a new project idea.",
              gratitude: "You appreciated the support from your team."
            },
            insights: [
              "You work best in the afternoon.",
              "Team collaboration boosts your productivity.",
              "New challenges excite you."
            ],
            recommendations: [
              "Schedule important tasks for the afternoon.",
              "Seek more collaborative opportunities.",
              "Take on new challenges regularly."
            ],
            quote: "The only way to do great work is to love what you do. – Steve Jobs",
            createdAt: "2025-04-10T15:35:00Z"
          },
          {
            reportId: "report_345678",
            reportDate: "2025-04-09T09:15:00Z",
            moodSummary: "A reflective day with moments of deep insight and clarity.",
            keyEmotions: {
              introspection: "You spent time reflecting on personal growth.",
              clarity: "You gained new perspectives on challenges.",
              peace: "You found moments of tranquility in nature."
            },
            insights: [
              "Morning meditation helps set a positive tone.",
              "Nature walks enhance your problem-solving abilities.",
              "Journaling before bed improves sleep quality."
            ],
            recommendations: [
              "Maintain your morning meditation practice.",
              "Schedule regular nature breaks during work.",
              "Keep a gratitude journal by your bedside."
            ],
            quote: "The quieter you become, the more you can hear. – Ram Dass",
            createdAt: "2025-04-09T09:20:00Z"
          },
          {
            reportId: "report_901234",
            reportDate: "2025-04-08T14:45:00Z",
            moodSummary: "Creative energy flowing with bursts of inspiration.",
            keyEmotions: {
              inspiration: "You felt creatively charged throughout the day.",
              excitement: "New ideas sparked your imagination.",
              fulfillment: "You completed a creative project successfully."
            },
            insights: [
              "Your creativity peaks in the early afternoon.",
              "Collaboration enhances your creative output.",
              "Regular breaks maintain creative momentum."
            ],
            recommendations: [
              "Schedule creative work during peak hours.",
              "Join a creative community or workshop.",
              "Take short breaks every 90 minutes."
            ],
            quote: "Creativity is intelligence having fun. – Albert Einstein",
            createdAt: "2025-04-08T14:50:00Z"
          },
          {
            reportId: "report_567890",
            reportDate: "2025-04-07T11:30:00Z",
            moodSummary: "A balanced day with healthy emotional regulation.",
            keyEmotions: {
              balance: "You maintained emotional equilibrium.",
              confidence: "You handled challenges with assurance.",
              connection: "You strengthened important relationships."
            },
            insights: [
              "Regular check-ins help maintain emotional balance.",
              "Confidence grows with small daily achievements.",
              "Quality time with loved ones boosts well-being."
            ],
            recommendations: [
              "Continue your daily emotional check-ins.",
              "Celebrate small wins throughout the day.",
              "Schedule regular quality time with loved ones."
            ],
            quote: "Balance is not something you find, it's something you create. – Jana Kingsford",
            createdAt: "2025-04-07T11:35:00Z"
          },
          {
            reportId: "report_234567",
            reportDate: "2025-04-06T16:20:00Z",
            moodSummary: "A day of learning and personal growth.",
            keyEmotions: {
              curiosity: "You explored new interests and ideas.",
              growth: "You embraced learning opportunities.",
              satisfaction: "You completed a challenging task."
            },
            insights: [
              "Learning new skills boosts your confidence.",
              "Challenges are opportunities for growth.",
              "Regular reflection enhances learning."
            ],
            recommendations: [
              "Dedicate time daily to learning new skills.",
              "Embrace challenges as growth opportunities.",
              "Keep a learning journal to track progress."
            ],
            quote: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. – Brian Herbert",
            createdAt: "2025-04-06T16:25:00Z"
          }
        ];
        setReports(mockReports);
      } catch (error) {
        setError('Failed to load reports. Please try again later.');
        console.error('Error fetching reports:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, []);

  const handleReportClick = (report) => {
    setSelectedReport(report);
  };

  const handleCloseReport = () => {
    setSelectedReport(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              {error}
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800">Your Reports</h1>
            <p className="mt-2 text-gray-600">
              Your personalized mental wellness reports provide insights into your emotional patterns and growth.
              These reports are automatically generated based on your journal entries and can be shared with your therapist.
            </p>
          </div>

          {reports.length === 0 ? (
            <div className="text-center py-12">
              <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No reports yet</h3>
              <p className="mt-2 text-sm text-gray-500">
                Your reports will appear here once you've made enough journal entries.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((report) => (
                <motion.div
                  key={report.reportId}
                  whileHover={{ y: -5 }}
                  onClick={() => handleReportClick(report)}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="h-5 w-5 text-indigo-500" />
                        <span className="text-sm text-gray-500">
                          {new Date(report.reportDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <ChartBarIcon className="h-5 w-5 text-indigo-500" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Mood Summary</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{report.moodSummary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {Object.keys(report.keyEmotions).map((emotion) => (
                        <span
                          key={emotion}
                          className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
                        >
                          {emotion}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <AnimatePresence>
            {selectedReport && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                onClick={handleCloseReport}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-serif font-semibold text-indigo-900">
                          {new Date(selectedReport.reportDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </h2>
                        <p className="text-sm text-indigo-600">
                          Generated on {new Date(selectedReport.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={handleCloseReport}
                        className="text-indigo-400 hover:text-indigo-600 transition-colors"
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="space-y-8">
                      {/* Mood Summary */}
                      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
                        <h3 className="text-xl font-medium text-indigo-800 mb-3">Mood Summary</h3>
                        <p className="text-gray-700 leading-relaxed">{selectedReport.moodSummary}</p>
                      </div>

                      {/* Key Emotions */}
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium text-indigo-800 mb-4">Key Emotions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {Object.entries(selectedReport.keyEmotions).map(([emotion, description]) => (
                            <div key={emotion} className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                              <h4 className="font-medium text-indigo-700 capitalize mb-2">{emotion}</h4>
                              <p className="text-indigo-600 text-sm">{description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Insights */}
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium text-indigo-800 mb-4">Insights</h3>
                        <ul className="space-y-3">
                          {selectedReport.insights.map((insight, index) => (
                            <li key={index} className="flex items-start">
                              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span className="text-gray-700">{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Recommendations */}
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium text-indigo-800 mb-4">Recommendations</h3>
                        <ul className="space-y-3">
                          {selectedReport.recommendations.map((recommendation, index) => (
                            <li key={index} className="flex items-start">
                              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                              <span className="text-gray-700">{recommendation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Quote */}
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-lg shadow-sm">
                        <p className="text-white text-lg italic leading-relaxed">{selectedReport.quote}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default ReportsPage; 