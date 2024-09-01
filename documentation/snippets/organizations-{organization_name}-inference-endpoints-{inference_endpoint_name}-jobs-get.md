```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpointJobs('et0wus4xea-xt7p0xv', 'minim Ut s', {
    page: 408174252,
    pageSize: 59,
  });

  console.log(data);
})();
```
