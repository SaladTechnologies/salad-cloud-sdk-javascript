```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.deleteQueueJob(
    'hrf4burmjglxm0qfqui7u2clb2gfk12ij-g2i1z7we77-hpgwjdxcrr6-3c9',
    'dv3zyz-95e2zp7wjr',
    'zkrdg5h3eeasigc',
    'queue_job_id',
  );

  console.log(data);
})();
```
