```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.reallocateContainerGroupInstance(
    'sws1rwna83a3asu0izd6ugn07m5xpcp89lefemdke05z4s9d',
    'ed2caksvlhpzmfccbh2v7dcapp3enb9gd2f4k49vviu53s5',
    'xkwwnw',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
