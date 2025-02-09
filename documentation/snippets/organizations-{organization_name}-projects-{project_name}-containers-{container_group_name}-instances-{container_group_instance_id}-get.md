```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'djh4s8hz0soygun3m687oust14ot1pk0icevxf5izkd-rds',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
