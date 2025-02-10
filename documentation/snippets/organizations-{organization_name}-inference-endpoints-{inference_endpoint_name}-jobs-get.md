```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.listInferenceEndpointJobs(
    'acme-corp',
    'inference_endpoint_name',
    {
      page: 2020264707,
      pageSize: 89,
    },
  );

  console.log(data);
})();
```
