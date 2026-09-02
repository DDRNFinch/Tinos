const CACHE='tinos-v2';
const CACHE_PREFIX='tinos-';
const ASSETS=[
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest?v=2',
  './tinos-180.png?v=2',
  './tinos-192.png?v=2',
  './tinos-512.png?v=2',
  './tinos-maskable-192.png?v=2',
  './tinos-maskable-512.png?v=2'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;

  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    try{
      const response=await fetch(event.request,{cache:'no-store'});
      if(response&&response.ok)await cache.put(event.request,response.clone());
      return response;
    }catch(_){
      return (await cache.match(event.request,{ignoreSearch:true})) || (event.request.mode==='navigate' ? await cache.match('./index.html') : Response.error());
    }
  })());
});
