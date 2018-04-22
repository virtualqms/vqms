self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  
    const title = 'Yay';
    const options = {
      body: 'Yay it works.',
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });