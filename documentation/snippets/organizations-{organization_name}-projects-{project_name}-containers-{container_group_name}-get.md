```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroup(
    'oji7lyvxb3ca5hc',
    'olb1uzytbhhukf1u0-ahl0b9oqfjj',
    's7z7dvdopv2czgde1zrufxgiv5tp-j',
  );

  console.log(data);
})();
```
