```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.deleteContainerGroup(
    'acme-corp',
    'dev-env',
    'deo5-1hcilmn8m1ouq40vp547cf-9sn3yad',
  );

  console.log(data);
})();
```
