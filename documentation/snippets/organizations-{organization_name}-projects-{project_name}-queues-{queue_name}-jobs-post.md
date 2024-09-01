```typescript
import { CreateQueueJob, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createQueueJob: CreateQueueJob = {
    input: [],
    metadata: {},
    webhook: 'webhook',
  };

  const { data } = await saladCloudSdk.queues.createQueueJob(
    'qiqiazzthr12lsqkk1iq35-ix3pzbff9-f8x8ls569n71',
    'ht3-tiei7j9ye5yzdixjzbx5ywjbd',
    'xp465rhqkyqstwpk8kd3jy5kakai4lollggq7i7xz97',
    input,
  );

  console.log(data);
})();
```
