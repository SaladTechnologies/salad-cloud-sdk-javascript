```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.workloadErrors.getWorkloadErrors(
    'mpqq7xwg32lxlhjn2dh8g4ria4k5sfrzd-3pdeog4',
    'r4egwx3g9mbcmuyxmxxkxqv-nsi3p0ihren6',
    'h3cozmla70brzt',
  );

  console.log(data);
})();
```
