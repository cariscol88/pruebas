import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { DocumentIcon, ArrowRightIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const ProductVoxTranscript = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('Real-time transcription', 'Trascrizione in tempo reale'),
      description: t('Live captions as the speaker talks.', 'Sottotitoli live mentre il relatore parla.'),
    },
    {
      title: t('57+ languages', '57+ lingue'),
      description: t('Simultaneous transcripts in every active language.', 'Trascrizioni simultanee in ogni lingua attiva.'),
    },
    {
      title: t('Perfect timestamps', 'Timestamp perfetti'),
      description: t('Every word linked to the exact moment it was spoken.', 'Ogni parola collegata al momento esatto in cui è stata pronunciata.'),
    },
    {
      title: t('Auto-export', 'Export automatico'),
      description: t('PDF, TXT, SRT — ready after your event.', 'PDF, TXT, SRT — pronti dopo il tuo evento.'),
    },
    {
      title: t('Speaker labels', 'Etichette speaker'),
      description: t('Automatic speaker identification and tagging.', 'Identificazione automatica e tagging degli speaker.'),
    },
    {
      title: t('Search & highlight', 'Ricerca ed evidenziazione'),
      description: t('Find any word across all language transcripts.', 'Trova qualsiasi parola in tutte le trascrizioni linguistiche.'),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16 relative">
      <AnimatedBackground variant="default" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 mb-6 shadow-xl shadow-amber-500/50 animate-float">
            <DocumentIcon className="w-10 h-10 text-white" />
          </div>
          
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 mb-6">
            <span className="text-sm font-semibold text-green-700 dark:text-green-400">
              {t('Available now', 'Disponibile ora')}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              VoxTranscript
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {t(
              'Real-time multilingual transcripts on screen, exported automatically after the event. Every word, perfectly timestamped.',
              'Trascrizioni multilingue in tempo reale sullo schermo, esportate automaticamente dopo l\'evento. Ogni parola, perfettamente timestampata.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-amber-500/50 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2">
              <span>{t('Request a Demo', 'Richiedi una Demo')}</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:border-amber-500 dark:hover:border-amber-500 transition-all duration-300">
              {t('View Pricing', 'Vedi Prezzi')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-500 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-3 h-3 rounded-full bg-amber-500 mb-4"></div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="relative p-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('Ready for perfect transcripts?', 'Pronto per trascrizioni perfette?')}
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            {t('Get a demo showing real-time transcription in action.', 'Ottieni una demo che mostra la trascrizione in tempo reale in azione.')}
          </p>
          <button className="px-8 py-4 bg-white text-amber-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            {t('Schedule Demo →', 'Prenota Demo →')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductVoxTranscript;