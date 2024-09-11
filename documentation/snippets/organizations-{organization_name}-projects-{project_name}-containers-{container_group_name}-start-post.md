```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.startContainerGroup(
    'zfx07sgyz1fs97sfhtue78-54vdogp2qrcnt-8a',
    'v7jhy3jn2rdf012fi7ouno3mk9',
    'a4d0ajj5ajjquzeg-z3kvqxtnoxnlzhjhjt-8naw',
  );

  console.log(data);
})();
```
