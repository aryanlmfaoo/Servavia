import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import UserPanel from './pages/UserPanel';
import Nav from './components/Nav';
import UserRegister from './pages/UserRegister';
import ForgetPassword from './pages/ForgetPassword';
import JournalPage from './pages/JournalPage';
import TherapistRegister from './pages/TherapistRegister';
import Settings from './pages/Settings';
import ProtectedRoute from './components/ProtectedRoute';
import AuthNavigator from './components/AuthNavigator';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <Nav />
      <AuthNavigator>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/UserRegister" element={<UserRegister />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/TherapistRegister" element={<TherapistRegister />} />
          
          {/* Protected Routes */}
          <Route path="/user-panel" element={
            <ProtectedRoute>
              <UserPanel />
            </ProtectedRoute>
          } />
          <Route path="/JournalPage" element={
            <ProtectedRoute>
              <JournalPage />
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthNavigator>
    </main>
  );
}

export default App;
