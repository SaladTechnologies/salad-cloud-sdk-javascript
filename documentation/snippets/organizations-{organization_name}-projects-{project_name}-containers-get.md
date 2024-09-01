```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.listContainerGroups(
    'ep7fgeqvy6vfd66h1ewe-69h',
    'dpdhw0h4i3hwpdzw9',
  );

  console.log(data);
})();
```
