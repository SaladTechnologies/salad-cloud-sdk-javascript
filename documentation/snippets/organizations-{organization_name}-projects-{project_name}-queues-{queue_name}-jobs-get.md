```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.listQueueJobs(
    'caw0rzpy61pt90mpd37q4adxw-cgodal6rzqd6z1mw1si55p9gl6eb4zgl',
    'd6wezcp8h3lm398az1xa5dcxhbrhwkxlx3lw0pdkr3o5',
    'jknzh2tjfasx0nsa3dsbwz4m6an9wbi5',
    {
      page: 1762690379,
      pageSize: 100,
    },
  );

  console.log(data);
})();
```
