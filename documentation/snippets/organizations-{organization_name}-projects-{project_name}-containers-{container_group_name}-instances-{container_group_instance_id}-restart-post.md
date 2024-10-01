```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.restartContainerGroupInstance(
    'x2hb606akllhe-z9w578p05ni',
    'czv80xtiift-dhcux3behoqegicbjgytvavm7ngiki6uxl76eoewg5dgz5g',
    'f3mzshp',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
