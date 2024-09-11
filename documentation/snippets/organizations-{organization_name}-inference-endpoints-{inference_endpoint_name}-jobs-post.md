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

  const { data } = await saladCloudSdk.inferenceEndpoints.createInferenceEndpointJob('yafds', 'ex mollit', input);

  console.log(data);
})();
```
