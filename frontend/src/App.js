import React, { useState } from 'react';
import '@/App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import AboutPage from './components/AboutPage';
import ProductsPage from './components/ProductsPage';
import TeamPage from './components/TeamPage';
import LanguagesPage from './components/LanguagesPage';
import PricingPage from './components/PricingPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import DemoPage from './components/DemoPage';
import PortalPage from './components/PortalPage';

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage />;
      case 'team':
        return <TeamPage />;
      case 'languages':
        return <LanguagesPage />;
      case 'pricing':
        return <PricingPage />;
      case 'faq':
        return <FAQPage />;
      case 'contact':
        return <ContactPage />;
      case 'demo':
        return <DemoPage />;
      case 'portal':
        return <PortalPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <main>
            {renderPage()}
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
