# 🌟 Настройка Google Отзывов

> **Безопасность:** `/api/reviews` обращается к Google с сервера. Не публикуйте ключ в GitHub и не настраивайте для него ограничение «HTTP referrers»: оно относится к браузерным вызовам. В production храните ключ в Secret Manager, разрешите только нужный Places API и проверьте использование перед заменой старого ключа.

## 📋 Что нужно сделать

Для отображения реальных отзывов из Google нужно:

1. **Получить Google Places API ключ**
2. **Найти Place ID вашей клиники**
3. **Добавить credentials в проект**

---

## 🔑 Шаг 1: Получить Google Places API ключ

### 1.1 Перейдите в Google Cloud Console
https://console.cloud.google.com/apis/credentials

### 1.2 Создайте проект (если еще нет)
- Нажмите "Select a project" → "New Project"
- Название: "FitKid Website"
- Нажмите "Create"

### 1.3 Включите Places API
1. Перейдите в **APIs & Services** → **Library**
2. Найдите "Places API"
3. Нажмите "Enable"

### 1.4 Создайте API ключ
1. Перейдите в **APIs & Services** → **Credentials**
2. Нажмите **"+ CREATE CREDENTIALS"** → **"API key"**
3. Скопируйте созданный ключ

### 1.5 Ограничьте ключ (рекомендуется)
1. Нажмите на созданный ключ
2. В разделе **"API restrictions"**:
   - Выберите "Restrict key"
   - Выберите только "Places API"
3. Для ограничения по IP нужен постоянный исходящий IP сервера; сначала настройте его и проверьте работу API. Не выбирайте "HTTP referrers" для серверного запроса.
4. Нажмите **"Save"**

---

## 🗺️ Шаг 2: Найти Place ID

### Метод 1: Через Place ID Finder (Рекомендуется)
1. Откройте: https://developers.google.com/maps/documentation/places/web-service/place-id
2. Нажмите **"Place ID Finder"**
3. Введите: **"FitKid Klinika Vilnius"**
4. Выберите вашу клинику из результатов
5. Скопируйте **Place ID** (например: `ChIJ...`)

### Метод 2: Через Google Maps
1. Откройте Google Maps: https://www.google.com/maps
2. Найдите **"FitKid Klinika Vilnius"**
3. Откройте DevTools (F12)
4. В консоли выполните:
   ```javascript
   // Найдите в HTML элемент с data-place-id
   document.querySelector('[data-place-id]').dataset.placeId
   ```
5. Скопируйте Place ID

### Метод 3: Из URL
1. Откройте вашу клинику в Google Maps
2. URL будет выглядеть как: `https://www.google.com/maps/place/...`
3. Найдите в URL параметр вида: `1s0x46dd94...` - это Place ID

**Ваш примерный адрес:**
- Название: FitKid Klinika
- Адрес: Vilnius, Lithuania
- Искать по: "FitKid Klinika Vilnius" или "FitKid vaikų klinika"

---

## ⚙️ Шаг 3: Добавить credentials в проект

### 3.1 Создайте файл `.env.local`
```bash
cd /Users/piotrdubrovskij/Desktop/cursor/fitkid-website
touch .env.local
```

### 3.2 Добавьте в `.env.local`:
```env
# Google Places API
GOOGLE_PLACES_API_KEY=AIzaSy...ваш_ключ_здесь
GOOGLE_PLACE_ID=ChIJ...ваш_place_id_здесь
```

**Пример:**
```env
GOOGLE_PLACES_API_KEY=YOUR_GOOGLE_PLACES_API_KEY
GOOGLE_PLACE_ID=ChIJN1t_tDeuEmsRUsoyG83frY4
```

### 3.3 Перезапустите dev сервер
```bash
# Ctrl+C чтобы остановить
npm run dev
```

---

## 🎯 Шаг 4: Проверка

### 4.1 Проверьте API endpoint
Откройте в браузере:
```
http://localhost:3000/api/reviews
```

**Должны увидеть JSON с отзывами:**
```json
{
  "rating": 4.9,
  "totalReviews": 100,
  "reviews": [
    {
      "author_name": "Имя автора",
      "rating": 5,
      "text": "Текст отзыва...",
      ...
    }
  ]
}
```

### 4.2 Проверьте на сайте
Откройте: `http://localhost:3000`

Прокрутите вниз до секции **"Mūsų klientų atsiliepimai"**

Должны увидеть:
- ✅ Реальные отзывы из Google
- ✅ Реальный рейтинг (например 4.9)
- ✅ Количество отзывов
- ✅ Фото авторов
- ✅ Кнопку "Žiūrėti visus atsiliepimus Google Maps"

---

## 🐛 Troubleshooting

### Проблема: "Failed to fetch reviews"
**Решение:**
1. Проверьте что API ключ правильный
2. Проверьте что Places API включен в Google Cloud Console
3. Проверьте что Place ID правильный

### Проблема: "Demo User" отзыв
**Причина:** API credentials не настроены

**Решение:**
1. Убедитесь что `.env.local` создан
2. Проверьте что переменные GOOGLE_PLACES_API_KEY и GOOGLE_PLACE_ID заполнены
3. Перезапустите dev сервер

### Проблема: "Quota exceeded"
**Причина:** Превышен бесплатный лимит Google Places API

**Решение:**
1. Google Places API дает $200 бесплатно каждый месяц
2. Place Details стоит $0.017 за запрос
3. С кешированием (1 час) это ~720 запросов в месяц ≈ $12
4. Настройте billing в Google Cloud Console или увеличьте revalidate время

### Проблема: Отзывов мало или нет
**Причина:** У вашей клиники мало отзывов в Google или неправильный Place ID

**Решение:**
1. Проверьте Place ID - найдите вашу клинику в Google Maps
2. Попросите клиентов оставить отзывы
3. В коде можно уменьшить slice(0, 6) до slice(0, 3) чтобы показывать меньше карточек

---

## 💰 Стоимость Google Places API

### Бесплатно:
- $200 кредитов каждый месяц
- ≈ 11,700 запросов Place Details в месяц

### С кешированием (1 час):
- ~720 запросов в месяц
- Стоимость: ~$12/месяц
- **Покрывается бесплатными кредитами!**

### Оптимизация:
```typescript
// В app/api/reviews/route.ts увеличьте revalidate:
export const revalidate = 3600; // 1 час (текущее значение)
export const revalidate = 86400; // 24 часа (еще дешевле)
```

---

## 📞 Поддержка

Если что-то не работает:

1. Проверьте консоль браузера (F12) на ошибки
2. Проверьте терминал где запущен `npm run dev`
3. Проверьте Google Cloud Console → Quotas

**API Documentation:**
- Places API: https://developers.google.com/maps/documentation/places/web-service
- Place Details: https://developers.google.com/maps/documentation/places/web-service/details

---

## ✅ Готово!

После настройки ваш сайт будет автоматически загружать и показывать реальные отзывы из Google каждый час!

**Преимущества:**
- ✅ Актуальные отзывы всегда
- ✅ Реальные фото клиентов
- ✅ Реальный рейтинг
- ✅ Доверие посетителей
- ✅ SEO бонус

---

🎉 **Если все работает - наслаждайтесь!**
