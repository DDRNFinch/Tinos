const CACHE='tinos-shell-v5';
const CACHE_PREFIX='tinos-shell-';
const ASSETS=[
  '/Tinos/',
  '/Tinos/index.html',
  '/Tinos/styles.css',
  '/Tinos/app.js',
  '/Tinos/manifest.webmanifest',
  '/Tinos/tinos-192.png',
  '/Tinos/tinos-512.png'
];

async function warmCache(){
  const cache=await caches.open(CACHE);
  await Promise.allSettled(ASSETS.map(async url=>{
    const response=await fetch(url,{cache:'no-store'});
    if(response&&response.ok)await cache.put(url,response.clone());
  }));
}

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    await warmCache();
    await self.skipWaiting();
  })());
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
  if(url.origin!==self.location.origin||!url.pathname.startsWith('/Tinos/'))return;
  event.respondWith((async()=>{
    try{
      const response=await fetch(event.request,{cache:'no-store'});
      if(response&&response.ok){
        const cache=await caches.open(CACHE);
        cache.put(event.request,response.clone()).catch(()=>{});
      }
      return response;
    }catch(_){
      return (await caches.match(event.request,{ignoreSearch:true})) ||
        (event.request.mode==='navigate' ? await caches.match('/Tinos/index.html') : Response.error());
    }
  })());
});
