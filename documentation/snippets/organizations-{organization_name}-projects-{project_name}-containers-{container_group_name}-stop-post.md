```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.stopContainerGroup(
    'acme-corp',
    'dev-env',
    'x5pfkx3zz5np0cn9u94xdcf5g5w9-1',
  );

  console.log(data);
})();
```
