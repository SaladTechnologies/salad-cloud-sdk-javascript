```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'fqikj9f18pdqxq52i317o1',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
