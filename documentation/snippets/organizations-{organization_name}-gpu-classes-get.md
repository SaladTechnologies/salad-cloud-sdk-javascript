```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.organizationData.listGpuClasses('vsg-okxas9m7y892q4m5rifzmevenpg1vot8xgbal');

  console.log(data);
})();
```
