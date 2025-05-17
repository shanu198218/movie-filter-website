export function changeLanguage(lang) {
  const link = document.getElementById('main-style');
  const html = document.documentElement;

  if (lang === 'ar') {
    link.href = './css/style-rtl.css';
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
  } else {
    link.href = './css/style.css';
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
  }

  localStorage.setItem('language', lang);
}

export function initializeLanguageSwitcher() {
  const savedLang = localStorage.getItem('language');
  const browserLang = navigator.language || navigator.userLanguage;
  const langToUse = savedLang || (browserLang.startsWith('ar') ? 'ar' : 'en');
  document.getElementById('languageSwitcher').value = langToUse;
  changeLanguage(langToUse);
}
