import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PlayIcon, ArrowRightIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const DemoPageComplete = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16 relative">
      <AnimatedBackground variant="hero" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
            {t('Request a demo', 'Richiedi una demo')}
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {t('See it live.', 'Guardalo dal vivo.')}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('Hear the difference.', 'Senti la differenza.')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t(
              "Choose how you'd like to experience VoxNova Creative. We'll set everything up — no hardware, no installation.",
              'Scegli come vuoi sperimentare VoxNova Creative. Configuriamo tutto noi — nessun hardware, nessuna installazione.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border-2 border-blue-500 dark:border-blue-500 shadow-2xl shadow-blue-500/20 overflow-hidden group">
            <div className="absolute top-0 right-0 px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded-bl-2xl">
              {t('Recommended', 'Consigliato')}
            </div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">🗓</div>
              <h2 className="text-3xl font-bold mb-4">
                {t('Book a live session', 'Prenota una sessione live')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t(
                  'We set up a dedicated event room and walk you through a real-time demonstration with multiple languages active simultaneously. 30 minutes, fully personalised.',
                  'Configuriamo una stanza evento dedicata e ti guidiamo attraverso una dimostrazione in tempo reale con più lingue attive simultaneamente. 30 minuti, completamente personalizzata.'
                )}
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t('Full name', 'Nome completo')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('Your name', 'Il tuo nome')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t('Work email', 'Email lavoro')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t('Organisation', 'Organizzazione')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('Company or institution', 'Azienda o istituzione')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t('Preferred date', 'Data preferita')}
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t('Languages of interest', 'Lingue di interesse')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. EN, IT, FR, DE, ES"
                  />
                </div>
              </div>

              <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>{t('Request demo', 'Richiedi demo')}</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">
                {t('Try the listener app', 'Prova l\'app listener')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t(
                  'Open the listener interface directly in your browser. Experience how your audience will hear translated audio on their own device — no sign-up required.',
                  'Apri l\'interfaccia listener direttamente nel browser. Scopri come il tuo pubblico ascolterà l\'audio tradotto sul proprio dispositivo — nessuna registrazione richiesta.'
                )}
              </p>
              <button className="px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>{t('Open listener app', 'Apri app listener')}</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-2xl font-bold mb-3">
                {t('Request a quote', 'Richiedi un preventivo')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t(
                  "Have a specific event in mind? Send us the details and we'll put together a tailored proposal within 24 hours.",
                  'Hai un evento specifico in mente? Mandaci i dettagli e prepareremo una proposta su misura entro 24 ore.'
                )}
              </p>
              <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 text-gray-900 dark:text-white rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>{t('Build your package', 'Costruisci il tuo pacchetto')}</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPageComplete;