import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              FAQ
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('FAQ page content coming soon...', 'Contenuto pagina FAQ in arrivo...')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
