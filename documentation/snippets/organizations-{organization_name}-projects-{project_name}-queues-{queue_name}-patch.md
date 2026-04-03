```typescript
import { QueuePatch, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const queuePatch: QueuePatch = {
    description: 'description',
    displayName: 'hB13',
  };

  const { data } = await saladCloudSdk.queues.updateQueue('acme-corp', 'dev-env', 'fifo-queue', queuePatch);

  console.log(data);
})();
```
