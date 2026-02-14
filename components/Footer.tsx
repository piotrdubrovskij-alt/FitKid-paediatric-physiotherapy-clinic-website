'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { type Translation } from '@/lib/i18n/translations';

interface FooterProps {
  translations: Translation;
}

export default function Footer({ translations }: FooterProps) {
  return (
    <footer id="contacts" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-36 h-10">
                <img
                  src="/fitkid-logo-white.png"
                  alt="FitKid"
                  className="w-full h-full object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              {translations.footer.description}
            </p>
            {/* Social links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#54B6FC] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#fb7825] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/37066699676"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  {translations.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/#treatments" className="text-gray-400 hover:text-white transition-colors">
                  {translations.nav.treatments}
                </Link>
              </li>
              <li>
                <Link href="/#specialists" className="text-gray-400 hover:text-white transition-colors">
                  {translations.nav.specialists}
                </Link>
              </li>
              <li>
                <Link href="/kainos" className="text-gray-400 hover:text-white transition-colors">
                  {translations.nav.prices}
                </Link>
              </li>
              <li>
                <Link href="/kontaktai" className="text-gray-400 hover:text-white transition-colors">
                  {translations.nav.contacts}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations.services.title}</h3>
            <ul className="space-y-3">
              {translations.services.items.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations.nav.contacts}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Aludarių+g.+7-43,+Vilnius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    {translations.footer.address}
                    <br />
                    {translations.footer.country}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+37066699676"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+370 666 99676</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fitkid.lt"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@fitkid.lt</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            {translations.footer.copyright.replace('2026', String(new Date().getFullYear()))}
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              {translations.footer.privacy}
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              {translations.footer.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
