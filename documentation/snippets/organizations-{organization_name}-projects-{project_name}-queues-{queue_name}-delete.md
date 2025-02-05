```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.deleteQueue(
    'xrt9bh26smkuf3v0nd2roppi64zikv73wys88ns82g85qcczec2y8bnwc4gs',
    'y6aeebojnkc8rl8-7pysy62j25cdn',
    'ujh0v34w5-21z63jxnxh38ckz48-k1ecu',
  );

  console.log(data);
})();
```
