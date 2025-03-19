```typescript
import { InferenceEndpointJobPrototype, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const inferenceEndpointJobPrototype: InferenceEndpointJobPrototype = {
    input: [],
    metadata: {},
    webhookUrl: 'https://webhook.example.com/events',
  };

  const { data } = await saladCloudSdk.inferenceEndpoints.createInferenceEndpointJob(
    'acme-corp',
    'transcribe',
    inferenceEndpointJobPrototype,
  );

  console.log(data);
})();
```
