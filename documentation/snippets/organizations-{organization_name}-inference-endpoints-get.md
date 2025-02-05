```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.listInferenceEndpoints(
    'r98kinnaq6opnq-td84vb3q9zv3k2ki3jzct2pf06rygg23yz',
    {
      page: 1536623748,
      pageSize: 41,
    },
  );

  console.log(data);
})();
```
