```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpointJob(
    'wm7sq978nq8j748qskk0hr2eg4sl7t97a39br872',
    'ullamco',
    'inference_endpoint_job_id',
  );

  console.log(data);
})();
```
