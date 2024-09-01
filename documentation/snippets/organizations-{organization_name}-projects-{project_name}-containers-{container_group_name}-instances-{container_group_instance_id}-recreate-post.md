```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.recreateContainerGroupInstance(
    'xzg6rr4bm5841gi0z8-206cdrb7o1',
    'p6ls0enipujsrco8ums89jy5ldm9v9wniwlzg156f7f4hj66c1pcdqiziv',
    'lrb4rg8t0zwxs2l1ja3src79wfm1p-s-dl9lt39rn',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
