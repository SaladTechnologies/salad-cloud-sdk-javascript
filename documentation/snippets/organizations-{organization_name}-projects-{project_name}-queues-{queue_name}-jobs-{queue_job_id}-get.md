```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.getQueueJob(
    'j-8sae7t0u7o0emyztq64o8ut710qtepjztx34mk6lruecseiyq06ab3ok5xr',
    'eokxas9m7y892q4m5rifzmevenpg1vot8xgbal184sloim-c7555huym18dia9d',
    'zbvvpn2qgtohp',
    'queue_job_id',
  );

  console.log(data);
})();
```
