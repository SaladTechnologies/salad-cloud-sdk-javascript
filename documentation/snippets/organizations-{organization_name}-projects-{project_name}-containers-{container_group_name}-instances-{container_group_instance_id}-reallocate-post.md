```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.reallocateContainerGroupInstance(
    'cq7z43vbdm-ym2fjvtwvm3kubeomi0c157pyuvzjd-oj09gh',
    'rxoh7290af1yiwyo8xtgc4vo',
    'wsr245-lzbbnxajonfxep9ngo2h6p4ol',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
