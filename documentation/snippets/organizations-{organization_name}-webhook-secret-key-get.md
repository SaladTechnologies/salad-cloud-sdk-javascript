```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.webhookSecretKey.getWebhookSecretKey(
    'mouv4w914sp420zyiuo43jexocjzq6rnxf04dqmccakipx9g3a72svbj',
  );

  console.log(data);
})();
```
