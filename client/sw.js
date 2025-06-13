// sw.js — минимальный service worker

self.addEventListener('install', (event) => {
  console.log('✅ Service Worker установлен');
  self.skipWaiting(); // Сразу активируется
});

self.addEventListener('activate', (event) => {
  console.log('⚙️ Service Worker активирован');
  return self.clients.claim(); // Берёт контроль над страницей
});

self.addEventListener('fetch', (event) => {
  // Не вмешиваемся в fetch-запросы
});
