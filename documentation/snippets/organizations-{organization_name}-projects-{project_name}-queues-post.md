```typescript
import { CreateQueue, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createQueue: CreateQueue = {
    name: 'ykm2ls08p3lv',
    displayName: 'Av8HrM6.',
    description: 'nulla enim',
  };

  const { data } = await saladCloudSdk.queues.createQueue(
    'lwt38wqx9ycbbwq7cz7enua',
    'i5ohrcyvt0ap8jxyjtw5spbfh7ukelysoi13iija9co',
    input,
  );

  console.log(data);
})();
```
