```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.listInferenceEndpoints(
    'wg1umdxtc9fte8osib-e-5ux2vsmrhjjt13u7q3pryxxnm',
    {
      page: 756148233,
      pageSize: 66,
    },
  );

  console.log(data);
})();
```
