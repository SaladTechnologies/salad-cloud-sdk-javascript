```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.restartContainerGroupInstance(
    'pwt3jkl-373gjha9x4b8jfvgcvy-5z9eei5vo7ho3lx9fwf',
    'b6guf5mbszj1pjm7bnkx94c6wxjsm11-6l9gj1w78dzugvi1ay',
    'g3nf416-xd0f74r83g8t-3gf0nk0-ksf6kohlh6m-flte85e',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
