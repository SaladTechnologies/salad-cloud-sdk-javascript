```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.workloadErrors.getWorkloadErrors(
    'u9szw31h4fee237cnffybnugpd7nbngs47jne2vq5j0d2m4f20',
    'c5ozb1-4j-you0d7uftlpfgcaqa-2oc58y844m0ne',
    'khlkkgda39h5upyur493wxwbxrj4x',
  );

  console.log(data);
})();
```
