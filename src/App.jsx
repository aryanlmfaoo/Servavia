import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import UserPanel from './pages/UserPanel';
import Nav from './components/Nav';
import SignupPage from './pages/SignupPage';
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
        <Route path="/SignupPage" element={<SignupPage />} />
      </Routes>
    </main>
  );
}

export default App;
