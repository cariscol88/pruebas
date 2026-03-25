import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { VideoIcon, ArrowRightIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const ProductVoxStream = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('Multi-protocol support', 'Supporto multi-protocollo'),
      description: t('RTMP, SRT, WebRTC — use what works for you.', 'RTMP, SRT, WebRTC — usa ciò che funziona per te.'),
    },
    {
      title: t('Embedded multilingual audio', 'Audio multilingue incorporato'),
      description: t('Every viewer picks their language in the player.', 'Ogni spettatore sceglie la sua lingua nel player.'),
    },
    {
      title: t('Enterprise CDN', 'CDN Enterprise'),
      description: t('Global delivery, instant scale, 99.9% uptime.', 'Distribuzione globale, scala istantanea, uptime 99.9%.'),
    },
    {
      title: t('Recording & replay', 'Registrazione e replay'),
      description: t('Auto-record with all language tracks intact.', 'Registrazione automatica con tutte le tracce linguistiche intatte.'),
    },
    {
      title: t('Embeddable player', 'Player integrabile'),
      description: t('Drop it into your website or app with one line.', 'Inseriscilo nel tuo sito o app con una riga.'),
    },
    {
      title: t('Analytics dashboard', 'Dashboard analytics'),
      description: t('Viewer count, language breakdown, engagement metrics.', 'Conteggio spettatori, ripartizione lingue, metriche engagement.'),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16 relative">
      <AnimatedBackground variant="default" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-700 to-purple-900 mb-6 shadow-xl shadow-purple-500/50 animate-float">
            <VideoIcon className="w-10 h-10 text-white" />
          </div>
          
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 mb-6">
            <span className="text-sm font-semibold text-green-700 dark:text-green-400">
              {t('Available now', 'Disponibile ora')}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
              VoxStream
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {t(
              'Live event broadcasting with built-in multilingual audio. Think Vimeo — with real-time translation for every viewer.',
              'Broadcast di eventi live con audio multilingue integrato. Come Vimeo — con traduzione in tempo reale per ogni spettatore.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950 text-white rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/50 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2">
              <span>{t('Request a Demo', 'Richiedi una Demo')}</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:border-purple-700 dark:hover:border-purple-700 transition-all duration-300">
              {t('View Pricing', 'Vedi Prezzi')}
            </button>
          </div>
        </div>

        <div className="mb-20">
          <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden border-2 border-purple-200 dark:border-purple-800 shadow-2xl group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <VideoIcon className="w-12 h-12 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                  {t('Stream Preview', 'Anteprima Stream')}
                </p>
                <p className="text-gray-500 dark:text-gray-500 mt-2">
                  {t('Player with language selector', 'Player con selettore lingua')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('Powerful features', 'Funzionalità potenti')}
            <br />
            <span className="text-gray-600 dark:text-gray-400">
              {t('for professional streaming.', 'per streaming professionale.')}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-3 h-3 rounded-full bg-purple-600 mb-4"></div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative p-12 bg-gradient-to-r from-purple-700 to-purple-900 rounded-3xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('Ready to start streaming?', 'Pronto per iniziare lo streaming?')}
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            {t('Get a personalized demo with your streaming requirements.', 'Ottieni una demo personalizzata con i tuoi requisiti di streaming.')}
          </p>
          <button className="px-8 py-4 bg-white text-purple-700 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            {t('Schedule Demo →', 'Prenota Demo →')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductVoxStream;