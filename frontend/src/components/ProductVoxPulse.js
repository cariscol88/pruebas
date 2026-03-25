import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PulseIcon, ArrowRightIcon, SparklesIcon } from './Icons';
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

  const ndiOutputs = [
    {
      title: t('Poll Results Screen', 'Schermo Risultati Sondaggio'),
      description: t('Live voting results with charts and percentages — ready for your video mixer.', 'Risultati votazioni live con grafici e percentuali — pronti per il tuo mixer video.'),
      icon: '📊',
    },
    {
      title: t('Main Presentation View', 'Vista Presentazione Principale'),
      description: t('The main screen showing polls, Q&A, and reactions — everything happening now.', 'Lo schermo principale con sondaggi, Q&A e reazioni — tutto quello che sta succedendo ora.'),
      icon: '🖥️',
    },
    {
      title: t('Questions on Screen', 'Domande su Schermo'),
      description: t('Curated questions displayed in real-time — perfect for stage screens or broadcast overlays.', 'Domande selezionate mostrate in tempo reale — perfette per schermi sul palco o overlay broadcast.'),
      icon: '💬',
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
          
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 mb-6">
            <span className="text-sm font-semibold text-green-700 dark:text-green-400">
              {t('Available now', 'Disponibile ora')}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              VoxPulse
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {t(
              'Live polls, Q&A, and reactions — all multilingual. Like Slido or Mentimeter, but with NDI outputs for seamless production integration.',
              'Sondaggi live, Q&A e reazioni — tutto multilingue. Come Slido o Mentimeter, ma con output NDI per integrazione perfetta nella produzione.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-green-500/50 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2">
              <span>{t('Request a Demo', 'Richiedi una Demo')}</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:border-green-500 dark:hover:border-green-500 transition-all duration-300">
              {t('View Pricing', 'Vedi Prezzi')}
            </button>
          </div>
        </div>

        {/* NDI Outputs Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/20 mb-4">
              <SparklesIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                {t('NDI Output Integration', 'Integrazione Output NDI')}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              {t('Built for professional production.', 'Costruito per la produzione professionale.')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t(
                'Every screen in VoxPulse can be sent as an NDI source to your video production system — no screen capture needed.',
                'Ogni schermo in VoxPulse può essere inviato come sorgente NDI al tuo sistema di produzione video — nessuna cattura schermo necessaria.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {ndiOutputs.map((output, index) => (
              <div
                key={index}
                className="relative p-8 bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all"></div>
                <div className="relative">
                  <div className="text-5xl mb-4">{output.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{output.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{output.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-green-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="text-3xl flex-shrink-0">🎬</div>
              <div>
                <h4 className="text-lg font-bold mb-2">
                  {t('Works with your existing workflow', 'Funziona con il tuo flusso di lavoro esistente')}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {t(
                    'VoxPulse NDI outputs work with Tricaster, vMix, OBS (with NDI plugin), Wirecast, and any NDI-compatible system. Just add it as a source.',
                    'Gli output NDI di VoxPulse funzionano con Tricaster, vMix, OBS (con plugin NDI), Wirecast e qualsiasi sistema compatibile NDI. Aggiungilo semplicemente come sorgente.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('Engagement features', 'Funzionalità di engagement')}<br />
            <span className="text-gray-600 dark:text-gray-400">
              {t('that work across languages.', 'che funzionano tra le lingue.')}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>

        {/* CTA Section */}
        <div className="relative p-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              {t('Engage your multilingual audience', 'Coinvolgi il tuo pubblico multilingue')}
            </h2>
            <p className="text-xl mb-8 text-green-100">
              {t('See VoxPulse in action with a live demo tailored to your event.', 'Vedi VoxPulse in azione con una demo live su misura per il tuo evento.')}
            </p>
            <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
              {t('Schedule Demo →', 'Prenota Demo →')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVoxPulse;