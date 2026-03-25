import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TeleprompterIcon, ArrowRightIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const ProductVoxPrompter = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('Adaptive speed', 'Velocità adattiva'),
      description: t('Listens to the speaker and adjusts scroll automatically.', 'Ascolta il relatore e regola lo scroll automaticamente.'),
    },
    {
      title: t('Voice-driven cues', 'Segnali vocali'),
      description: t('Highlights current sentence as speaker reads.', 'Evidenzia la frase corrente mentre il relatore legge.'),
    },
    {
      title: t('Multi-device support', 'Supporto multi-dispositivo'),
      description: t('Tablet, laptop, external monitor — any screen.', 'Tablet, laptop, monitor esterno — qualsiasi schermo.'),
    },
    {
      title: t('Custom fonts & sizes', 'Font e dimensioni personalizzate'),
      description: t('Adjust for readability and personal preference.', 'Regola per leggibilità e preferenza personale.'),
    },
    {
      title: t('Script import', 'Importazione script'),
      description: t('Upload your script in any format — we handle it.', 'Carica il tuo script in qualsiasi formato — ce ne occupiamo noi.'),
    },
    {
      title: t('Remote control', 'Controllo remoto'),
      description: t('Control from phone or tablet while presenting.', 'Controlla da telefono o tablet mentre presenti.'),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16 relative">
      <AnimatedBackground variant="default" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 mb-6 shadow-xl shadow-pink-500/50 animate-float">
            <TeleprompterIcon className="w-10 h-10 text-white" />
          </div>
          
          <div className="inline-block px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 mb-6">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              Coming Soon
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              VoxPrompter
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {t(
              'A smart teleprompter that listens and adapts — speed, font, cues — so your speakers always deliver flawlessly.',
              'Un teleprompter intelligente che ascolta e si adatta — velocità, font, segnali — così i tuoi relatori parlano sempre perfettamente.'
            )}
          </p>

          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-pink-500/50 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2 mx-auto">
            <span>{t('Notify me when available', 'Avvisami quando disponibile')}</span>
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-pink-500 dark:hover:border-pink-500 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-3 h-3 rounded-full bg-pink-500 mb-4"></div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="relative p-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('Flawless presentations', 'Presentazioni impeccabili')}
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            {t('Be notified when VoxPrompter launches.', 'Ricevi una notifica quando VoxPrompter viene lanciato.')}
          </p>
          <button className="px-8 py-4 bg-white text-pink-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            {t('Join Waitlist →', 'Iscriviti alla Waitlist →')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductVoxPrompter;