```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.stopContainerGroup(
    'acme-corp',
    'dev-env',
    'ua6dqdktbd1fxt2p5a6kl1j8t7v4h',
  );

  console.log(data);
})();
```
