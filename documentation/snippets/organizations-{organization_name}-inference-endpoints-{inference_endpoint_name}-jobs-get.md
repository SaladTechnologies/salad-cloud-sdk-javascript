```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpointJobs(
    'trzfoq1p77wk9jgwxjp56dzbnwtbgowklqt1wsbe00',
    'ut officia ut',
    {
      page: 1653138765,
      pageSize: 76,
    },
  );

  console.log(data);
})();
```
