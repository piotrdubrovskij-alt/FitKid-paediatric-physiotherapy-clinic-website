import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Обновлять каждый час

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description: string;
}

interface GooglePlaceDetails {
  result: {
    name: string;
    rating: number;
    user_ratings_total: number;
    reviews: GoogleReview[];
  };
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn('Google Places API credentials not configured');
    // Возвращаем фейковые отзывы для демо
    return NextResponse.json({
      rating: 4.9,
      totalReviews: 100,
      reviews: [
        {
          author_name: 'Demo User',
          rating: 5,
          text: 'Настройте Google Places API для отображения реальных отзывов',
          time: Date.now() / 1000,
          relative_time_description: 'недавно',
        },
      ],
    });
  }

  try {
    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    url.searchParams.append('place_id', placeId);
    url.searchParams.append('fields', 'name,rating,user_ratings_total,reviews');
    url.searchParams.append('key', apiKey);
    url.searchParams.append('language', 'lt');

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 }, // Кеш на 1 час
    });

    if (!response.ok) {
      throw new Error(`Google API error: ${response.statusText}`);
    }

    const data: GooglePlaceDetails = await response.json();

    if (!data.result) {
      throw new Error('No result from Google Places API');
    }

    return NextResponse.json({
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      reviews: (data.result.reviews || []).map((review) => ({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.time,
        profile_photo_url: review.profile_photo_url,
        relative_time_description: review.relative_time_description,
      })),
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
