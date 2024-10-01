```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.startContainerGroup(
    'ppw00apvowm2uk3ia7vi9jlaex78t719g',
    'gf-7ed',
    'jmguhpzfluex6-1ksn8mw9',
  );

  console.log(data);
})();
```
