```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.getQueueJob(
    'qfyxrcpjzz',
    'u68mnowwsycakrj2ndjibysiw6',
    'qw8v11op7e4dq1ckmwu5v289qp5d1ln00phm2',
    'queue_job_id',
  );

  console.log(data);
})();
```
