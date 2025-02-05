```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.listQueueJobs(
    'yl-v1qf-186n2145dgb2tg1emlkmk',
    'ufo7nbyl9hodgr47mbi5x5lh',
    'g-5jd',
    {
      page: 1000778021,
      pageSize: 88,
    },
  );

  console.log(data);
})();
```
