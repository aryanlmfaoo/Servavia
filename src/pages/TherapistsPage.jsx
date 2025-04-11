import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon, StarIcon, UserGroupIcon, LanguageIcon } from '@heroicons/react/24/outline';
import api from '../utils/api';

const TherapistsPage = () => {
  const [allTherapists, setAllTherapists] = useState([]); // Store original list
  const [filteredTherapists, setFilteredTherapists] = useState([]); // Store filtered results
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Mock data for specialties
  const specialties = [
    'Anxiety', 'Depression', 'Trauma', 'Relationships',
    'Stress Management', 'Self-Esteem', 'Grief', 'Addiction'
  ];

  // Mock data for languages
  const languages = ['English', 'Spanish', 'French', 'German', 'Hindi', 'Mandarin'];

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        // Mock data for now - replace with actual API call
        const mockTherapists = [
          {
            id: "t1",
            username: "dr.smith",
            firstName: "Sarah",
            lastName: "Smith",
            specialties: ["Anxiety", "Depression", "Stress Management"],
            spokenLanguages: ["English", "Spanish"],
            yearsOfExperience: 8,
            bio: "Dr. Smith specializes in cognitive-behavioral therapy and mindfulness-based approaches. She has helped hundreds of clients overcome anxiety and depression.",
            profilePictureUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t2",
            username: "dr.johnson",
            firstName: "Michael",
            lastName: "Johnson",
            specialties: ["Trauma", "Relationships", "Grief"],
            spokenLanguages: ["English", "French"],
            yearsOfExperience: 12,
            bio: "Dr. Johnson is an expert in trauma therapy and relationship counseling. His compassionate approach helps clients heal and grow.",
            profilePictureUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t3",
            username: "dr.wong",
            firstName: "Lisa",
            lastName: "Wong",
            specialties: ["Self-Esteem", "Addiction", "Stress Management"],
            spokenLanguages: ["English", "Mandarin"],
            yearsOfExperience: 6,
            bio: "Dr. Wong combines traditional therapy with holistic approaches to help clients build self-esteem and overcome addiction.",
            profilePictureUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t4",
            username: "dr.garcia",
            firstName: "Carlos",
            lastName: "Garcia",
            specialties: ["Relationships", "Anxiety", "Depression"],
            spokenLanguages: ["English", "Spanish", "French"],
            yearsOfExperience: 10,
            bio: "Dr. Garcia specializes in couples therapy and individual counseling. His multicultural background helps him connect with diverse clients.",
            profilePictureUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t5",
            username: "dr.patel",
            firstName: "Priya",
            lastName: "Patel",
            specialties: ["Trauma", "Grief", "Self-Esteem"],
            spokenLanguages: ["English", "Hindi"],
            yearsOfExperience: 7,
            bio: "Dr. Patel uses evidence-based approaches to help clients process trauma and build resilience. She is known for her warm and empathetic style.",
            profilePictureUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t6",
            username: "dr.kim",
            firstName: "Jin",
            lastName: "Kim",
            specialties: ["Anxiety", "Cultural Identity", "Family Therapy"],
            spokenLanguages: ["English", "Korean", "Japanese"],
            yearsOfExperience: 9,
            bio: "Dr. Kim specializes in multicultural counseling and family therapy. His expertise in cultural identity issues helps clients navigate complex family dynamics.",
            profilePictureUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t7",
            username: "dr.anderson",
            firstName: "Emma",
            lastName: "Anderson",
            specialties: ["Child Psychology", "ADHD", "Learning Disabilities"],
            spokenLanguages: ["English", "German"],
            yearsOfExperience: 11,
            bio: "Dr. Anderson is a child psychologist with extensive experience in ADHD and learning disabilities. She uses play therapy and cognitive-behavioral techniques.",
            profilePictureUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t8",
            username: "dr.martinez",
            firstName: "Sofia",
            lastName: "Martinez",
            specialties: ["Eating Disorders", "Body Image", "Anxiety"],
            spokenLanguages: ["English", "Spanish", "Portuguese"],
            yearsOfExperience: 8,
            bio: "Dr. Martinez specializes in treating eating disorders and body image issues. Her compassionate approach helps clients develop healthy relationships with food and their bodies.",
            profilePictureUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t9",
            username: "dr.wilson",
            firstName: "David",
            lastName: "Wilson",
            specialties: ["PTSD", "Military Trauma", "Substance Abuse"],
            spokenLanguages: ["English"],
            yearsOfExperience: 15,
            bio: "Dr. Wilson is a veteran and specializes in treating military trauma and PTSD. His unique perspective helps veterans and first responders heal from trauma.",
            profilePictureUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t10",
            username: "dr.nguyen",
            firstName: "Minh",
            lastName: "Nguyen",
            specialties: ["LGBTQ+ Issues", "Gender Identity", "Relationships"],
            spokenLanguages: ["English", "Vietnamese", "Cantonese"],
            yearsOfExperience: 7,
            bio: "Dr. Nguyen specializes in LGBTQ+ mental health and gender identity issues. Their inclusive approach creates a safe space for all clients.",
            profilePictureUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t11",
            username: "dr.cohen",
            firstName: "Rachel",
            lastName: "Cohen",
            specialties: ["OCD", "Anxiety Disorders", "Phobias"],
            spokenLanguages: ["English", "Hebrew"],
            yearsOfExperience: 10,
            bio: "Dr. Cohen is an expert in treating OCD and anxiety disorders. She uses exposure therapy and cognitive techniques to help clients overcome their fears.",
            profilePictureUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t12",
            username: "dr.rodriguez",
            firstName: "Alejandro",
            lastName: "Rodriguez",
            specialties: ["Career Counseling", "Life Transitions", "Stress Management"],
            spokenLanguages: ["English", "Spanish", "Italian"],
            yearsOfExperience: 9,
            bio: "Dr. Rodriguez helps clients navigate career changes and life transitions. His practical approach combines therapy with career coaching.",
            profilePictureUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t13",
            username: "dr.lee",
            firstName: "Jennifer",
            lastName: "Lee",
            specialties: ["Perinatal Mental Health", "Postpartum Depression", "Parenting"],
            spokenLanguages: ["English", "Korean", "Japanese"],
            yearsOfExperience: 8,
            bio: "Dr. Lee specializes in perinatal mental health and supports parents through pregnancy and early parenthood. Her gentle approach helps families thrive.",
            profilePictureUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t14",
            username: "dr.jackson",
            firstName: "Marcus",
            lastName: "Jackson",
            specialties: ["Anger Management", "Men's Issues", "Relationships"],
            spokenLanguages: ["English"],
            yearsOfExperience: 12,
            bio: "Dr. Jackson specializes in men's mental health and anger management. His direct approach helps clients develop healthy emotional expression.",
            profilePictureUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            id: "t15",
            username: "dr.rossi",
            firstName: "Isabella",
            lastName: "Rossi",
            specialties: ["Art Therapy", "Trauma", "Anxiety"],
            spokenLanguages: ["English", "Italian", "French"],
            yearsOfExperience: 7,
            bio: "Dr. Rossi combines traditional therapy with art therapy techniques. Her creative approach helps clients express and process emotions through art.",
            profilePictureUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
        ];
        setAllTherapists(mockTherapists);
        setFilteredTherapists(mockTherapists);
      } catch (error) {
        setError('Failed to load therapists. Please try again later.');
        console.error('Error fetching therapists:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTherapists();
  }, []);

  // Apply filters whenever search term or specialty changes
  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...allTherapists];

      // Apply search filter
      if (searchTerm) {
        filtered = filtered.filter(therapist => 
          therapist.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          therapist.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          therapist.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      // Apply specialty filter
      if (selectedSpecialty) {
        filtered = filtered.filter(therapist => 
          therapist.specialties.includes(selectedSpecialty)
        );
      }

      setFilteredTherapists(filtered);
    };

    applyFilters();
  }, [searchTerm, selectedSpecialty, allTherapists]);

  const handleSearch = (e) => {
    e.preventDefault();
    // The filtering is now handled by the useEffect above
  };

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  const handleSubscribe = async (therapistId) => {
    try {
      setIsSubscribed(true);
      // TODO: Implement actual API call
      // await api.post(`/therapists/${therapistId}/subscribe`);
    } catch (error) {
      setError('Failed to subscribe. Please try again.');
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

          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800">Find Your Therapist</h1>
            <p className="mt-2 text-gray-600">
              Browse our network of licensed therapists and find the perfect match for your needs.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by name or specialty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <select
                value={selectedSpecialty}
                onChange={handleSpecialtyChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">All Specialties</option>
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {/* Therapists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTherapists.map((therapist) => (
              <motion.div
                key={therapist.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedTherapist(therapist)}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={therapist.profilePictureUrl}
                      alt={`${therapist.firstName} ${therapist.lastName}`}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        Dr. {therapist.firstName} {therapist.lastName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {therapist.yearsOfExperience} years of experience
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {therapist.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center text-sm text-gray-500">
                      <LanguageIcon className="h-4 w-4 mr-1" />
                      <span>{therapist.spokenLanguages.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Therapist Detail Modal */}
          <AnimatePresence>
            {selectedTherapist && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedTherapist(null)}
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
                      <div className="flex items-start space-x-6">
                        <img
                          src={selectedTherapist.profilePictureUrl}
                          alt={`${selectedTherapist.firstName} ${selectedTherapist.lastName}`}
                          className="h-24 w-24 rounded-full object-cover"
                        />
                        <div>
                          <h2 className="text-2xl font-serif font-semibold text-indigo-900">
                            Dr. {selectedTherapist.firstName} {selectedTherapist.lastName}
                          </h2>
                          <p className="text-sm text-indigo-600">
                            {selectedTherapist.yearsOfExperience} years of experience
                          </p>
                          <div className="mt-2 flex items-center text-sm text-indigo-600">
                            <LanguageIcon className="h-4 w-4 mr-1" />
                            <span>{selectedTherapist.spokenLanguages.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedTherapist(null)}
                        className="text-indigo-400 hover:text-indigo-600 transition-colors"
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="space-y-8">
                      {/* Bio */}
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium text-indigo-800 mb-3">About</h3>
                        <p className="text-gray-700 leading-relaxed">{selectedTherapist.bio}</p>
                      </div>

                      {/* Specialties */}
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium text-indigo-800 mb-4">Specialties</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedTherapist.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Subscribe Button */}
                      <div className="flex justify-center">
                        <button
                          onClick={() => handleSubscribe(selectedTherapist.id)}
                          disabled={isSubscribed}
                          className={`px-8 py-3 rounded-lg text-white font-medium transition-colors ${
                            isSubscribed
                              ? 'bg-green-500 cursor-not-allowed'
                              : 'bg-indigo-600 hover:bg-indigo-700'
                          }`}
                        >
                          {isSubscribed ? 'Subscribed' : 'Subscribe to Therapist'}
                        </button>
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

export default TherapistsPage; 