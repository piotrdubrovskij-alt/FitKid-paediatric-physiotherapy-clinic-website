// Language utilities for persistent language selection
export const getStoredLanguage = (): 'lt' | 'en' => {
  if (typeof window === 'undefined') return 'lt';
  const stored = localStorage.getItem('fitkid-language');
  return (stored === 'en' ? 'en' : 'lt') as 'lt' | 'en';
};

export const setStoredLanguage = (lang: 'lt' | 'en') => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('fitkid-language', lang);
};
