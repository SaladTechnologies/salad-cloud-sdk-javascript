```typescript
import { QueueJobPrototype, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const queueJobPrototype: QueueJobPrototype = {
    input: [],
    metadata: {},
    webhook: 'webhook',
  };

  const { data } = await saladCloudSdk.queues.createQueueJob('acme-corp', 'dev-env', 'fifo-queue', queueJobPrototype);

  console.log(data);
})();
```
