```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpointJob(
    'acme-corp',
    'transcribe',
    '2fc459a1-1c09-4a34-ade7-54d03fc51d6a',
  );

  console.log(data);
})();
```
