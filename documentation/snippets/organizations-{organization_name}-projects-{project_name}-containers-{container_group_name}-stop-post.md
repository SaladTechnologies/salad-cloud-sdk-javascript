```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.stopContainerGroup(
    'jpqhlkkgd',
    'a9h5upyur493wxwbxrj4xt9wfx07sgyz1fs97sfhtue78-54vd',
    'jp2qrcnt-8a3',
  );

  console.log(data);
})();
```
