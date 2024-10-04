```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.listInferenceEndpoints(
    'wtxd1j0ixuhfk-hdff3n3-hbtsigyh53bt0g4gjh8mcz4',
    {
      page: 121822981,
      pageSize: 37,
    },
  );

  console.log(data);
})();
```
