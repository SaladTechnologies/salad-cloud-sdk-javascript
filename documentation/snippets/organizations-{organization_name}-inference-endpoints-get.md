```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.listInferenceEndpoints(
    'i5u5k7xmi1ci3kyzzon0m2iedxbj3f1dok1g0m6v2k19i504j7b03k36na',
    {
      page: 667517848,
      pageSize: 57,
    },
  );

  console.log(data);
})();
```
