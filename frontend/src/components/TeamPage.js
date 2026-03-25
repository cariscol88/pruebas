import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TeamPage = () => {
  const { t } = useLanguage();

  const team = [
    {
      initial: 'A',
      name: 'Alessandro R.',
      role: 'Founder & CEO',
      bio: t(
        'Product vision and business development. 15 years bridging enterprise technology and live events across Europe.',
        'Visione di prodotto e sviluppo commerciale. 15 anni a collegare tecnologia enterprise ed eventi live in Europa.'
      ),
      color: 'from-blue-500 to-blue-600',
    },
    {
      initial: 'M',
      name: 'Marco V.',
      role: 'Head of Engineering',
      bio: t(
        'Real-time audio systems architect. Former broadcast engineering lead with a passion for ultra-low latency infrastructure.',
        'Architetto di sistemi audio in tempo reale. Ex responsabile ingegneria broadcast con passione per infrastrutture a latenza ultra-bassa.'
      ),
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      initial: 'S',
      name: 'Sofia L.',
      role: 'Head of Operations',
      bio: t(
        'Event production specialist and multilingual communicator. Ensures every deployment runs flawlessly from setup to shutdown.',
        'Specialista in produzione eventi e comunicatrice multilingue. Garantisce che ogni deployment funzioni perfettamente dall\'inizio alla fine.'
      ),
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
            {t('The team', 'Il team')}
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {t('The people behind', 'Le persone dietro')}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('the voice.', 'la voce.')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t(
              'A small team with big ambitions. We built VoxNova Creative to solve a problem we experienced firsthand at international events.',
              'Un piccolo team con grandi ambizioni. Abbiamo costruito VoxNova Creative per risolvere un problema che abbiamo vissuto in prima persona negli eventi internazionali.'
            )}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                {/* Avatar */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg`}>
                  {member.initial}
                </div>

                {/* Name & Role */}
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 border border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t('Our Vision', 'La Nostra Visione')}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {t(
                'We believe live events should be accessible to everyone, regardless of the language they speak. VoxNova Creative is our commitment to building technology that breaks down language barriers without compromising on quality, speed, or user experience.',
                'Crediamo che gli eventi live debbano essere accessibili a tutti, indipendentemente dalla lingua che parlano. VoxNova Creative è il nostro impegno a costruire tecnologia che abbatte le barriere linguistiche senza compromettere qualità, velocità o esperienza utente.'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>{t('🇮🇹 Based in Rome, Italy', '🇮🇹 Con sede a Roma, Italia')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                <span>{t('🇪🇺 Serving Europe & beyond', '🇪🇺 Al servizio dell\'Europa e oltre')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>{t('Founded 2023', 'Fondati nel 2023')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
