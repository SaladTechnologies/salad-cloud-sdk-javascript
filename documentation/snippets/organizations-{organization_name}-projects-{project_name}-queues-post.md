```typescript
import { CreateQueue, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createQueue: CreateQueue = {
    name: 'ho4d79h7bg0vpngqc8hz5pxjwi',
    displayName: 'IWPKHVWPTc',
    description: 'aliqua id nostrud',
  };

  const { data } = await saladCloudSdk.queues.createQueue(
    'xtp82b9jzwqov1insghigvfq0donadhrrdqx-2redu46g7e',
    'xk27gbnpmwk5xor49bk4ujk7',
    input,
  );

  console.log(data);
})();
```
