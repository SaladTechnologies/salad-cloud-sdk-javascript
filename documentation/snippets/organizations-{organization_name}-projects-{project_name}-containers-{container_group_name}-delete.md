```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.deleteContainerGroup(
    'acme-corp',
    'dev-env',
    'ajab1nydcnlz73jmjvon',
  );

  console.log(data);
})();
```
