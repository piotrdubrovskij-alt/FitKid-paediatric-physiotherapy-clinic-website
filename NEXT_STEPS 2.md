# 🚀 Следующие шаги разработки

## ✅ Что уже сделано

- ✅ Создан проект Next.js 15 с TypeScript
- ✅ Настроен Tailwind CSS
- ✅ Реализована мультиязычность (LT/EN/RU)
- ✅ Созданы все основные компоненты:
  - Header (навигация + переключатель языка)
  - Hero (заголовок с CTA)
  - Services (услуги)
  - About (о клинике)
  - Specialists (команда)
  - Testimonials (отзывы)
  - Footer (контакты)
- ✅ Адаптивный дизайн (mobile-first)
- ✅ SEO оптимизация (metadata, OpenGraph)

---

## 🎯 Приоритет 1: Контент (1-2 дня)

### 1. Добавить изображения

```bash
# Поместите файлы в public/:
public/
  ├── logo.png              # Логотип FitKid
  ├── hero-image.jpg        # Фото клиники/специалистов
  ├── specialists/
  │   ├── agne.jpg
  │   ├── ksenija.jpg
  │   └── ramune.jpg
  └── services/
      ├── swimming.jpg
      ├── massage.jpg
      └── physio.jpg
```

**Обновить компоненты:**
- `Hero.tsx` - заменить placeholder на реальное фото
- `Specialists.tsx` - добавить фото специалистов
- `Services.tsx` - добавить иллюстрации услуг

### 2. Скопировать логотип

```bash
# Скопировать из старого проекта
cp ../fit-kid-clinic-form/public/fitkid-logo.png public/logo.png
```

Обновить `Header.tsx`:
```tsx
import Image from 'next/image';

// Заменить:
<div className="w-10 h-10 bg-[#54B6FC] rounded-full...">
  <span className="text-white font-bold text-xl">FK</span>
</div>

// На:
<Image
  src="/logo.png"
  alt="FitKid"
  width={40}
  height={40}
  priority
/>
```

---

## 🎯 Приоритет 2: Страницы (2-3 дня)

### 1. Страница услуг

```bash
# Создать:
app/
  └── services/
      ├── page.tsx          # Список всех услуг
      └── [slug]/
          └── page.tsx      # Детальная страница услуги
```

### 2. Страница цен

```bash
app/
  └── prices/
      └── page.tsx
```

### 3. Страница контактов

```bash
app/
  └── contacts/
      └── page.tsx          # С картой Google Maps
```

### 4. Блог (опционально)

```bash
app/
  └── blog/
      ├── page.tsx          # Список статей
      └── [slug]/
          └── page.tsx      # Статья
```

---

## 🎯 Приоритет 3: Интеграции (3-5 дней)

### 1. Форма записи

**Опции:**
- **A. Интегрировать существующую форму** из `fit-kid-clinic-form`
- **B. Создать новую** с современным UI
- **C. Использовать Calendly/Acuity** (быстро)

**Рекомендация:** Вариант C (Calendly) на первое время, потом B.

```tsx
// components/BookingWidget.tsx
export default function BookingWidget() {
  return (
    <div className="calendly-inline-widget"
         data-url="https://calendly.com/fitkid"
         style={{ minWidth: '320px', height: '630px' }}
    />
  );
}
```

### 2. Google Calendar API

```bash
npm install @google-cloud/calendar
```

### 3. CRM интеграция

**Варианты:**
- HubSpot
- Salesforce
- Monday.com
- Custom (Airtable + Zapier)

### 4. Email рассылка

```bash
npm install @sendgrid/mail
# или
npm install resend
```

---

## 🎯 Приоритет 4: AI Ассистент (3-4 дня)

### 1. Чат-бот на странице

```bash
npm install @ai-sdk/openai ai
```

```tsx
// components/AIChatBot.tsx
import { useChat } from 'ai/react';

export default function AIChatBot() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating chat widget */}
    </div>
  );
}
```

### 2. API Route для чата

```tsx
// app/api/chat/route.ts
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4'),
    system: `Ты - ассистент клиники FitKid. Помогаешь родителям
    записаться на прием, отвечаешь на вопросы об услугах, ценах, специалистах.
    
    Услуги: [список услуг]
    Цены: [прайс]
    Контакты: +370 666 99676`,
    messages,
  });

  return result.toDataStreamResponse();
}
```

