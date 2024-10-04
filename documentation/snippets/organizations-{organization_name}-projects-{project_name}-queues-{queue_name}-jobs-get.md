```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.listQueueJobs(
    'wcaz2jbu5pfmpygxffsf4bh4e6',
    'dzh9lv6afpamv8cx0x6',
    's9f4ikmr0j6c3n18n4djttkqmgzb46dd5wogzrfe2pq12s2',
    {
      page: 706148771,
      pageSize: 45,
    },
  );

  console.log(data);
})();
```
