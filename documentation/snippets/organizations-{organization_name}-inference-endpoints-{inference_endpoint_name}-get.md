```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.inferenceEndpoints.getInferenceEndpoint(
    'cx2mv031v8afyh5y7ht26t-sfc4u7-dhjnxb2hbrz-ipttu1m2vc',
    'inference_endpoint_name',
  );

  console.log(data);
})();
```
