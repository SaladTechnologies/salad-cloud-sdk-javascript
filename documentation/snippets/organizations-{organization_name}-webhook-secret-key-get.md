```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.webhookSecretKey.getWebhookSecretKey('eqlckzjaa8wys5nkv5h5z8lk18');

  console.log(data);
})();
```
