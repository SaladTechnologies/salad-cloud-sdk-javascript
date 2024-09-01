```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.listQueues(
    'lwt38wqx9ycbbwq7cz7enua',
    'i5ohrcyvt0ap8jxyjtw5spbfh7ukelysoi13iija9co',
  );

  console.log(data);
})();
```
