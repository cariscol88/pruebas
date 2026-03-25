import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MicrophoneIcon, ArrowRightIcon, SparklesIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const ProductVoxNovAI = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('57+ simultaneous languages', '57+ lingue simultanee'),
      description: t('All channels active at once.', 'Tutti i canali attivi contemporaneamente.'),
    },
    {
      title: t('Sub-3s end-to-end latency', 'Latenza end-to-end sotto i 3s'),
      description: t("From speaker's mouth to listener's ear.", "Dalla voce del relatore all'orecchio dell'ascoltatore."),
    },
    {
      title: t('Any device, any browser', 'Qualsiasi dispositivo, qualsiasi browser'),
      description: t('Listeners connect via link. Nothing to install.', 'Gli ascoltatori si connettono tramite link. Niente da installare.'),
    },
    {
      title: t('Human-quality AI voice', 'Voce AI di qualità umana'),
      description: t('Natural cadence, breathing patterns.', 'Cadenza naturale, pause respiratorie.'),
    },
    {
      title: t('Unlimited concurrent listeners', 'Ascoltatori simultanei illimitati'),
      description: t('Scale from 10 to 10,000.', 'Scala da 10 a 10.000.'),
    },
    {
      title: t('End-to-end encrypted', 'Crittografato end-to-end'),
      description: t('Private rooms, compliance-ready.', 'Stanze private, pronto per la conformità.'),
    },
  ];

  const useCases = [
    {
      title: t('International Summits', 'Summit Internazionali'),
      description: t('G7, G20, UN conferences — where every word matters.', 'G7, G20, conferenze ONU — dove ogni parola conta.'),
      icon: '🌍',
    },
    {
      title: t('Corporate Events', 'Eventi Aziendali'),
      description: t('Earnings calls, AGMs, product launches across borders.', 'Earnings call, AGM, lanci di prodotto oltre i confini.'),
      icon: '🏢',
    },
    {
      title: t('Academic Conferences', 'Conferenze Accademiche'),
      description: t('Research presentations, symposiums, workshops.', 'Presentazioni di ricerca, simposi, workshop.'),
      icon: '🎓',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16 relative">
      <AnimatedBackground variant="default" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-xl shadow-blue-500/50 animate-float">
            <MicrophoneIcon className="w-10 h-10 text-white" />
          </div>
          
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 mb-6">
            <span className="text-sm font-semibold text-green-700 dark:text-green-400">
              {t('Core product · Available now', 'Prodotto core · Disponibile ora')}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {t('AI Simultaneous', 'Interpretazione')}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t('Interpretation.', 'Simultanea AI.')}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {t(
              "The speaker talks. Every listener hears their own language — under 3 seconds later. No interpreter booth, no hardware receiver, no app to download.",
              "Il relatore parla. Ogni ascoltatore sente la propria lingua — meno di 3 secondi dopo. Nessuna cabina interprete, nessun ricevitore hardware, nessuna app da scaricare."
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/50 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2">
              <span>{t('Request a Demo', 'Richiedi una Demo')}</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300">
              {t('View Pricing', 'Vedi Prezzi')}
            </button>
          </div>
        </div>

        {/* Demo Visual */}
        <div className="mb-20 group">
          <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative font-mono text-sm space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
                <span className="text-xs text-gray-500">00:01</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded font-bold">EN</span>
                <span className="text-gray-700 dark:text-gray-300">The European digital market presents...</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <span className="text-xs text-gray-500">00:01</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded font-bold">IT</span>
                <span className="text-gray-700 dark:text-gray-300">Il mercato digitale europeo presenta...</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="text-xs text-gray-500">00:01</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded font-bold">FR</span>
                <span className="text-gray-700 dark:text-gray-300">Le marché numérique européen présente...</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <span className="text-xs text-gray-500">00:01</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded font-bold">DE</span>
                <span className="text-gray-700 dark:text-gray-300">Der europäische digitale Markt bietet...</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-blue-500 dark:border-blue-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <span className="text-xs text-gray-500">00:01</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded font-bold">ES</span>
                <span className="text-gray-700 dark:text-gray-300">El mercado digital europeo presenta...<span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse"></span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('Everything you need.', 'Tutto ciò di cui hai bisogno.')}
            <br />
            <span className="text-gray-600 dark:text-gray-400">
              {t('Nothing you do not need.', 'Niente che non serve.')}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="w-3 h-3 rounded-full bg-blue-500 mb-4 group-hover:scale-125 transition-transform"></div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('Built for the moments', 'Costruito per i momenti')}
            <br />
            <span className="text-gray-600 dark:text-gray-400">
              {t('that matter most.', 'che contano di più.')}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="relative p-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all"></div>
                <div className="relative">
                  <div className="text-5xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative p-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="relative z-10">
            <SparklesIcon className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              {t('Ready to break down language barriers?', 'Pronto ad abbattere le barriere linguistiche?')}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {t('Get a personalised demo with your event requirements.', 'Ottieni una demo personalizzata con i requisiti del tuo evento.')}
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
              {t('Schedule Demo →', 'Prenota Demo →')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVoxNovAI;
