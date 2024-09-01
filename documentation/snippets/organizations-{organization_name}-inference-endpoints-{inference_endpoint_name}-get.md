```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpoint(
    'uzp1dyfm2yp4-lxa27tl0fwms3fu3myo74a99jr6ouv4w8',
    'aute Ut reprehenderit occaecat sed',
  );

  console.log(data);
})();
```
