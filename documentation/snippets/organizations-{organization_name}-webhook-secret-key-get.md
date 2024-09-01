```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.webhookSecretKey.getWebhookSecretKey(
    'dyxdaqq1t3iwwpawdlk-78rt9bh26smkuf3v0nd2ropp',
  );

  console.log(data);
})();
```
