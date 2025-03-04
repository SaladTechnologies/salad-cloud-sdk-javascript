```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.systemLogs.getSystemLogs(
    'acme-corp',
    'dev-env',
    'c588wz3z920dm3uvrx5hqx52s2sk49-8xwul52o126lpi',
  );

  console.log(data);
})();
```
