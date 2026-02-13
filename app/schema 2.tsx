// Schema.org structured data for SEO
export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "FitKid",
    "alternateName": "FitKid Vaikų Kineziterapijos Klinika",
    "description": "Vaikų ir kūdikių kineziterapijos klinika Vilniuje. Profesionalūs masažai, kineziterapija, plukdymas.",
    "url": "https://fitkid.lt",
    "telephone": "+37066699676",
    "email": "info@fitkid.lt",
    "image": "https://fitkid.lt/logo.png",
    "logo": "https://fitkid.lt/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aludarių g. 7-43",
      "addressLocality": "Vilnius",
      "postalCode": "01113",
      "addressCountry": "LT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "54.6872",
      "longitude": "25.2797"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "medicalSpecialty": [
      "Pediatric Physiotherapy",
      "Infant Massage",
      "Hydrotherapy",
      "Kinesiotherapy"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Vilnius"
    },
    "sameAs": [
      "https://www.facebook.com/fitkid",
      "https://www.instagram.com/fitkid"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
