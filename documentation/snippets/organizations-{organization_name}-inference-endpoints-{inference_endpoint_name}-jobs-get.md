```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpointJobs(
    'zsmxeaksea26my28jd3tcl',
    'laboris ullamco cillum',
    {
      page: 862733444,
      pageSize: 21,
    },
  );

  console.log(data);
})();
```
