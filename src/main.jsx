import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import JournalPage from './pages/JournalPage.jsx'
import ChatBot from './pages/ChatBot.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
        <ChatBot />
        <JournalPage />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
);
