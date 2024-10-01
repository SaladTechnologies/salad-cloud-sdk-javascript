```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpointJob(
    'nh-xfk5b5evdjkgcjj9-97upvvnm6un-9x5riyyqnyl5q38',
    'elit te',
    'inference_endpoint_job_id',
  );

  console.log(data);
})();
```
