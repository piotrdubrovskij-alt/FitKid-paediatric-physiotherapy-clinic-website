'use client';

import { ArrowRight, Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';
import { type Translation } from '@/lib/i18n/translations';

interface VideoHeroProps {
  translations: Translation;
}

export default function VideoHero({ translations }: VideoHeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="hero-section" className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-poster.svg"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
          <source src="/media/hero.webm" type="video/webm" />
          <source src="/media/hero.mov" type="video/quicktime" />
        </video>

        {/* Gradient Overlay для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#54B6FC]/20 to-[#fb7825]/10" />
      </div>

      {/* Content поверх видео */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 shadow-lg mb-6 animate-fade-in">
              <span className="inline-block w-2 h-2 rounded-full bg-[#54B6FC] animate-pulse" />
              <span className="text-sm font-semibold text-gray-900">
                Vilniaus centre
              </span>
            </div>

            {/* Main Heading - H1 для SEO */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
              {translations.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-8 drop-shadow-lg max-w-2xl">
              {translations.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#registration"
                className="group inline-flex items-center justify-center space-x-3 bg-[#fb7825] hover:bg-[#e66f1f] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl"
              >
                <span>{translations.nav.registration}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+37066699676"
                className="inline-flex items-center justify-center space-x-2 bg-white/95 hover:bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-xl backdrop-blur-sm"
              >
                <span>+370 666 99676</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Controls (опционально) */}
      <button
        onClick={togglePlay}
        className="absolute bottom-8 right-8 z-20 w-14 h-14 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-xl"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-gray-900" />
        ) : (
          <Play className="w-6 h-6 text-gray-900 ml-1" />
        )}
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
