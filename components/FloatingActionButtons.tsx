'use client';

import { useState, useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { type Language } from '@/lib/i18n/translations';

interface FloatingActionButtonsProps {
  currentLang: Language;
}

export default function FloatingActionButtons({ currentLang }: FloatingActionButtonsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Observe the hero section if it exists
    const heroSection = document.querySelector('#hero-section');
    
    if (!heroSection) {
      // No hero section - show buttons after scrolling down a bit
      const handleScroll = () => {
        setIsVisible(window.scrollY > 200);
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial check
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }

    // Hero section exists - use Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show buttons when hero is NOT visible
          setIsVisible(!entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger when 10% or less of hero is visible
        rootMargin: '0px',
      }
    );

    observerRef.current.observe(heroSection);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const addLangParam = (href: string) => {
    if (currentLang === 'lt') return href;
    
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      const base = href.substring(0, hashIndex);
      const hash = href.substring(hashIndex);
      const separator = base.includes('?') ? '&' : '?';
      return `${base}${separator}lang=${currentLang}${hash}`;
    }
    
    const separator = href.includes('?') ? '&' : '?';
    return `${href}${separator}lang=${currentLang}`;
  };

  const text = {
    lt: {
      call: 'Skambinti',
      register: 'Registracija',
    },
    en: {
      call: 'Call',
      register: 'Book Now',
    },
  };

  const t = text[currentLang];

  return (
    <div 
      className={`
        fixed bottom-6 left-0 right-0 z-40 md:hidden 
        flex items-center justify-center gap-3 px-4
        transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}
      `}
    >
      {/* Call button - Blue */}
      <a
        href="tel:+37066699676"
        className="
          flex items-center justify-center space-x-2
          bg-[#54B6FC] hover:bg-[#4a9fe0]
          active:scale-95
          text-white font-semibold
          px-6 py-3.5 rounded-full
          shadow-lg hover:shadow-xl
          transition-all duration-300
          flex-1 max-w-[160px]
        "
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm">{t.call}</span>
      </a>

      {/* Register button - Orange */}
      <Link
        href={addLangParam('/registracija')}
        className="
          flex items-center justify-center
          bg-gradient-to-r from-[#fb7825] to-[#e66f1f]
          hover:from-[#e66f1f] hover:to-[#fb7825]
          active:scale-95
          text-white font-bold
          px-8 py-3.5 rounded-full
          shadow-lg hover:shadow-xl
          transition-all duration-300
          flex-[1.4]
        "
      >
        <span className="text-sm">{t.register}</span>
      </Link>
    </div>
  );
}
