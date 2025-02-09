```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.restartContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'p1adeb-w3gjttgd7m2r1wt99qo455',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
