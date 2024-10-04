```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.restartContainerGroupInstance(
    'pb',
    'dvb96iwcvlvvm1n',
    'ngljb',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
