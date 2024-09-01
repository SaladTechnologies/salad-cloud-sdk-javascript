```typescript
import { CreateQueue, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createQueue: CreateQueue = {
    name: 'wcaz2jbu5pfmpygxffsf4bh4e6',
    displayName: 'Ef',
    description: 'aute Ut nostrud veniam sint',
  };

  const { data } = await saladCloudSdk.queues.createQueue(
    'rtxaydgbmb5wprcvb9628akhug9lnd3c0',
    'p4bdb9jsi-f1xex70mdgjf5n-5ua-e28xyu9ujbls0vsz6xilo12xl52y9c177',
    input,
  );

  console.log(data);
})();
```
