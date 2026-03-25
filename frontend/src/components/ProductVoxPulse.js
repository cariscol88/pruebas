import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PulseIcon, ArrowRightIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const ProductVoxPulse = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('Live polls', 'Sondaggi live'),
      description: t('Real-time voting with instant results in all languages.', 'Voto in tempo reale con risultati istantanei in tutte le lingue.'),
    },
    {
      title: t('Q&A moderation', 'Moderazione Q&A'),
      description: t('Questions in any language, curated and broadcast to all.', 'Domande in qualsiasi lingua, curate e trasmesse a tutti.'),
    },
    {
      title: t('Reactions & emoji', 'Reazioni ed emoji'),
      description: t('Universal visual feedback across all languages.', 'Feedback visivo universale in tutte le lingue.'),
    },
    {
      title: t('Word clouds', 'Nuvole di parole'),
      description: t('Aggregate responses visually, translated in real-time.', 'Risposte aggregate visivamente, tradotte in tempo reale.'),
    },
    {
      title: t('Sentiment analysis', 'Analisi del sentiment'),
      description: t('Understand audience mood across language barriers.', 'Comprendi l\'umore del pubblico oltre le barriere linguistiche.'),
    },
    {
      title: t('Export & analytics', 'Export e analytics'),
      description: t('Post-event data with language breakdowns.', 'Dati post-evento con ripartizione lingue.'),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16 relative">
      <AnimatedBackground variant="default" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 mb-6 shadow-xl shadow-green-500/50 animate-float">
            <PulseIcon className="w-10 h-10 text-white" />
          </div>
          
          <div className="inline-block px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 mb-6">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              Coming Soon
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              VoxPulse
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {t(
              'Live polls, Q&A, and reactions — all multilingual. Questions in any language, moderated and broadcast in all of them.',
              'Sondaggi live, Q&A e reazioni — tutto multilingue. Domande in qualsiasi lingua, moderate e trasmesse in tutte.'
            )}
          </p>

          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-green-500/50 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2 mx-auto">
            <span>{t('Notify me when available', 'Avvisami quando disponibile')}</span>
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 mb-4"></div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="relative p-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('Engage your audience', 'Coinvolgi il tuo pubblico')}
          </h2>
          <p className="text-xl mb-8 text-green-100">
            {t('Get notified when VoxPulse is ready.', 'Ricevi una notifica quando VoxPulse è pronto.')}
          </p>
          <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            {t('Join Waitlist →', 'Iscriviti alla Waitlist →')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductVoxPulse;