```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.workloadErrors.getWorkloadErrors(
    'vfx7paxg-h04conuqmz3mxb9iax5-m-abnacd2yjnwg6xlm838mbbxxjo-h52',
    'sonqyj90ubo8reysxpqq7xwg32lxlhjn2dh8g4ria4k5s',
    'dzd-3pdeog5yu4egwx3g9mbcmuyxmxx',
  );

  console.log(data);
})();
```
