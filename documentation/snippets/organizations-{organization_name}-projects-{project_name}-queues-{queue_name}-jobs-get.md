```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.listQueueJobs('acme-corp', 'dev-env', 'fifo-queue', {
    page: 29045298,
    pageSize: 12,
  });

  console.log(data);
})();
```
