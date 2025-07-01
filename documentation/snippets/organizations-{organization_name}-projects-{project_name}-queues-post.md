```typescript
import { QueuePrototype, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const queuePrototype: QueuePrototype = {
    name: 'name',
    displayName: '5h',
    description: 'description',
  };

  const { data } = await saladCloudSdk.queues.createQueue('acme-corp', 'dev-env', queuePrototype);

  console.log(data);
})();
```
