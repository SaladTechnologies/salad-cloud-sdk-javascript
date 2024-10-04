```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.deleteQueueJob('zm-jv', 'tq26', 'je5dpzbgsk8gvp', 'queue_job_id');

  console.log(data);
})();
```
