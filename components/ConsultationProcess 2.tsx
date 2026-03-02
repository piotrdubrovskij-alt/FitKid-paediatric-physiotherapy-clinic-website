'use client';

import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle, Clock, Users, FileText } from 'lucide-react';
import { type Translation } from '@/lib/i18n/translations';

interface ConsultationProcessProps {
  translations: Translation;
}

export default function ConsultationProcess({ translations }: ConsultationProcessProps) {
  const steps = [
    {
      number: '1',
      title: 'Išsami konsultacija',
      description: 'Kineziterapeutas paklausia apie problemos istoriją, sveikatą, raidos ypatumus.',
      icon: FileText,
    },
    {
      number: '2',
      title: 'Funkcinė apžiūra',
      description: 'Įvertiname toną, simetrija, judesių amplitudę, laikyseną, raidos etapus.',
      icon: CheckCircle,
    },
    {
      number: '3',
      title: 'Individualus planas',
      description: 'Sudaromas terapijos planas, pritaikytas konkrečiam vaikui.',
      icon: FileText,
    },
    {
      number: '4',
      title: 'Pirmas užsiėmimas',
      description: 'Jau pirmą kartą pradedame švelnias pratybas ar masažą.',
      icon: Clock,
    },
    {
      number: '5',
      title: 'Tėvų įtraukimas',
      description: 'Mokomės, ką daryti namuose, kad rezultatas būtų ilgalaikis.',
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kaip vyksta pirminė konsultacija?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pirmas vizitas – tai išsamus įvertinimas ir aiškus planas jūsų vaikui
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#54B6FC] via-[#54B6FC] to-[#fb7825] mx-auto rounded-full" style={{ width: 'calc(100% - 120px)', left: '60px' }} />
          
          <div className="grid md:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-[#54B6FC] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                    {/* Number badge */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg ring-4 ring-white">
                      <span className="text-white font-bold text-2xl">{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 bg-[#54B6FC]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-[#54B6FC]" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-700 leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow - mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="w-8 h-8 text-[#54B6FC]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+37066699676"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#54B6FC] to-[#4a9fe0] hover:from-[#4a9fe0] hover:to-[#54B6FC] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Skambinti dabar</span>
            </a>
            <Link
              href="/registracija"
              className="inline-flex items-center space-x-2 bg-white border-2 border-[#54B6FC] text-[#54B6FC] hover:bg-[#54B6FC] hover:text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg"
            >
              <span>Užsiregistruoti vizitui</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
