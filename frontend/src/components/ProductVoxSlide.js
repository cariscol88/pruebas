import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PresentationIcon, ArrowRightIcon, SparklesIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const ProductVoxSlide = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('Email-based upload', 'Caricamento via email'),
      description: t('Speakers send slides to a dedicated email address.', 'Gli speaker inviano le slide a un indirizzo email dedicato.'),
    },
    {
      title: t('Automatic processing', 'Elaborazione automatica'),
      description: t('System receives, processes, and assigns a unique code.', 'Il sistema riceve, elabora e assegna un codice univoco.'),
    },
    {
      title: t('Instant loading', 'Caricamento istantaneo'),
      description: t('Enter the code and slides load immediately into the system.', 'Inserisci il codice e le slide si caricano immediatamente nel sistema.'),
    },
    {
      title: t('Presenter view', 'Vista presentatore'),
      description: t('Full presenter display with notes, timer, and current/next slide.', 'Display presentatore completo con note, timer e slide corrente/successiva.'),
    },
    {
      title: t('Preview mode', 'Modalità preview'),
      description: t('Check slides before going live on stage.', 'Controlla le slide prima di andare live sul palco.'),
    },
    {
      title: t('Centralized management', 'Gestione centralizzata'),
      description: t('Control room manages all presentations from one interface.', 'La regia gestisce tutte le presentazioni da un\'unica interfaccia.'),
    },
    {
      title: t('Offline mode', 'Modalità offline'),
      description: t('Works locally without internet if needed.', 'Funziona localmente senza internet se necessario.'),
    },
    {
      title: t('Technical support', 'Supporto tecnico'),
      description: t('Optional on-site tech support available.', 'Supporto tecnico on-site opzionale disponibile.'),
    },
  ];

  const workflow = [
    {
      step: '1',
      title: t('Speaker sends slides', 'Speaker invia slide'),
      description: t('Presenter emails their slides to slides@yourevent.com', 'Il presentatore invia le sue slide via email a slides@tuoevento.com'),
      icon: '📧',
    },
    {
      step: '2',
      title: t('System processes', 'Sistema elabora'),
      description: t('VoxSlide receives, converts, and assigns a 6-digit code', 'VoxSlide riceve, converte e assegna un codice a 6 cifre'),
      icon: '⚙️',
    },
    {
      step: '3',
      title: t('Code confirmed', 'Codice confermato'),
      description: t('Speaker receives confirmation email with their unique code', 'Speaker riceve email di conferma con il codice univoco'),
      icon: '✅',
    },
    {
      step: '4',
      title: t('Load & present', 'Carica e presenta'),
      description: t('Enter code on stage → slides load instantly → start presenting', 'Inserisci codice sul palco → slide si caricano istantaneamente → inizia a presentare'),
      icon: '🎤',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16 relative">
      <AnimatedBackground variant="default" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-600 mb-6 shadow-xl shadow-indigo-500/50 animate-float">
            <PresentationIcon className="w-10 h-10 text-white" />
          </div>
          
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 mb-6">
            <span className="text-sm font-semibold text-green-700 dark:text-green-400">
              {t('Available now', 'Disponibile ora')}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              VoxSlide
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {t(
              'Simple slide management for live events. Speakers email their slides, get a code, and present instantly — no USB drives, no technical chaos.',
              'Gestione semplice delle slide per eventi live. Gli speaker inviano le loro slide via email, ricevono un codice e presentano istantaneamente — nessuna chiavetta USB, nessun caos tecnico.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2">
              <span>{t('Request a Demo', 'Richiedi una Demo')}</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-300">
              {t('View Pricing', 'Vedi Prezzi')}
            </button>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600/10 to-blue-600/10 border border-indigo-600/20 mb-4">
              <SparklesIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                {t('How it works', 'Come funziona')}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              {t('From email to stage', 'Dall\'email al palco')}
              <br />
              <span className="text-gray-600 dark:text-gray-400">
                {t('in 4 simple steps.', 'in 4 semplici passaggi.')}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {workflow.map((item, index) => (
              <div
                key={index}
                className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="text-4xl mb-4 mt-2">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-indigo-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="text-3xl flex-shrink-0">⚡</div>
              <div>
                <h4 className="text-lg font-bold mb-2">
                  {t('Built for speed and reliability', 'Costruito per velocità e affidabilità')}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {t(
                    'VoxSlide processes most slide formats (PPT, PPTX, PDF, Keynote) and has slides ready within minutes of receiving the email. No manual uploads, no USB hunting, no last-minute panic.',
                    'VoxSlide elabora la maggior parte dei formati slide (PPT, PPTX, PDF, Keynote) e ha le slide pronte entro pochi minuti dalla ricezione dell\'email. Nessun caricamento manuale, nessuna ricerca di chiavette USB, nessun panico dell\'ultimo minuto.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('Everything you need', 'Tutto ciò di cui hai bisogno')}
            <br />
            <span className="text-gray-600 dark:text-gray-400">
              {t('for smooth presentations.', 'per presentazioni fluide.')}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-3 h-3 rounded-full bg-indigo-600 mb-4"></div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('Perfect for', 'Perfetto per')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('Multi-speaker conferences', 'Conferenze multi-speaker'),
                description: t('10, 50, 100 speakers? No problem. Every presentation ready to go.', '10, 50, 100 speaker? Nessun problema. Ogni presentazione pronta all\'uso.'),
                icon: '🎪',
              },
              {
                title: t('Corporate events', 'Eventi aziendali'),
                description: t('AGMs, town halls, product launches — professional and stress-free.', 'AGM, town hall, lanci di prodotto — professionale e senza stress.'),
                icon: '🏢',
              },
              {
                title: t('Academic conferences', 'Conferenze accademiche'),
                description: t('Research presentations, symposiums, poster sessions with slides.', 'Presentazioni di ricerca, simposi, sessioni poster con slide.'),
                icon: '🎓',
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="relative p-8 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-blue-500/0 group-hover:from-indigo-500/5 group-hover:to-blue-500/5 transition-all"></div>
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
        <div className="relative p-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              {t('Simplify your event production', 'Semplifica la produzione del tuo evento')}
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              {t('See how VoxSlide eliminates presentation chaos at your next event.', 'Scopri come VoxSlide elimina il caos delle presentazioni al tuo prossimo evento.')}
            </p>
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
              {t('Schedule Demo →', 'Prenota Demo →')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVoxSlide;
