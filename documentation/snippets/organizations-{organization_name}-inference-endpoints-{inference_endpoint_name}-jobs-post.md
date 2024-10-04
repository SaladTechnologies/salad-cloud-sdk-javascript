```typescript
import { CreateInferenceEndpointJob, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createInferenceEndpointJob: CreateInferenceEndpointJob = {
    input: [],
    metadata: {},
    webhook: 'webhook',
  };

  const { data } = await saladCloudSdk.inferenceEndpoints.createInferenceEndpointJob(
    'yg0u13rmnwb7eyumc25lm4prwopvwr-1961f',
    'consectetur occaecat',
    input,
  );

  console.log(data);
})();
```
