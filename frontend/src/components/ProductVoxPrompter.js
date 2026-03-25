import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TeleprompterIcon, ArrowRightIcon, SparklesIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const ProductVoxPrompter = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('Real-time captions', 'Sottotitoli in tempo reale'),
      description: t('Live text display of everything being said on stage.', 'Visualizzazione testuale live di tutto ciò che viene detto sul palco.'),
    },
    {
      title: t('Multi-language support', 'Supporto multilingua'),
      description: t('Captions in the viewer\'s preferred language.', 'Sottotitoli nella lingua preferita dello spettatore.'),
    },
    {
      title: t('Custom display settings', 'Impostazioni display personalizzate'),
      description: t('Font size, color, background — fully customizable for readability.', 'Dimensione carattere, colore, sfondo — completamente personalizzabile per leggibilità.'),
    },
    {
      title: t('Multiple display modes', 'Modalità display multiple'),
      description: t('Personal device, stage screen, or broadcast overlay.', 'Dispositivo personale, schermo palco o overlay broadcast.'),
    },
    {
      title: t('Speaker identification', 'Identificazione speaker'),
      description: t('Shows who is speaking for multi-speaker events.', 'Mostra chi sta parlando per eventi con più speaker.'),
    },
    {
      title: t('Archive & replay', 'Archivio e replay'),
      description: t('Full transcript available after the event.', 'Trascrizione completa disponibile dopo l\'evento.'),
    },
  ];

  const useCases = [
    {
      title: t('Accessibility compliance', 'Conformità accessibilità'),
      description: t('Meet legal requirements for deaf and hard-of-hearing accessibility.', 'Soddisfa i requisiti legali per l\'accessibilità ai non udenti e ipoacusici.'),
      icon: '♿',
    },
    {
      title: t('Noisy environments', 'Ambienti rumorosi'),
      description: t('Trade shows, exhibitions, public spaces where audio is difficult.', 'Fiere, esposizioni, spazi pubblici dove l\'audio è difficile.'),
    },
    {
      title: t('International events', 'Eventi internazionali'),
      description: t('Combine with audio interpretation for complete multilingual access.', 'Combina con interpretazione audio per accesso multilingue completo.'),
      icon: '🌍',
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
          
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 mb-6">
            <span className="text-sm font-semibold text-green-700 dark:text-green-400">
              {t('Available now', 'Disponibile ora')}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              VoxPrompter
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {t(
              'Real-time multilingual captions for deaf and hard-of-hearing attendees. Everything said on stage, displayed instantly in text — in any language.',
              'Sottotitoli multilingue in tempo reale per partecipanti sordi e ipoacusici. Tutto ciò che viene detto sul palco, visualizzato istantaneamente in testo — in qualsiasi lingua.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-pink-500/50 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2">
              <span>{t('Request a Demo', 'Richiedi una Demo')}</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:border-pink-500 dark:hover:border-pink-500 transition-all duration-300">
              {t('View Pricing', 'Vedi Prezzi')}
            </button>
          </div>
        </div>

        {/* Accessibility Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-rose-600/10 border border-pink-500/20 mb-4">
              <SparklesIcon className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              <span className="text-sm font-semibold text-pink-700 dark:text-pink-400">
                {t('Accessibility First', 'Accessibilità Prima di Tutto')}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              {t('Built for inclusion.', 'Costruito per l\'inclusione.')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t(
                'VoxPrompter ensures that deaf and hard-of-hearing attendees have full access to your event content in real-time, in their preferred language.',
                'VoxPrompter garantisce che i partecipanti sordi e ipoacusici abbiano pieno accesso ai contenuti del tuo evento in tempo reale, nella loro lingua preferita.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="relative p-8 bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-pink-500 dark:hover:border-pink-500 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-rose-500/0 group-hover:from-pink-500/5 group-hover:to-rose-500/5 transition-all"></div>
                <div className="relative">
                  <div className="text-5xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-pink-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="text-3xl flex-shrink-0">♿</div>
              <div>
                <h4 className="text-lg font-bold mb-2">
                  {t('Legal compliance ready', 'Pronto per la conformità legale')}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {t(
                    'VoxPrompter helps you meet ADA, WCAG, and EU accessibility requirements for live events. Full audit trail and caption archives available.',
                    'VoxPrompter ti aiuta a soddisfare i requisiti ADA, WCAG e UE per l\'accessibilità agli eventi live. Audit trail completo e archivi sottotitoli disponibili.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('Features for accessibility', 'Funzionalità per l\'accessibilità')}<br />
            <span className="text-gray-600 dark:text-gray-400">
              {t('and inclusion.', 'e inclusione.')}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>

        {/* CTA Section */}
        <div className="relative p-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              {t('Make your events accessible', 'Rendi i tuoi eventi accessibili')}
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              {t('See how VoxPrompter works for deaf and hard-of-hearing accessibility.', 'Scopri come funziona VoxPrompter per l\'accessibilità ai non udenti e ipoacusici.')}
            </p>
            <button className="px-8 py-4 bg-white text-pink-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
              {t('Schedule Demo →', 'Prenota Demo →')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVoxPrompter;