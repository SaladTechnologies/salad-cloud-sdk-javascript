```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.listQueues('v2321xyb8mgby4oaz0nnednrzwspo5e', 'uqcz1p0g5ye7j57a');

  console.log(data);
})();
```
