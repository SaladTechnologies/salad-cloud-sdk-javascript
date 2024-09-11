```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.listContainerGroups(
    'g4zikv73wys88ns82g85qcczec2y8bnwc4gs8q6aeebojnkc8rl8-7px',
    'n62j25cdo2sjh0v34w5-21z63jxnxh38ckz48-k1ecu',
  );

  console.log(data);
})();
```
