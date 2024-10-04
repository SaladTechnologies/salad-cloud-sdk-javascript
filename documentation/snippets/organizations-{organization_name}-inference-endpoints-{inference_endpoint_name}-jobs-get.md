```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpointJobs(
    'yg0u13rmnwb7eyumc25lm4prwopvwr-1961f',
    'consectetur occaecat',
    {
      page: 355955712,
      pageSize: 39,
    },
  );

  console.log(data);
})();
```
