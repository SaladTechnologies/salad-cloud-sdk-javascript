```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.stopContainerGroup(
    'fooidhvnhwad',
    'azuh19krhv62or5c-im9-8sae7tz',
    'oo0emyztq64o8ut710qtepjztx34mk6lruecseiyq06ab3ok5xsg-okxar',
  );

  console.log(data);
})();
```
