```typescript
import { SaladCloudSdk, UpdateQueue } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const updateQueue: UpdateQueue = {
    displayName: 'eYpeFzhf',
    description: 'description',
  };

  const { data } = await saladCloudSdk.queues.updateQueue(
    'xrt9bh26smkuf3v0nd2roppi64zikv73wys88ns82g85qcczec2y8bnwc4gs',
    'y6aeebojnkc8rl8-7pysy62j25cdn',
    'ujh0v34w5-21z63jxnxh38ckz48-k1ecu',
    updateQueue,
  );

  console.log(data);
})();
```
