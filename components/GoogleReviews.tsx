'use client';

import { useEffect, useState } from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description: string;
}

interface ReviewsData {
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

export default function GoogleReviews() {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          setError(data?.error || 'Nepavyko gauti atsiliepimų');
          setLoading(false);
          return;
        }
        const data = await response.json();
        setReviewsData(data);
      } catch (err) {
        setError('Nepavyko gauti atsiliepimų');
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#54B6FC] border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Krauname atsiliepimus...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !reviewsData) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mūsų klientų atsiliepimai
            </h2>
            <p className="text-gray-600 mb-4">
              Atsiliepimai laikinai neprieinami
            </p>
            <a
              href="https://www.google.com/maps/search/fitkid+klinika+vilnius"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#54B6FC] hover:text-[#fb7825] font-semibold transition-colors"
            >
              <span>Žiūrėti atsiliepimus Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-sm text-gray-500 mt-8">
              {error || 'Nėra duomenų'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const { rating, totalReviews, reviews } = reviewsData;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mūsų klientų atsiliepimai
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">{rating.toFixed(1)}</span>
          </div>
          <p className="text-gray-600 mb-4">
            {rating.toFixed(1)}/5 iš {totalReviews}+ atsiliepimų Google
          </p>
          <a
            href="https://www.google.com/maps/search/fitkid+klinika+vilnius"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-[#54B6FC] hover:text-[#fb7825] font-semibold transition-colors"
          >
            <span>Žiūrėti visus atsiliepimus Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 6).map((review, index) => (
            <div
              key={review.time}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#54B6FC]/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#54B6FC]" />
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 leading-relaxed mb-6 line-clamp-6">
                {review.text}
              </p>

              {/* Author – be vardo/pavardės (LT teisė) */}
              <div className="flex items-center space-x-4 border-t border-gray-100 pt-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#54B6FC] to-[#fb7825] rounded-full flex items-center justify-center text-white font-bold">
                  K
                </div>
                <div>
                  <div className="text-sm text-gray-500">Klientas</div>
                  <div className="text-xs text-gray-400">
                    {review.relative_time_description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-md">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Atsiliepimai iš Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
