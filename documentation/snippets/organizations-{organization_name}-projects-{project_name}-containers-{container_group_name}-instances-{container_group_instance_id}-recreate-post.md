```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.recreateContainerGroupInstance(
    'dqryzs0nwtgem9',
    's1kzoxeehf59gi91ttsn9ueh4r0udym74yor3eg40ckc',
    'r227v3cr3',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
