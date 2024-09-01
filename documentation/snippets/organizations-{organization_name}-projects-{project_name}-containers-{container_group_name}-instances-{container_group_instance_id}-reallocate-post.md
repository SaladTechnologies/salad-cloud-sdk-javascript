```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.reallocateContainerGroupInstance(
    'xk27gbnpmwk5xor49bk4ujk7',
    'cy1l6xj-5vzihwp4ho850l3faynnuq71ru6y',
    'mgza-e8llajq25o36x8b-38phh',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