### 3. RAG для базы знаний

```bash
npm install @pinecone-database/pinecone
npm install openai
```

**Загрузить контент сайта в векторную БД:**
- Описания услуг
- Информация о специалистах
- FAQ
- Цены

---

## 🎯 Приоритет 5: Аналитика (1-2 дня)

### 1. Google Analytics 4

```bash
npm install @next/third-parties
```

```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

### 2. Отслеживание событий

```tsx
// lib/analytics.ts
export const trackEvent = (eventName: string, params?: object) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Использование:
<button onClick={() => {
  trackEvent('click_registration', { location: 'hero' });
  window.location.href = '#registration';
}}>
```

**События для отслеживания:**
- `view_page` - просмотр страницы
- `click_registration` - клик на кнопку записи
- `click_phone` - клик на телефон
- `click_whatsapp` - клик на WhatsApp
- `submit_form` - отправка формы
- `language_change` - смена языка
- `view_service` - просмотр услуги
- `scroll_depth` - глубина скролла (25%, 50%, 75%, 100%)

### 3. Facebook Pixel

```tsx
// app/layout.tsx
<Script id="facebook-pixel">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

---

## 🎯 Приоритет 6: SEO (2-3 дня)

### 1. Sitemap

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://fitkid.lt',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://fitkid.lt/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // ... добавить все страницы
  ];
}
```

### 2. Robots.txt

```tsx
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://fitkid.lt/sitemap.xml',
  };
}
```

### 3. Schema.org разметка

```tsx
// components/StructuredData.tsx
export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "FitKid",
    "description": "Vaikų kineziterapijos klinika Vilniuje",
    "url": "https://fitkid.lt",
    "telephone": "+37066699676",
    "email": "info@fitkid.lt",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aludarių g. 7-43",
      "addressLocality": "Vilnius",
      "postalCode": "01113",
      "addressCountry": "LT"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### 4. Локальный SEO

**Google My Business:**
1. Подтвердить адрес
2. Добавить фото клиники
3. Собрать отзывы
4. Регулярно обновлять информацию

**Локальные директории:**
- Yellow Pages Lithuania
- Vilnius Business Directory
- Healthcare directories

---

## 🎯 Приоритет 7: Оптимизация (1-2 дня)

### 1. Изображения

```tsx
// Использовать Next.js Image
import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="FitKid clinic"
  width={800}
  height={600}
  priority // для hero изображений
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
/>
```

**Оптимизация:**
```bash
# Конвертация в WebP
npx @squoosh/cli --webp auto *.jpg
```

### 2. Fonts optimization

Уже сделано с `display: swap`

### 3. Bundle анализ

```bash
npm install @next/bundle-analyzer

# Запустить анализ
ANALYZE=true npm run build
```

---

## 🎯 Приоритет 8: Деплой (1 день)

### Vercel (рекомендуется)

```bash
npm i -g vercel
vercel login
vercel

# Настроить:
# - Custom domain: fitkid.lt
# - Environment variables
# - Analytics
```

### Настройки домена

```
# DNS записи:
A     @       76.76.21.21
CNAME www     cname.vercel-dns.com
```

### Environment Variables

```env
# В Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL=XXXXX
OPENAI_API_KEY=sk-...
SENDGRID_API_KEY=SG...
```

---

## 📊 Метрики успеха

### Производительность (цели)
- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

### SEO (цели за 3 месяца)
- Органический трафик: 1000+ визитов/мес
- Позиции в TOP-10: 20+ ключевых слов
- Конверсия в заявку: 3-5%

### Бизнес (цели)
- Заявок через сайт: 50+/мес
- Звонков: 100+/мес
- WhatsApp обращений: 30+/мес

---

## 🛠️ Инструменты для мониторинга

1. **Google Search Console** - индексация, позиции
2. **Google Analytics 4** - трафик, поведение
3. **PageSpeed Insights** - производительность
4. **Hotjar** - тепловые карты, записи сессий
5. **Sentry** - мониторинг ошибок

---

## 📞 Нужна помощь?

Если возникнут вопросы на любом этапе - обращайтесь!

**Контакт разработчика:** [ваш контакт]
