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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/user-panel" element={<UserPanel />} />
        <Route path="/UserRegister" element={<UserRegister />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/TherapistRegister" element={<TherapistRegister />} />
      </Routes>
    </main>
  );
}

export default App;
