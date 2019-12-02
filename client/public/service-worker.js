import { setFlagsFromString } from "v8";

// links to the files I want to cache
const FILES_TO_CACHE = [];
// my 2 caches
const CACHE_NAME = "network_cache";
const DATA_CACHE_NAME = "data-cache";

//install
//caches static assets
//gives access to global scope

self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("your files have been successfully added to your cache");
      return caches.addAll(FILES_TO_CACHE);
    })
  );
  //improves performance by accomplishing task while adding al files to cache
  self.skipWaiting();
});
//grabs all of cache ad uses the .keys method and returning all the keys for those caches, deletes all keys that are not cache name and data cache name
//free up space
self.addEventListener("activate", function(evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});
// fetch
//final life cycle method
//wait until a network fetch is executed by the client
// implementing a data cache strategy
// if the network fetch includes "/api/" then cache that request
self.addEventListener("fetch", function(evt) {
  if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches
        .open(DATA_CACHE_NAME)
        .then(cache => {
          return fetch(evt.request)
            .then(response => {
              // If the response was good, clone it and store it in the cache.
              if (response.status === 200) {
                cache.put(evt.request.url, response.clone());
              }

              return response;
            })
            .catch(err => {
              // Network request failed, try to get it from the cache.
              return cache.match(evt.request);
            });
        })
        .catch(err => {
          console.log(err);
        })
    );

    return;
  }

  evt.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(evt.request).then(response => {
        return response || fetch(evt.request);
      });
    })
  );
});
