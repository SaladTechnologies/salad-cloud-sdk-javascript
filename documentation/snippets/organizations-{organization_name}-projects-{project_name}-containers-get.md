```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.listContainerGroups(
    'e5qcczec2y8bnwc4gs8q6aeebojnkc8rl8-7pysy62j25cdo2sjh0v34w5-1',
    't63jxnxh38ckz48-k1ecuzzv5yl-0z8ql-v1qf-186n1',
  );

  console.log(data);
})();
```
