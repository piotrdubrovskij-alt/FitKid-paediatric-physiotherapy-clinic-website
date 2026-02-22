# 🎥 Руководство: Video Hero Section

## ✅ Что сделано

Создана **fullscreen video hero** секция с:

- 🎬 Полноэкранное видео на фоне (авто-воспроизведение, loop)
- 🎨 Градиентный overlay для читаемости текста
- 📱 Адаптивный дизайн (телефон/планшет/десктоп)
- 🎯 Кнопка "Registracija vizitui" поверх видео
- ⏯️ Play/Pause контрол (опционально)
- 📊 Статистика (500+ семей, 10+ лет, 3 специалиста)
- 🔍 **SEO оптимизация** (H1, Schema.org, meta-теги)

---

## 🎬 Как добавить видео

### 1. Подготовка видео

**Рекомендуемые параметры:**
- Формат: MP4 (H.264 codec) + WebM (для лучшей поддержки)
- Разрешение: 1920x1080 (Full HD) или 1280x720 (HD)
- Длительность: 10-30 секунд (loop)
- Размер файла: до 10MB (оптимально 3-5MB)
- Соотношение сторон: 16:9 (горизонтальное)

**Советы:**
- Видео должно быть без звука (будет автоматически muted)
- Избегайте мелких деталей/текста — они плохо видны
- Яркость: средняя (не слишком темное/светлое)
- Движение: плавное, не резкое

### 2. Конвертация видео (если нужно)

**С помощью HandBrake (бесплатно):**

```bash
# Скачать: https://handbrake.fr/

# Настройки:
# - Preset: "Fast 1080p30"
# - Video Codec: H.264
# - Quality: RF 22-24 (меньше = лучше качество, больше размер)
# - Frame Rate: 30 FPS
```

**С помощью FFmpeg (командная строка):**

```bash
# Конвертация в MP4 (оптимизированный)
ffmpeg -i input.mov -c:v libx264 -crf 23 -preset medium -vf "scale=1920:1080" -an hero.mp4

# Конвертация в WebM (для браузеров)
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -vf "scale=1920:1080" -an hero.webm

# Создание poster image (первый кадр)
ffmpeg -i hero.mp4 -ss 00:00:01 -vframes 1 hero-poster.jpg
```

### 3. Размещение файлов

Положите файлы в папку `public/media/`:

```
fitkid-website/
└── public/
    └── media/
        ├── hero.mp4         ← Основное видео
        ├── hero.webm        ← Альтернативный формат (опционально)
        └── hero-poster.jpg  ← Постер (показывается до загрузки видео)
```

**Командами:**

```bash
# Из терминала в папке проекта:
cp /path/to/your/video.mp4 public/media/hero.mp4
cp /path/to/your/poster.jpg public/media/hero-poster.jpg
```

### 4. Проверка

Откройте сайт: `http://127.0.0.1:3001` — видео должно автоматически загрузиться и воспроизводиться.

---

## 🎨 Настройка дизайна

### Изменить overlay (затемнение)

Откройте `components/VideoHero.tsx`, найдите строки 33-34:

```tsx
{/* Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/70" />
<div className="absolute inset-0 bg-gradient-to-r from-[#54B6FC]/20 to-[#fb7825]/10" />
```

**Сделать темнее:**
```tsx
from-gray-900/80 via-gray-900/60 to-gray-900/90
```

**Сделать светлее:**
```tsx
from-gray-900/40 via-gray-900/20 to-gray-900/50
```

**Убрать цветной градиент:**
```tsx
{/* Закомментируйте вторую строку */}
{/* <div className="absolute inset-0 bg-gradient-to-r from-[#54B6FC]/20 to-[#fb7825]/10" /> */}
```

### Изменить высоту hero

Строка 24:

```tsx
<section className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
```

**Сделать выше:**
```tsx
max-h-[1100px]
```

**Сделать ниже:**
```tsx
max-h-[700px]
```

**Фиксированная высота:**
```tsx
h-[800px] min-h-[800px] max-h-[800px]
```

