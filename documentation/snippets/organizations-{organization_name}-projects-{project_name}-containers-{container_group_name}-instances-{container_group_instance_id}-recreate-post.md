```typescript
import { SaladCloudSdk } from '@saladtechnologies-oss/salad-cloud-sdk';

(async () => {
  const saladCloudSdk = new SaladCloudSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await saladCloudSdk.containerGroups.recreateContainerGroupInstance(
    'acme-corp',
    'dev-env',
    'n8-fjfpg-8o880hinx8ob81zddo5rum25m5fl-ocry41fabtao7',
    'container_group_instance_id',
  );

  console.log(data);
})();
```
