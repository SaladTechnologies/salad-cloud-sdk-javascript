```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.recreateContainerGroupInstance(
    'pkfh3rhnvt4x30k5t',
    'o7r3q30xz',
    'aq7hd1fjfxgtq8uehil3eplo',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
