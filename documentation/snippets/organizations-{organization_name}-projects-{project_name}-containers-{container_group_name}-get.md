```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroup(
    'zt-dvmb-gmo5a',
    'enqsq6na2w8d2wlvk-85d3jxhjhj',
    'fcixv6oyiqlk',
  );

  console.log(data);
})();
```
