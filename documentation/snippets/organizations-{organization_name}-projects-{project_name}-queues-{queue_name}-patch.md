```typescript
import { QueuePatch, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const queuePatch: QueuePatch = {
    displayName: '5Ecnf',
    description: 'description',
  };

  const { data } = await saladCloudSdk.queues.updateQueue('acme-corp', 'dev-env', 'fifo-queue', queuePatch);

  console.log(data);
})();
```
