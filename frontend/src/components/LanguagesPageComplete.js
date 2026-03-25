import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GlobeIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const LanguagesPageComplete = () => {
  const { t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState('all');

  const euLanguages = [
    { flag: '🇬🇧', name: 'English', native: 'English' },
    { flag: '🇩🇪', name: 'German', native: 'Deutsch' },
    { flag: '🇫🇷', name: 'French', native: 'Français' },
    { flag: '🇮🇹', name: 'Italian', native: 'Italiano' },
    { flag: '🇪🇸', name: 'Spanish', native: 'Español' },
    { flag: '🇵🇹', name: 'Portuguese', native: 'Português' },
    { flag: '🇳🇱', name: 'Dutch', native: 'Nederlands' },
    { flag: '🇵🇱', name: 'Polish', native: 'Polski' },
    { flag: '🇸🇪', name: 'Swedish', native: 'Svenska' },
    { flag: '🇩🇰', name: 'Danish', native: 'Dansk' },
    { flag: '🇫🇮', name: 'Finnish', native: 'Suomi' },
    { flag: '🇳🇴', name: 'Norwegian', native: 'Norsk' },
    { flag: '🇷🇴', name: 'Romanian', native: 'Română' },
    { flag: '🇨🇿', name: 'Czech', native: 'Čeština' },
    { flag: '🇭🇺', name: 'Hungarian', native: 'Magyar' },
    { flag: '🇧🇬', name: 'Bulgarian', native: 'Български' },
    { flag: '🇬🇷', name: 'Greek', native: 'Ελληνικά' },
    { flag: '🇭🇷', name: 'Croatian', native: 'Hrvatski' },
    { flag: '🇸🇰', name: 'Slovak', native: 'Slovenčina' },
    { flag: '🇸🇮', name: 'Slovenian', native: 'Slovenščina' },
    { flag: '🇱🇹', name: 'Lithuanian', native: 'Lietuvių' },
    { flag: '🇱🇻', name: 'Latvian', native: 'Latviešu' },
    { flag: '🇪🇪', name: 'Estonian', native: 'Eesti' },
    { flag: '🇲🇹', name: 'Maltese', native: 'Malti' },
  ];

  const globalLanguages = [
    { flag: '🇨🇳', name: 'Chinese', native: '中文' },
    { flag: '🇯🇵', name: 'Japanese', native: '日本語' },
    { flag: '🇰🇷', name: 'Korean', native: '한국어' },
    { flag: '🇸🇦', name: 'Arabic', native: 'العربية' },
    { flag: '🇷🇺', name: 'Russian', native: 'Русский' },
    { flag: '🇮🇳', name: 'Hindi', native: 'हिन्दी' },
    { flag: '🇹🇷', name: 'Turkish', native: 'Türkçe' },
    { flag: '🇮🇱', name: 'Hebrew', native: 'עברית' },
    { flag: '🇺🇦', name: 'Ukrainian', native: 'Українська' },
    { flag: '🇻🇳', name: 'Vietnamese', native: 'Tiếng Việt' },
    { flag: '🇹🇭', name: 'Thai', native: 'ไทย' },
    { flag: '🇮🇩', name: 'Indonesian', native: 'Bahasa Indonesia' },
    { flag: '🇲🇾', name: 'Malay', native: 'Bahasa Melayu' },
    { flag: '🇵🇭', name: 'Filipino', native: 'Filipino' },
    { flag: '🇮🇷', name: 'Persian', native: 'فارسی' },
    { flag: '🇧🇩', name: 'Bengali', native: 'বাংলা' },
    { flag: '🇵🇰', name: 'Urdu', native: 'اردو' },
    { flag: '🇰🇿', name: 'Kazakh', native: 'Қазақша' },
    { flag: '🇨🇴', name: 'Catalan', native: 'Català' },
    { flag: '🇳🇵', name: 'Nepali', native: 'नेपाली' },
  ];

  const allLanguages = [...euLanguages, ...globalLanguages];
  const displayLanguages = selectedRegion === 'eu' ? euLanguages : selectedRegion === 'global' ? globalLanguages : allLanguages;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16 relative">
      <AnimatedBackground variant="default" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-6 shadow-xl shadow-blue-500/50 animate-float">
            <GlobeIcon className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-6xl sm:text-7xl font-bold mb-6">
            <span className="text-9xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">57+</span>
            <br />
            {t('languages. one platform.', 'lingue. una piattaforma.')}
            <br />
            <span className="text-gray-600 dark:text-gray-400">
              {t('zero boundaries.', 'zero confini.')}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t(
              'Every language runs in parallel. Every listener hears their own language the moment the speaker finishes a sentence.',
              'Ogni lingua scorre in parallelo. Ogni ascoltatore sente la propria lingua nel momento in cui il relatore finisce la frase.'
            )}
          </p>
        </div>

        <div className="flex justify-center mb-12 space-x-2">
          <button
            onClick={() => setSelectedRegion('all')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              selectedRegion === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {t('All (57+)', 'Tutte (57+)')}
          </button>
          <button
            onClick={() => setSelectedRegion('eu')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              selectedRegion === 'eu'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {t('🇪🇺 EU (24)', '🇪🇺 UE (24)')}
          </button>
          <button
            onClick={() => setSelectedRegion('global')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              selectedRegion === 'global'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {t('🌍 Global (33)', '🌍 Globale (33)')}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {displayLanguages.map((lang, index) => (
            <div
              key={index}
              className="group p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
            >
              <div className="text-4xl mb-2">{lang.flag}</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">{lang.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{lang.native}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border border-blue-200 dark:border-gray-700">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">🌐</div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                {t('All languages run simultaneously', 'Tutte le lingue scorrono simultaneamente')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t(
                  'When you start an event, every configured language channel is active from the first word. There is no switching, no delay between channels, and no additional cost per language.',
                  'Quando avvii un evento, ogni canale linguistico configurato è attivo dalla prima parola. Non ci sono commutazioni, nessun ritardo tra canali e nessun costo aggiuntivo per lingua.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesPageComplete;