```typescript
import { SaladCloudSdk, UpdateQueue1 } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const updateQueue1: UpdateQueue1 = {
    displayName: 'yZ5chs',
    description: 'description',
  };

  const { data } = await saladCloudSdk.queues.updateQueue('acme-corp', 'dev-env', 'fifo-queue', updateQueue1);

  console.log(data);
})();
```