### Скрыть Play/Pause кнопку

Строка 103-117 — удалите или закомментируйте блок:

```tsx
{/* Video Controls */}
{/* 
<button onClick={togglePlay} ...>
  ...
</button>
*/}
```

---

## 🔍 SEO оптимизация (уже сделано!)

### 1. Структура H1

```tsx
<h1 className="...">
  {translations.hero.title}
</h1>
```

✅ Правильная иерархия: H1 → H2 → H3
✅ Ключевые слова: "Vaikų kineziterapijos klinika Vilniuje"

### 2. Schema.org разметка

Файл: `app/schema.tsx`

```json
{
  "@type": "MedicalClinic",
  "name": "FitKid",
  "description": "Vaikų ir kūdikių kineziterapijos klinika...",
  "aggregateRating": {
    "ratingValue": "4.9",
    "reviewCount": "100"
  }
}
```

✅ Google видит: тип бизнеса, рейтинг, контакты, график работы

### 3. Meta-теги

Файл: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "FitKid - Vaikų kineziterapijos klinika Vilniuje | Kūdikių ir vaikų gydymas",
  description: "Profesionali vaikų kineziterapija... ☎ +370 666 99676",
  keywords: "kineziterapija vaikams Vilnius, kūdikių masažas...",
  openGraph: { ... },  // Для Facebook/соцсетей
  twitter: { ... },    // Для Twitter
}
```

✅ Оптимизированный title (60-70 символов)
✅ Description с призывом к действию + телефон
✅ Ключевые слова (10-15 фраз)

### 4. Canonical URLs

```tsx
alternates: {
  canonical: "https://fitkid.lt",
  languages: {
    'lt': 'https://fitkid.lt',
    'en': 'https://fitkid.lt/en',
    'ru': 'https://fitkid.lt/ru',
  },
}
```

✅ Предотвращает дублирование контента

---

## 📊 Производительность

### Video loading оптимизация

Текущие настройки (строка 27-35):

```tsx
<video
  autoPlay        // Автовоспроизведение
  muted           // Без звука (required для autoplay)
  loop            // Повтор
  playsInline     // На iOS не открывается в fullscreen
  poster="..."    // Показывается до загрузки
>
  <source src="/media/hero.mp4" type="video/mp4" />
  <source src="/media/hero.webm" type="video/webm" />
</video>
```

### Ленивая загрузка (если видео большое)

Замените строку 27 на:

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  poster="..."
  preload="none"  // Видео не загружается до клика
>
```

### Показывать видео только на десктопе

```tsx
{/* Desktop video */}
<div className="hidden md:block absolute inset-0">
  <video ... />
</div>

{/* Mobile poster */}
<div className="block md:hidden absolute inset-0">
  <Image src="/media/hero-poster.jpg" alt="FitKid" fill className="object-cover" />
</div>
```

---

## 🎯 CTA оптимизация

### Кнопка "Registracija vizitui"

Строка 65-71:

```tsx
<a
  href="#registration"
  className="group ... hover:scale-105 hover:shadow-2xl"
>
  <span>{translations.nav.registration}</span>
  <ArrowRight className="w-6 h-6 group-hover:translate-x-1" />
</a>
```

**Изменить ссылку:**
```tsx
href="tel:+37066699676"  // Позвонить
href="https://calendly.com/fitkid"  // Calendly
href="/registration"  // Своя страница формы
```

**Изменить цвет кнопки:**
```tsx
bg-[#54B6FC] hover:bg-[#4aa5eb]  // Синяя
bg-green-500 hover:bg-green-600   // Зелёная
```

### A/B тестирование текста кнопки

```tsx
// Вариант A (текущий)
<span>Registracija vizitui</span>

// Вариант B (призыв к действию)
<span>Užsiregistruoti dabar</span>

// Вариант C (с выгодой)
<span>Nemokama konsultacija</span>
```

---

## 📱 Адаптивность

### Текущие breakpoints

