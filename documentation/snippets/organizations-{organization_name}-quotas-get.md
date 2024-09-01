```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.quotas.getQuotas('y-7yhh5v70xusg163gdfs9vma6wkyd2rcvosdiwny-k');

  console.log(data);
})();
```
