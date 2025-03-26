```typescript
import { ContainerGroupInstancePatch, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const containerGroupInstancePatch: ContainerGroupInstancePatch = {
    deletionCost: 82294,
  };

  const { data } = await saladCloudSdk.containerGroups.updateContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'mandlebrot',
    'db3a4591-efc3-46c0-b06a-3d820c0ec100',
    containerGroupInstancePatch,
  );

  console.log(data);
})();
```
