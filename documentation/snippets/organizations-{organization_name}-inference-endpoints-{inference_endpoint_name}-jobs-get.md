```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpointJobs(
    'pk05fdmxk23ipxt6vd6e',
    'inference_endpoint_name',
    {
      page: 1228703779,
      pageSize: 80,
    },
  );

  console.log(data);
})();
```
