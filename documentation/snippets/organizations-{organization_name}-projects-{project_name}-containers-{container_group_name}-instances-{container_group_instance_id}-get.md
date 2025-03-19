```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'mandlebrot',
    'db3a4591-efc3-46c0-b06a-3d820c0ec100',
  );

  console.log(data);
})();
```
