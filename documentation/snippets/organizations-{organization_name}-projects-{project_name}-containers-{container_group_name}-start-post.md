```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.startContainerGroup(
    'acme-corp',
    'dev-env',
    'zq611igeuz4vzlgldd4a',
  );

  console.log(data);
})();
```
