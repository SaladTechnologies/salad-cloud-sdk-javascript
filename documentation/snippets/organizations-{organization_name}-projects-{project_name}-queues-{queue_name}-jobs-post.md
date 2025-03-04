```typescript
import { CreateQueueJob1, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createQueueJob1: CreateQueueJob1 = {
    input: [],
    metadata: {},
    webhook: 'webhook',
  };

  const { data } = await saladCloudSdk.queues.createQueueJob('acme-corp', 'dev-env', 'fifo-queue', createQueueJob1);

  console.log(data);
})();
```
