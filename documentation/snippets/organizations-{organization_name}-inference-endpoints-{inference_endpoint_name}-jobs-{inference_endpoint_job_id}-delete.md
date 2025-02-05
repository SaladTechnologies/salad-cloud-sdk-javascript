```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.deleteInferenceEndpointJob(
    'igqfe6b1d0c-0auqqph3bt-7bft4c1m95idut36tc-x7mo2nsh7uoln',
    'inference_endpoint_name',
    'inference_endpoint_job_id',
  );

  console.log(data);
})();
```
