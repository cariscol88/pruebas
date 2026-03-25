import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { HelpCircleIcon, ChevronDownIcon } from './Icons';
import AnimatedBackground from './AnimatedBackground';

const FAQPageComplete = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: t('How does real-time AI interpretation work?', 'Come funziona l\'interpretazione AI in tempo reale?'),
      answer: t(
        'VoxNova uses advanced AI models to transcribe speech, translate it in real-time, and deliver it to listeners via their devices. The entire process takes under 3 seconds end-to-end.',
        'VoxNova utilizza modelli AI avanzati per trascrivere il discorso, tradurlo in tempo reale e consegnarlo agli ascoltatori tramite i loro dispositivi. L\'intero processo richiede meno di 3 secondi end-to-end.'
      ),
    },
    {
      question: t('Do listeners need to download an app?', 'Gli ascoltatori devono scaricare un\'app?'),
      answer: t(
        'No. Listeners access the audio via a web link that works on any device — phone, tablet, laptop. Just open the browser and select your language.',
        'No. Gli ascoltatori accedono all\'audio tramite un link web che funziona su qualsiasi dispositivo — telefono, tablet, laptop. Basta aprire il browser e selezionare la lingua.'
      ),
    },
    {
      question: t('How many languages can run simultaneously?', 'Quante lingue possono funzionare simultaneamente?'),
      answer: t(
        'All 57+ languages can run at the same time with no performance degradation. Every language channel is active from the first word.',
        'Tutte le 57+ lingue possono funzionare contemporaneamente senza degrado delle prestazioni. Ogni canale linguistico è attivo dalla prima parola.'
      ),
    },
    {
      question: t('What\'s the latency?', 'Qual è la latenza?'),
      answer: t(
        'Our target is under 3 seconds end-to-end. This includes speech recognition, translation, synthesis, and delivery to the listener.',
        'Il nostro target è sotto i 3 secondi end-to-end. Questo include riconoscimento vocale, traduzione, sintesi e consegna all\'ascoltatore.'
      ),
    },
    {
      question: t('Is the service secure?', 'È sicuro il servizio?'),
      answer: t(
        'Yes. All audio streams are encrypted end-to-end. We offer private rooms, compliance-ready infrastructure, and SOC 2 certification.',
        'Sì. Tutti i flussi audio sono crittografati end-to-end. Offriamo stanze private, infrastruttura pronta per la conformità e certificazione SOC 2.'
      ),
    },
    {
      question: t('How much does it cost?', 'Quanto costa?'),
      answer: t(
        'Pricing is based on your event\'s specific needs: products selected, number of languages, duration, and audience size. Request a quote to get a personalized proposal.',
        'Il prezzo si basa sulle esigenze specifiche del tuo evento: prodotti selezionati, numero di lingue, durata e dimensione del pubblico. Richiedi un preventivo per ottenere una proposta personalizzata.'
      ),
    },
    {
      question: t('Can I try it before committing?', 'Posso provarlo prima di impegnarmi?'),
      answer: t(
        'Absolutely. We offer live demos where we set up a dedicated event room and walk you through the system. You\'ll experience the quality and speed firsthand.',
        'Assolutamente. Offriamo demo live dove configuriamo una stanza evento dedicata e ti guidiamo attraverso il sistema. Sperimenterai la qualità e la velocità in prima persona.'
      ),
    },
    {
      question: t('What happens if there is an internet outage?', 'Cosa succede se c è una interruzione di internet?'),
      answer: t(
        'We recommend redundant internet connections for critical events. Our platform includes automatic failover and we can provide on-site technical support if needed.',
        'Consigliamo connessioni internet ridondanti per eventi critici. La nostra piattaforma include failover automatico e possiamo fornire supporto tecnico in loco se necessario.'
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16 relative">
      <AnimatedBackground variant="default" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-6 shadow-xl shadow-blue-500/50 animate-float">
            <HelpCircleIcon className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {t('Questions &', 'Domande &')}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('Answers.', 'Risposte.')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t(
              'Everything you need to know about VoxNova Creative.',
              'Tutto quello che devi sapere su VoxNova Creative.'
            )}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-blue-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-4">
            {t('Still have questions?', 'Hai ancora domande?')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t(
              "We're here to help. Get in touch and we'll respond within 4 business hours.",
              'Siamo qui per aiutarti. Contattaci e risponderemo entro 4 ore lavorative.'
            )}
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
            {t('Contact Us →', 'Contattaci →')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPageComplete;