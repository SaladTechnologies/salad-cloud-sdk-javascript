```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.systemLogs.getSystemLogs(
    'acme-corp',
    'dev-env',
    'u01x-i8ye07harfhdjmgkewuwm1y388-m7ehzirdxyvm',
  );

  console.log(data);
})();
```
