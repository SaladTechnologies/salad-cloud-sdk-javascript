```typescript
import { CreateQueue, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createQueue: CreateQueue = {
    name: 'name',
    displayName: 'M0fH',
    description: 'description',
  };

  const { data } = await saladCloudSdk.queues.createQueue('acme-corp', 'dev-env', createQueue);

  console.log(data);
})();
```
