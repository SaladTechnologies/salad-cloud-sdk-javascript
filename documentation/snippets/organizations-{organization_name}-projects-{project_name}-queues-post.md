```typescript
import { CreateQueue1, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createQueue1: CreateQueue1 = {
    name: 'name',
    displayName: 'aca.cRCnc',
    description: 'description',
  };

  const { data } = await saladCloudSdk.queues.createQueue('acme-corp', 'dev-env', createQueue1);

  console.log(data);
})();
```
