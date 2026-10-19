import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Pages/Navbar'
import Contact from './Pages/Contact'
import Athlete from './Pages/Athlete'
import SignIn from './Pages/SignIn'


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LandingPage() {
  return (
    <main className='h-full bg-black'>
      <Home />
      <About />
      <Contact />
    </main>
  )
}

function AppContent() {
  const location = useLocation();
  const isSignInPage = location.pathname === '/login';

  return (
    <>
      <ScrollToTop />
      
      {!isSignInPage && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/talents" element={<Athlete />} />
        <Route path="/athletes" element={<Athlete />} />
        <Route path="/about" element={<main className='min-h-screen bg-[#F7F7F5]'><About /></main>} />
        <Route path="/contact" element={<main className='min-h-screen bg-black'><Contact /></main>} />
        <Route path="/login" element={<SignIn />} />
        
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
