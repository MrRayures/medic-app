/*
* Service workers
* https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers
*/

const version = 'v0.1';


const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Installation du service worker en cours");
      } else if (registration.waiting) {
        console.log("Service worker installé");
      } else if (registration.active) {
        console.log("Service worker actif");
      }
    } catch (error) {
      console.error(`L'enregistrement a échoué : ${error}`);
    }
  }
};

registerServiceWorker();


// Cache
const addResourcesToCache = async (resources) => {
  const cache = await caches.open(version);
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  console.log(`${version} Installation en cours...`);

  event.waitUntil(
    addResourcesToCache([
      '/',
      '/index.html',
      '/src/assets/css/app.css',
      '/src/assets/fonts/fira-code-v27-latin-regular.woff2',
      '/src/assets/fonts/fira-code-v27-latin-500.woff2',
      '/src/assets/fonts/fira-code-v27-latin-600.woff2',
      '/src/assets/fonts/fira-code-v27-latin-700.woff2',
      '/src/assets/icons/sprite/icons.svg',
      '/src/assets/images/body-horizontal.svg',
      '/src/assets/images/body-vertical.svg',
      '/src/assets/images/loader.svg',
      '/src/assets/images/logo.svg',
      '/src/js/data.js',
      '/src/js/router.js',
      '/src/js/utils.js',
      '/src/js/components/appMenu.js',
      '/src/js/components/appOptions.js',
      '/src/js/components/gameAdd.js',
      '/src/js/components/gameFooter.js',
      '/src/js/components/gameList.js',
      '/src/js/components/gameOptions.js',
      '/src/js/components/gameSettings.js',
      '/src/js/components/gameStats.js',
      '/src/js/components/gameStatsPlayer.js',
      '/src/js/components/injury.js',
      '/src/js/components/injuryCheck.js',
      '/src/js/components/injuryLocalisation.js',
      '/src/js/components/injuryProtection.js',
      '/src/js/components/injuryTreat.js',
      '/src/js/components/navbar.js',
      '/src/js/components/playerAdd.js',
      '/src/js/components/playerStats.js',
      '/src/js/views/game-home.js',
      '/src/js/views/game-options.js',
      '/src/js/views/game-stats.js',
      '/src/js/views/home.js',
      '/src/js/views/injury-check.js',
      '/src/js/views/injury-info.js',
      '/src/js/views/injury-localisation.js',
      '/src/js/views/injury-protection.js',
      '/src/js/views/injury-treat.js',
      '/src/js/views/load-game.js',
      '/src/js/views/new-game.js',
      '/src/js/views/options.js',
      '/src/js/views/player-dead.js',
      '/src/js/views/player-healed.js'
    ]),
  );
});


const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  return fetch(request);
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});


// Delete OLD cache
const deleteCache = async (key) => {
  await caches.delete(key);
};

const deleteOldCaches = async () => {
  const cacheKeepList = [version];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
};

self.addEventListener("activate", (event) => {
  event.waitUntil(deleteOldCaches());
});



/*

// Registering a service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch(function(error) {
    console.error('Service Worker registration failed:', error);
  });
}

// Example service worker file (sw.js)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('pwa-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/src/assets/css/app.css',
        '/src/js/router.js',
        '/src/js/data.js',
        '/src/js/utils.js',
        '/images/logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

*/