import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { DollarIcon, ArrowRightIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const PricingPageComplete = () => {
  const { t } = useLanguage();
  const [languages, setLanguages] = useState(5);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16 relative">
      <AnimatedBackground variant="default" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
            {t('Transparent pricing', 'Prezzi trasparenti')}
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {t('Every event is', 'Ogni evento è')}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('unique.', 'unico.')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t(
              "We don't believe in one-size-fits-all plans. Your quote is built around the products you need, the languages you use, and the duration of your event.",
              'Non crediamo nei piani standard. Il tuo preventivo viene costruito intorno ai prodotti che scegli, alle lingue che usi e alla durata del tuo evento.'
            )}
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-gray-700 shadow-2xl mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {t('Build your event package', 'Costruisci il tuo pacchetto evento')}
          </h2>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold mb-4">
                {t('Products', 'Prodotti')}
              </label>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                  {t('AI Interpretation', 'Interpretazione AI')}
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600">
                  VoxStream <span className="ml-2 text-xs bg-gray-400 dark:bg-gray-600 px-2 py-1 rounded">Soon</span>
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600">
                  VoxPulse <span className="ml-2 text-xs bg-gray-400 dark:bg-gray-600 px-2 py-1 rounded">Soon</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-4">
                {t('Number of languages', 'Numero di lingue')}: <span className="text-blue-600">{languages}</span>
              </label>
              <input
                type="range"
                min="2"
                max="57"
                value={languages}
                onChange={(e) => setLanguages(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>2</span>
                <span>10</span>
                <span>25</span>
                <span>57+</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-4">
                {t('Event duration', 'Durata dell\'evento')}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button className="px-4 py-3 bg-blue-600 text-white rounded-lg font-medium">
                  {t('Half day (4h)', 'Mezza giornata (4h)')}
                </button>
                <button className="px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600">
                  {t('Full day (8h)', 'Giornata intera (8h)')}
                </button>
                <button className="px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600">
                  {t('Multi-day', 'Più giorni')}
                </button>
                <button className="px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600">
                  {t('Subscription', 'Abbonamento')}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-4">
                {t('Expected audience size', 'Dimensione prevista del pubblico')}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button className="px-4 py-3 bg-blue-600 text-white rounded-lg font-medium">
                  {t('Up to 100', 'Fino a 100')}
                </button>
                <button className="px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600">
                  100 – 500
                </button>
                <button className="px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600">
                  500 – 2,000
                </button>
                <button className="px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600">
                  2,000+
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-lg font-semibold mb-4">
              {t('Ready to get your personalised quote?', 'Pronto per il tuo preventivo personalizzato?')}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t(
                "We'll review your selection and send a detailed proposal within 24 hours.",
                'Analizzeremo la tua selezione e invieremo un preventivo dettagliato entro 24 ore.'
              )}
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto">
              <span>{t('Request quote', 'Richiedi preventivo')}</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPageComplete;