```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.listQueues(
    'xtp82b9jzwqov1insghigvfq0donadhrrdqx-2redu46g7e',
    'xk27gbnpmwk5xor49bk4ujk7',
  );

  console.log(data);
})();
```
