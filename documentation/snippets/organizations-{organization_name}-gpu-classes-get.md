```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.organizationData.listGpuClasses('ydd335fjnk1n3-2syw9jsf8am-o3r88blouno');

  console.log(data);
})();
```
