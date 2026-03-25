import React, { useState } from 'react';
import '@/App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import AboutPage from './components/AboutPage';
import ProductsPage from './components/ProductsPage';
import TeamPage from './components/TeamPage';
import LanguagesPageComplete from './components/LanguagesPageComplete';
import PricingPageComplete from './components/PricingPageComplete';
import FAQPageComplete from './components/FAQPageComplete';
import ContactPageComplete from './components/ContactPageComplete';
import DemoPageComplete from './components/DemoPageComplete';
import PortalPageComplete from './components/PortalPageComplete';
import ProductVoxNovAI from './components/ProductVoxNovAI';
import ProductVoxStream from './components/ProductVoxStream';
import ProductVoxPulse from './components/ProductVoxPulse';
import ProductVoxTranscript from './components/ProductVoxTranscript';
import ProductVoxPrompter from './components/ProductVoxPrompter';

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage setCurrentPage={setCurrentPage} />;
      case 'team':
        return <TeamPage />;
      case 'languages':
        return <LanguagesPageComplete />;
      case 'pricing':
        return <PricingPageComplete />;
      case 'faq':
        return <FAQPageComplete />;
      case 'contact':
        return <ContactPageComplete />;
      case 'demo':
        return <DemoPageComplete />;
      case 'portal':
        return <PortalPageComplete />;
      // Individual product pages
      case 'product-voxnovai':
        return <ProductVoxNovAI />;
      case 'product-voxstream':
        return <ProductVoxStream />;
      case 'product-voxpulse':
        return <ProductVoxPulse />;
      case 'product-voxtranscript':
        return <ProductVoxTranscript />;
      case 'product-voxprompter':
        return <ProductVoxPrompter />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <CustomCursor />
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
