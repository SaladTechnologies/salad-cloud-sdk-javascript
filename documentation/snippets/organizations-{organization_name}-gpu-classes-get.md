```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.organizationData.listGpuClasses(
    'fxfk5b5evdjkgcjj9-97upvvnm6un-9x5riyyqnyl5q39cufb35o2nfpd3n8gv',
  );

  console.log(data);
})();
```
