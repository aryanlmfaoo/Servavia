import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import api from '../utils/api';

const JournalPage = () => {
  const [journals, setJournals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  // Fetch all journals on component mount
  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await api.get('/journals');
        setJournals(response.data.data);
      } catch (error) {
        setError('Failed to load journals. Please try again later.');
        console.error('Error fetching journals:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJournals();
  }, []);

  const handleCreateJournal = () => {
    setIsCreating(true);
    setFormData({ title: '', content: '' });
    setIsModalOpen(true);
  };

  const handleViewJournal = (journal) => {
    setSelectedJournal(journal);
    setFormData({
      title: journal.title,
      content: journal.content,
    });
    setIsCreating(false);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isCreating) {
        const response = await api.post('/journals', formData);
        if (response.data.status === 200) {
          // Refresh the journals list
          const updatedJournals = await api.get('/journals');
          setJournals(updatedJournals.data.data);
        }
      } else {
        const response = await api.put(`/journals/${selectedJournal.id}`, formData);
        if (response.data.status === 202) {
          // Refresh the journals list
          const updatedJournals = await api.get('/journals');
          setJournals(updatedJournals.data.data);
        }
      }
      setIsModalOpen(false);
    } catch (error) {
      setError('Failed to save journal. Please try again later.');
      console.error('Error saving journal:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/journals/${id}`);
      if (response.data.status === 204) {
        // Remove the deleted journal from the list
        setJournals(journals.filter(j => j.id !== id));
      }
    } catch (error) {
      setError('Failed to delete journal. Please try again later.');
      console.error('Error deleting journal:', error);
    }
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

          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800">My Journals</h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCreateJournal}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:bg-indigo-700 transition-all"
            >
              <PlusIcon className="h-5 w-5" />
              <span>New Journal</span>
            </motion.button>
          </div>

          {journals.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">No journals yet</h3>
              <p className="mt-2 text-sm text-gray-500">Get started by creating your first journal entry.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {journals.map((journal) => (
                <motion.div
                  key={journal.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                      {journal.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {journal.content}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(journal.createdAt).toLocaleDateString()}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewJournal(journal)}
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          <PencilIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(journal.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </main>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full"
            >
              <div className="p-6">
                <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                  {isCreating ? 'Create New Journal' : 'Edit Journal'}
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Content
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-32"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                      {isCreating ? 'Create' : 'Save'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalPage;
