```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.workloadErrors.getWorkloadErrors(
    'x4hd7xmy53wgq8mpuy5k2wfbbzlhws5edt3sje',
    'hug6abtk-ewjq1594j27m6u1whmqikj9f18pd',
    'lq52i317o2r8pje-v4-ccp8q-329szw31h4fee236',
  );

  console.log(data);
})();
```
