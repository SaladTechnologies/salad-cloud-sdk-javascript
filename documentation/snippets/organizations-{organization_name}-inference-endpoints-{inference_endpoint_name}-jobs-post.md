```typescript
import { CreateInferenceEndpointJob1, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createInferenceEndpointJob1: CreateInferenceEndpointJob1 = {
    input: [],
    metadata: {},
    webhookUrl: 'webhook_url',
  };

  const { data } = await saladCloudSdk.inferenceEndpoints.createInferenceEndpointJob(
    'acme-corp',
    'transcribe',
    createInferenceEndpointJob1,
  );

  console.log(data);
})();
```
