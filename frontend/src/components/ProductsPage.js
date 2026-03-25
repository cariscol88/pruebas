import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MicrophoneIcon, VideoIcon, PulseIcon, DocumentIcon, TeleprompterIcon, ArrowRightIcon } from './Icons';

const ProductsPage = ({ setCurrentPage }) => {
  const { t } = useLanguage();

  const products = [
    {
      id: 'voxnovai',
      icon: MicrophoneIcon,
      name: 'VoxNovAI',
      tagline: t('Core product · Available now', 'Prodotto core · Disponibile ora'),
      description: t(
        'Simultaneous multilingual audio delivered to every listener\'s own device — in their language, in real time. No booths, no hardware.',
        'Audio multilingue simultaneo consegnato al dispositivo di ogni ascoltatore — nella loro lingua, in tempo reale. Nessuna cabina, nessun hardware.'
      ),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      available: true,
      featured: true,
    },
    {
      id: 'voxstream',
      icon: VideoIcon,
      name: 'VoxStream',
      tagline: 'Coming Soon',
      description: t(
        'Live event broadcasting with built-in multilingual audio. Think Vimeo — with real-time translation for every viewer.',
        'Broadcast di eventi live con audio multilingue integrato. Come Vimeo — con traduzione in tempo reale per ogni spettatore.'
      ),
      color: 'from-purple-700 to-purple-900',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      available: false,
    },
    {
      id: 'voxpulse',
      icon: PulseIcon,
      name: 'VoxPulse',
      tagline: 'Coming Soon',
      description: t(
        'Live polls, Q&A, and reactions — all multilingual. Questions in any language, moderated and broadcast in all of them.',
        'Sondaggi live, Q&A e reazioni — tutto multilingue. Domande in qualsiasi lingua, moderate e trasmesse in tutte.'
      ),
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      available: false,
    },
    {
      id: 'voxtranscript',
      icon: DocumentIcon,
      name: 'VoxTranscript',
      tagline: 'Coming Soon',
      description: t(
        'Real-time multilingual transcripts on screen, exported automatically after the event. Every word, perfectly timestamped.',
        'Trascrizioni multilingue in tempo reale sullo schermo, esportate automaticamente dopo l\'evento. Ogni parola, perfettamente timestampata.'
      ),
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      borderColor: 'border-amber-200 dark:border-amber-800',
      available: false,
    },
    {
      id: 'voxprompter',
      icon: TeleprompterIcon,
      name: 'VoxPrompter',
      tagline: 'Coming Soon',
      description: t(
        'A smart teleprompter that listens and adapts — speed, font, cues — so your speakers always deliver flawlessly.',
        'Un teleprompter intelligente che ascolta e si adatta — velocità, font, segnali — così i tuoi relatori parlano sempre perfettamente.'
      ),
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      borderColor: 'border-pink-200 dark:border-pink-800',
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
            {t('The platform', 'La piattaforma')}
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {t('One ecosystem.', 'Un ecosistema.')}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('Five experiences.', 'Cinque esperienze.')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t(
              'Every product in the VoxNova suite shares the same AI core — built for live events, designed for the people in the room.',
              'Ogni prodotto della suite VoxNova condivide lo stesso core AI — costruito per gli eventi live, progettato per le persone in sala.'
            )}
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isFeatured = product.featured;

            return (
              <div
                key={product.id}
                className={`group relative overflow-hidden rounded-3xl border ${product.borderColor} ${product.bgColor} ${
                  isFeatured ? 'lg:col-span-2' : ''
                } transition-all duration-300 hover:shadow-2xl ${
                  product.available ? 'hover:scale-[1.02]' : 'opacity-75'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className={`relative p-8 ${isFeatured ? 'lg:p-12' : ''}`}>
                  <div className={`flex ${isFeatured ? 'flex-col lg:flex-row lg:items-center lg:space-x-12' : 'flex-col'}`}>
                    {/* Icon & Badge */}
                    <div className={`${isFeatured ? 'lg:flex-shrink-0' : ''} mb-6 ${isFeatured ? 'lg:mb-0' : ''}`}>
                      <div className={`w-16 h-16 ${isFeatured ? 'lg:w-20 lg:h-20' : ''} rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform`}>
                        <Icon className={`${isFeatured ? 'w-10 h-10' : 'w-8 h-8'} text-white`} />
                      </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        product.available
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                        {product.tagline}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`${isFeatured ? 'text-4xl' : 'text-3xl'} font-bold mb-3 bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                        {product.name}
                      </h3>
                      <p className={`${isFeatured ? 'text-lg' : 'text-base'} text-gray-700 dark:text-gray-300 leading-relaxed mb-6`}>
                        {product.description}
                      </p>
                      <button
                        onClick={() => {
                          if (product.available) {
                            setCurrentPage(`product-${product.id.toLowerCase()}`);
                          }
                        }}
                        className={`inline-flex items-center space-x-2 font-semibold ${
                          product.available
                            ? `text-transparent bg-gradient-to-r ${product.color} bg-clip-text hover:opacity-80 cursor-pointer`
                            : 'text-gray-500 dark:text-gray-500 cursor-not-allowed'
                        } transition-all`}
                        disabled={!product.available}
                      >
                        <span>
                          {product.available
                            ? t('Explore product', 'Esplora il prodotto')
                            : t('Notify me when available', 'Avvisami quando disponibile')}
                        </span>
                        <ArrowRightIcon className={`w-5 h-5 ${product.available ? 'group-hover:translate-x-1' : ''} transition-transform`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-blue-100 dark:border-gray-700">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-2xl">
              💡
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">
                {t('All products work together', 'Tutti i prodotti funzionano insieme')}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                {t(
                  'Use VoxNovAI for interpretation, add VoxPulse for audience engagement, stream everything with VoxStream, and get instant transcripts with VoxTranscript. One platform, infinite possibilities.',
                  'Usa VoxNovAI per l\'interpretazione, aggiungi VoxPulse per l\'engagement del pubblico, trasmetti tutto con VoxStream e ottieni trascrizioni istantanee con VoxTranscript. Una piattaforma, infinite possibilità.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
