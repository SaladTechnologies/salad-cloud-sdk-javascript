```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.queues.listQueues(
    'ymfonstzqzsopxf2dyjvm8sjxa281t2p7ne1m',
    'sxk12v91ajseb3fzyxdaq',
  );

  console.log(data);
})();
```
