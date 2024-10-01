```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.webhookSecretKey.getWebhookSecretKey(
    'sqxjgqhc7gu8nezs4j9l1xu8ic3cjd45207kimcabvi76n8',
  );

  console.log(data);
})();
```
