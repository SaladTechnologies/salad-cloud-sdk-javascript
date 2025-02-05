```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.getContainerGroupInstance(
    'z-5ux2vsm',
    'mjjt13u7q3pryx',
    'qnnyigut20zp1dyfm2yp4-lw',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
