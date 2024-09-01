```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.webhookSecretKey.updateWebhookSecretKey(
    'hn9h7px3wro2wjja0yeu6kcgk0nggtveqmh45ilbsw4b2dcch55e1sj',
  );

  console.log(data);
})();
```
