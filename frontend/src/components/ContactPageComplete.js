import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MailIcon, ArrowRightIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const ContactPageComplete = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16 relative">
      <AnimatedBackground variant="default" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
            {t('Get in touch', 'Contattaci')}
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {t("Let's talk", 'Parliamo')}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('about your event.', 'del tuo evento.')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t(
              "Whether you're planning a summit next month or exploring options for 2027, we're ready to help.",
              'Che tu stia pianificando un summit il prossimo mese o stia esplorando opzioni per il 2027, siamo pronti ad aiutarti.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                {t("We'd love to hear from you.", 'Ci farebbe piacere sentirti.')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t(
                  'Fill in the form or reach us directly. We typically respond within 4 business hours for event inquiries.',
                  'Compila il modulo o contattaci direttamente. Di solito rispondiamo entro 4 ore lavorative per le richieste di eventi.'
                )}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl">✉️</div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">Email</div>
                  <div className="text-lg font-medium">hello@voxnovacreative.it</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl">📍</div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {t('Location', 'Sede')}
                  </div>
                  <div className="text-lg font-medium">Rome, Italy · EU Coverage</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl">🕐</div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {t('Response time', 'Tempi di risposta')}
                  </div>
                  <div className="text-lg font-medium">
                    {t('Within 4 business hours', 'Entro 4 ore lavorative')}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl">🗓</div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {t('Booking lead time', 'Preavviso prenotazione')}
                  </div>
                  <div className="text-lg font-medium">
                    {t('Minimum 5 business days', 'Minimo 5 giorni lavorativi')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2">
                  {t('Message received.', 'Messaggio ricevuto.')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t(
                    "We'll get back to you within 4 business hours.",
                    'Ti risponderemo entro 4 ore lavorative.'
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">
                  {t('Send us a message', 'Inviaci un messaggio')}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {t('First name', 'Nome')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Marco"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {t('Last name', 'Cognome')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Rossi"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t('Work email', 'Email lavoro')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="marco@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t('Organisation', 'Organizzazione')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder={t('Your company or institution', 'La tua azienda o istituzione')}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t('Subject', 'Oggetto')}
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                    <option>{t('General enquiry', 'Richiesta generale')}</option>
                    <option>{t('Event quotation', 'Preventivo evento')}</option>
                    <option>{t('Technical questions', 'Domande tecniche')}</option>
                    <option>{t('Partnership', 'Partnership')}</option>
                    <option>{t('Press & media', 'Stampa & media')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t('Message', 'Messaggio')}
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder={t('Tell us about your event...', 'Parlaci del tuo evento...')}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>{t('Send message', 'Invia messaggio')}</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageComplete;