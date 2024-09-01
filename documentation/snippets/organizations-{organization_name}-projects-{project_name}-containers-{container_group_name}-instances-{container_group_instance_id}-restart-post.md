```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.restartContainerGroupInstance(
    'kd79h7bg0vpngqc8hz5pxjwi7muqnmuuqsx3q3zm2hxkci5yv6kho',
    'u5ljgqmbs6a7s',
    'qmq3nj6oy8b2wpzbidnelidy9s6k9w',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
