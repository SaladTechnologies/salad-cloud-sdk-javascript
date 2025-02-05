```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.startContainerGroup(
    'vrwopvwr-1961g-m85nbqda3ufsy',
    'm780t45z2tw4xt1b86w0clx6u',
    'h-405x811v32aty9s-ghx1hm2nw1m',
  );

  console.log(data);
})();
```
