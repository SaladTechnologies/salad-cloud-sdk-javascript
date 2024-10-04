```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.deleteInferenceEndpointJob(
    'kdhvnhwadaqzuh18',
    'eiusmod dolore do',
    'inference_endpoint_job_id',
  );

  console.log(data);
})();
```
