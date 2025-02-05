```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.reallocateContainerGroupInstance(
    'a7tl0fwms3fu3myo74a99jr6ouv4w914sp420zyiuo43jexn',
    'czq6rnxf04dqmccakh',
    'k9g3a72svbjzx0y-i4o1cvulgdrylaujk1yrzfoq1',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
