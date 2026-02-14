'use client';

import { type Translation } from '@/lib/i18n/translations';

interface ConsultationProps {
  translations: Translation;
}

export default function Consultation({ translations }: ConsultationProps) {
  const steps = translations.consultation.steps.map((step, index) => ({
    number: index + 1,
    title: step.title,
    description: step.content,
    details: step.details ? [
      { title: translations.consultation.infantsLabel, text: step.details.infants || "" },
      { title: translations.consultation.childrenLabel, text: step.details.children || "" }
    ].filter(d => d.text) : undefined
  }));

  const iconStyles = [
    "from-[#54B6FC] to-[#4a9fe0]",
    "from-[#54B6FC] to-[#4a9fe0]",
    "from-[#54B6FC] to-[#4a9fe0]",
    "from-[#54B6FC] to-[#4a9fe0]"
  ];

  const icons = [
    <svg key="1" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>,
    <svg key="2" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>,
    <svg key="3" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    <svg key="4" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {translations.consultation.title}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {translations.consultation.duration}
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${iconStyles[index]} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  {icons[index]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-semibold text-[#54B6FC]">
                      {translations.consultation.stepLabel} {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  {step.details && (
                    <div className="space-y-2 mt-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="pl-4 border-l-2 border-[#54B6FC]/30">
                          <p className="text-sm font-semibold text-gray-700 mb-1">
                            {detail.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {detail.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/registracija"
            className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#54B6FC] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-xl"
          >
            <span>{translations.consultation.cta}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
