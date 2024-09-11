```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.listInferenceEndpoints(
    'w5k7xmi1ci3kyzzon0m2iedxbj3f1dok1gz',
    {
      page: 744143038,
      pageSize: 88,
    },
  );

  console.log(data);
})();
```
