```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.listContainerGroupInstances(
    'kjhy3jn2rdf012fi7ouno3mk-ax4d0ajj5ajjquzeg-z3kvqxtnoxnlzhi',
    'ft-8nawc40o0gqev-m',
    'jpy8af-s7rq68p2lenu',
  );

  console.log(data);
})();
```
