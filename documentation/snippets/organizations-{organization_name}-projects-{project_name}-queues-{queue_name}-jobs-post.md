```typescript
import { CreateQueueJob, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createQueueJob: CreateQueueJob = {
    input: [],
    metadata: {},
    webhook: 'webhook',
  };

  const { data } = await saladCloudSdk.queues.createQueueJob(
    'yl-v1qf-186n2145dgb2tg1emlkmk',
    'ufo7nbyl9hodgr47mbi5x5lh',
    'g-5jd',
    createQueueJob,
  );

  console.log(data);
})();
```
