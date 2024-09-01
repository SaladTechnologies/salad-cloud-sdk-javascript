```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.listQueueJobs(
    'jb7eyumc25lm4prwopvwr-1961g-m85nbqda3ufs',
    'sn780t45z2tw4xt1b86w0clx6vkq-3',
    'sx811v32aty9s-ghx1hm2nw1mhgooidhvnhwadaqzuh19krhv62or5c',
    {
      page: 2110014563,
      pageSize: 23,
    },
  );

  console.log(data);
})();
```
