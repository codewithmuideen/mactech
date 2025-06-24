// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import TopHeader from './components/TopHeader';
import Header from './components/Header/Header';
import SiteFooter from './components/SiteFooter';

// Pages
import Home from './pages/Home';
import Partners from './pages/Partners';
import Sales from './pages/Sales';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-white text-brand-gray-text">
        <GlobalStyles />
        <TopHeader />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
