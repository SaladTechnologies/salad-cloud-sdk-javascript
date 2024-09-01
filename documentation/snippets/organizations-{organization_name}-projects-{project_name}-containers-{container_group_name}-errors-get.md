```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.workloadErrors.getWorkloadErrors(
    'cg3m2ys7p7s0l7bztd09ndj7juif71slwjakka',
    'rcn12djtrq4osvz',
    'ha1vqw6i748x874akg4f74ap-5lo17i',
  );

  console.log(data);
})();
```
