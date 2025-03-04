```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.listContainerGroupInstances(
    'acme-corp',
    'dev-env',
    'cxmy53wgq8mpuy5k2wfbbzlhws5edt3sjekvug6abtk-ewjq1594j27m5',
  );

  console.log(data);
})();
```
