```typescript
import { SaladCloudSdk, UpdateQueue } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const updateQueue: UpdateQueue = {
    displayName: 'wfoWE',
    description: 'aliqua in sit',
  };

  const { data } = await saladCloudSdk.queues.updateQueue(
    'ljj6uqmy01xsg7k5n8fhpr0uia1-28ec6ahk-1s6u-51xn',
    'jzq0i9u27d9qsg6qsygfg',
    'd7iy1tktkoepudefqkf47dv60kqzd3q1v',
    input,
  );

  console.log(data);
})();
```
