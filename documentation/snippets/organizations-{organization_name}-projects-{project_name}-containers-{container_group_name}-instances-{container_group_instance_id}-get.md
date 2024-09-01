```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroupInstance(
    'cce0i3',
    'bb53k',
    'vtsp-47yvqix7',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
