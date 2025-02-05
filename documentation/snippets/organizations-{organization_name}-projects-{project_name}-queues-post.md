```typescript
import { CreateQueue, SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createQueue: CreateQueue = {
    name: 'name',
    displayName: 'M a1HEy',
    description: 'description',
  };

  const { data } = await saladCloudSdk.queues.createQueue(
    'ymfonstzqzsopxf2dyjvm8sjxa281t2p7ne1m',
    'sxk12v91ajseb3fzyxdaq',
    createQueue,
  );

  console.log(data);
})();
```