| Экран | Размер заголовка | Расположение |
|-------|-----------------|--------------|
| Mobile (< 640px) | text-4xl | По центру (вертикально) |
| Tablet (640-1024px) | text-5xl | Слева, отступы |
| Desktop (> 1024px) | text-7xl | Слева, max-width-3xl |

### Тестирование на разных устройствах

```bash
# Откройте DevTools (F12) в браузере
# Выберите: Toggle device toolbar (Ctrl+Shift+M)
# Протестируйте:
# - iPhone 12 (390x844)
# - iPad (768x1024)
# - Desktop (1920x1080)
```

---

## 🎬 Где найти видео

### 1. Текущий сайт fitkid.lt

Если на конструкторе есть видео:
- Откройте админ-панель конструктора
- Найдите "Media" или "Assets"
- Скачайте исходный файл

### 2. Создать новое видео

**Варианты:**
- **Снять профессионально** ($200-500)
- **Использовать stock footage** (бесплатно/платно):
  - Pexels.com (бесплатно)
  - Pixabay.com (бесплатно)
  - Envato Elements ($16/мес)

**Пример поиска:**
- "children physiotherapy"
- "infant massage"
- "pediatric therapy"
- "medical clinic interior"

### 3. Анимированное видео

Если нет реального видео — создайте анимацию:
- Canva (бесплатно, шаблоны)
- After Effects (профессионально)
- Animoto (простой online-редактор)

---

## ⚙️ Дополнительные фичи

### Добавить звук (при клике)

```tsx
const [isMuted, setIsMuted] = useState(true);

<video
  ref={videoRef}
  muted={isMuted}
  ...
>

<button onClick={() => setIsMuted(!isMuted)}>
  {isMuted ? <VolumeX /> : <Volume2 />}
</button>
```

### Несколько видео (карусель)

```tsx
const videos = [
  '/media/hero1.mp4',
  '/media/hero2.mp4',
  '/media/hero3.mp4',
];
const [current, setCurrent] = useState(0);

// Переключение каждые 10 секунд
useEffect(() => {
  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % videos.length);
  }, 10000);
  return () => clearInterval(timer);
}, []);
```

### YouTube/Vimeo вместо MP4

```tsx
// YouTube embed
<iframe
  className="absolute inset-0 w-full h-full"
  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&controls=0"
  allow="autoplay"
/>

// Vimeo embed
<iframe
  src="https://player.vimeo.com/video/VIDEO_ID?autoplay=1&loop=1&muted=1&background=1"
  className="absolute inset-0 w-full h-full"
/>
```

---

## 📊 Метрики и аналитика

### Отслеживание взаимодействий

```tsx
import { trackEvent } from '@/lib/analytics';

// При клике на CTA
<a
  href="#registration"
  onClick={() => trackEvent('hero_cta_click', {
    location: 'video_hero',
    button: 'registracija_vizitui'
  })}
>

// При паузе видео
const togglePlay = () => {
  if (isPlaying) {
    videoRef.current?.pause();
    trackEvent('video_paused', { timestamp: videoRef.current?.currentTime });
  } else {
    videoRef.current?.play();
    trackEvent('video_played', { timestamp: videoRef.current?.currentTime });
  }
  setIsPlaying(!isPlaying);
};
```

### Heatmaps (тепловые карты)

```bash
# Установить Hotjar или Microsoft Clarity
# Смотреть где пользователи кликают на hero
# Оптимизировать расположение кнопок
```

---

## 🚀 Деплой

После добавления видео:

```bash
# 1. Проверка размера
ls -lh public/media/hero.mp4
# Если > 10MB — оптимизируйте!

# 2. Сборка
npm run build

# 3. Деплой на Vercel
vercel --prod

# 4. Проверка на production
# Откройте https://fitkid.lt
# Проверьте скорость загрузки (F12 → Network)
```

---

## 📞 Нужна помощь?

- **Видео слишком большое?** — конвертация/сжатие
- **Не воспроизводится?** — проверка формата/codec
- **Плохо выглядит на телефоне?** — адаптация дизайна
- **Медленно грузится?** — оптимизация/CDN

Обращайтесь! 🚀
