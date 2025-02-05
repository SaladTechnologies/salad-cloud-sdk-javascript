```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.recreateContainerGroupInstance(
    'l7wk9jgwxjp56dzbnwtbgowklqt1wsbe00osnj3370c21vihvroq1cuqjb',
    'g-0jo001xz6w2uhgmhtgvpqzhztmaqawqn92-rig0bznv-21cb7s',
    'ghp2ecbvldrihtmaa78lqy5q1wdpi7ayf187etvt65ezckogou9lhenou1q2jx',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
