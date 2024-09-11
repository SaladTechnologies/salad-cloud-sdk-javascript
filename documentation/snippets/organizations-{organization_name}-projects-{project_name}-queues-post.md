```typescript
import { CreateQueue, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createQueue: CreateQueue = {
    name: 'qezkr2369ic05v6gnnllg6fhb-84kitkca0jy309-oh27ro0i5p95v4le',
    displayName: 'IR',
    description: 'consequat nulla magna minim ad',
  };

  const { data } = await saladCloudSdk.queues.createQueue('v2321xyb8mgby4oaz0nnednrzwspo5e', 'uqcz1p0g5ye7j57a', input);

  console.log(data);
})();
```
