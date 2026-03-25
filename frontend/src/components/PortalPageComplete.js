import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ShieldIcon, PlayIcon, ArrowRightIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const PortalPageComplete = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16 relative">
      <AnimatedBackground variant="default" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
            {t('Portal access', 'Accesso al portale')}
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {t('Welcome back', 'Bentornato')}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              to VoxNova.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t(
              'Choose your access level below. Publisher access requires active event credentials.',
              'Scegli il tuo livello di accesso qui sotto. L\'accesso publisher richiede credenziali evento attive.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="group relative bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <ShieldIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                {t('Admin Dashboard', 'Dashboard Admin')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {t(
                  'Manage events, users, billing, and platform configuration. Restricted to authorised administrators.',
                  'Gestisci eventi, utenti, fatturazione e configurazione della piattaforma. Riservato agli amministratori autorizzati.'
                )}
              </p>
              <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>{t('Access Dashboard', 'Accedi alla Dashboard')}</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-10 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <PlayIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                {t('Event Publisher', 'Publisher Evento')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {t(
                  'Start and manage your live event. Access requires the credentials provided when your event was created.',
                  'Avvia e gestisci il tuo evento live. L\'accesso richiede le credenziali fornite al momento della creazione dell\'evento.'
                )}
              </p>
              <button className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 text-gray-900 dark:text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>{t('Go to Publisher', 'Vai al Publisher')}</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-amber-200 dark:border-gray-700">
          <div className="flex items-start space-x-4">
            <div className="text-3xl flex-shrink-0">⚠️</div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                {t('Publisher access is event-specific', 'L\'accesso publisher è specifico per evento')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t(
                  "You will need the username and password generated when your event was set up. If you don't have these credentials, please contact us.",
                  'Avrai bisogno dell\'username e della password generati al momento della configurazione del tuo evento. Se non hai queste credenziali, contattaci.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalPageComplete;