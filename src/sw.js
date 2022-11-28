const CACHE_NAME = "static-kel09-v1";
const urlsToCache = [
    '/static/js/*.js',
    '/static/js/*.js.map',
    '/static/css/*.css',
    '/static/css/*.css.map',
    '/offline-fetch.json',
    '/offline.png'
];

const self = this;

// Install Service Worker
self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache)=>{
                console.log('in install servicer worker... cache opened!')
                return cache.addAll(urlsToCache);
            })
    );
})

// Activate the Service Worker
self.addEventListener('activate',(event)=>{
    event.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(
                cacheNames.filter(function(cacheName){
                    return cacheName != CACHE_NAME
                }).map(function(cacheName){
                    return caches.delete(cacheName);
                })
            )
        })
    )
})


// Listen For Request
self.addEventListener('fetch',(event)=>{
    const request = event.request;
    const url = new URL(request.url);
    

    if(url.origin === location.origin){
        // untuk static assets
        event.respondWith(
            caches.match(request)
                .then((response)=>{    
                    return response || fetch(request);
                })
        )
    }else{
        // untuk fetch data api
        event.respondWith(
            caches.open('movie-kel09-cache')
                .then(function(cache){
                    return fetch(request).then(function(liveResponse){
                        cache.put(request, liveResponse.clone())
                        return liveResponse;
                    })
                    .catch(function(){
                        return caches.match(request)
                            .then(function(response){  
                                return response || caches.match('/offline-fetch.json')
                            })
                    });
                })
        )
    }
})
