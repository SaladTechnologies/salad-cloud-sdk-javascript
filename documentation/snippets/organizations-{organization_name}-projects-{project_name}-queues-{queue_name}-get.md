```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.getQueue(
    'g1bq27ohe5dpzbgsk8gvpuhecson4k2eclxss3',
    'wtxd1j0ixuhfk-hdff3n3-hbtsigyh53bt0g4gjh8mcz4',
    'bnkfiyt3k5ke3wy-5gl1809r',
  );

  console.log(data);
})();
```
