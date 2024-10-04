```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.startContainerGroup(
    'jfybnugpd6',
    'jngr',
    'vjne2vq5j0d2m4f21ex5ozb1-4j-you0d7uftlpfgcaqa-2oc58y844mz',
  );

  console.log(data);
})();
```
