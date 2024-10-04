```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.getQueue(
    'bb5wprcvb9628akhug9lnd2',
    'bw-4bdb9jsi-f1xex70mdgjf5n-5ua-e28xyu9ujbls0vsy',
    'wilo12xl52y9c178cmdya6ykpby-hunb0b6s7s2l',
  );

  console.log(data);
})();
```
