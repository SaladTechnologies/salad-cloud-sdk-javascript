```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.workloadErrors.getWorkloadErrors(
    'kr8pje-v4-ccp8q-329szw31h4fee237cnffybnugpd7nbngr',
    'vjne2vq5j0d2m4f21ex5ozb1-4j-you0d7uftlpfgcaqa-2oc58y844mz',
    'jpqhlkkgd',
  );

  console.log(data);
})();
```
