```typescript
import { SaladCloudSdk, UpdateQueue } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const updateQueue: UpdateQueue = {
    displayName: 'O5Yf2',
    description: 'cupidatat',
  };

  const { data } = await saladCloudSdk.queues.updateQueue(
    'bb5wprcvb9628akhug9lnd2',
    'bw-4bdb9jsi-f1xex70mdgjf5n-5ua-e28xyu9ujbls0vsy',
    'wilo12xl52y9c178cmdya6ykpby-hunb0b6s7s2l',
    input,
  );

  console.log(data);
})();
```
