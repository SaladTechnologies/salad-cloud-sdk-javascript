```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.getQueueJob(
    'acme-corp',
    'dev-env',
    'fifo-queue',
    '7dcd6922-50e9-4d56-89b5-91cde26f0211',
  );

  console.log(data);
})();
```
