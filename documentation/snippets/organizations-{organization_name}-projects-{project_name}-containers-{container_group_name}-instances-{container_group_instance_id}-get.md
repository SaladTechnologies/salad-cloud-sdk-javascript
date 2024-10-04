```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroupInstance(
    'a09xnu6-fkv3',
    'ca4ydy-pi16e4ddle58fi8u9w2qgnsgj7cn',
    'b4p90a72aagy0fz',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
