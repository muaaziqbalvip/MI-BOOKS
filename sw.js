
const CACHE='dajjali-pro-v1';
const ASSETS=['/','/index.html','/manifest.json','/public/icon.jpg','/public/books/dajjali_matrix.pdf','/firebase-config.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
